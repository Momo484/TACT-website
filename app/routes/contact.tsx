import { Mail, MapIcon, Phone } from "lucide-react";
import ContactForm from "~/components/contactForm";

export default function Contact() {
  return (
    <div>
      {/* hero section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="flex flex-col text-gray-50 items-center justify-center h-full w-full mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">Contact Us</h1>
          <p className="text-2xl md:text-3xl mb-6">
            Let's start a conversation about your next project
          </p>
        </div>
      </section>

      {/*Getting in touch part */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-3xl mb-8">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have a question about our services or want to discuss a project?
              We'd love to hear from you.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">(61) 0499 276 230</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Email</h3>
                  <p className="text-gray-600">Tulshi.tact@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex-shrink-0">
                  <MapIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Location</h3>
                  <p className="text-gray-600">Pennant Hills, NSW, Australia</p>
                </div>
              </div>
            </div>
          </div>
          {/* Simple Email Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
