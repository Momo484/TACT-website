import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import TACTLogo from "../images/TACTLogo.png";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // gives us access to url pathname, shared states etc.
  const location = useLocation();
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  // checks if the given page is the active page by looking at the url.
  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  // This is going to render a default header
  // Then render the child component
  // then the default footer.
  return (
    <div className="min-h-screen flex flex-col ">
      {/* this is going to be the header part */}
      {/*White background with a very smaller bottom border, 
      stuck to the top above all else */}
      <header className="bg-white border-b sticky top-0 z-50">
        {/* <nav> is just semantics, used to tell website that important 
            stored in the next div */}
        {/* sets max wide, horizontal margins and padding */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* this is for putting logo on far left and links on far right */}
          <div className="flex justify-between items-center h-16">
            {/* The logo */}
            <Link to="/" className="flex items-center">
              <img src={TACTLogo} alt="TACT logo" className="h-14 w-auto" />
            </Link>
            {/* Desktop navigation */}
            {/* hidden ensures its hidden unless the screen is bigger then md, for which case this is shown */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  to={item.href}
                  key={item.name}
                  className={`transition-colors ${isActive(item.href) ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                >
                  {item.name}
                </Link>
              ))}
              {/* mobile navigation */}
              {/* md:hidden means this is hidden for any screen bigger then md */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>

              {mobileMenuOpen && (
                <div className="md:hidden py-4 border-t">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 transition-colors ${
                        isActive(item.href)
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* main content, defer to child route */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* put in columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl tracking-wider mb-4">TACT</h3>
              <p className="text-gray-400">
                Civil Engineering Consulting Excellence
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(61) 0499 276 230</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Tulshi.tact@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Pennant Hills, NSW, Australia</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} TACT Consulting Services. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
