import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Service from "~/components/service";

export default function Home() {
  const services = [
    {
      title: "Urban Zoning Planning",
      description:
        "Experienced insight into zoning law for all types of build environments",
    },
    {
      title: "Intersection Design",
      description: "Rapid and proffesional drafting at a competitive price",
    },
    {
      title: "General consulting",
      description:
        "Tap into a wealth of experience to guide your next design decisions",
    },
    {
      title: "Transport networks",
      description:
        "Develop transport infrastructure to satify a growing populace",
    },
  ];

  return (
    <div>
      <section className="h-[60vh] w-full bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1655975719898-8f3432eed322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NzEyMjM1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080')]">
        {/* Add a wrapper to see content over the image */}
        <div className="flex flex-col h-full w-full items-center justify-center bg-black/40 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6">
            Engineered Excellence and Trusted Experience
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            TACT - Your partner in civil engineering
          </p>
          {/* Buttons! */}
          <div className="flex flex-row">
            <Link
              to="/portfolio"
              className="inline-flex bg-blue-600 hover:bg-blue-900 text-white px-8 py-3 rounded transition-colors mx-5"
            >
              View Our Work
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-400 text-black px-8 py-3 rounded transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
      {/* Services section*/}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="flex flex-col h-full w-full items-center justify-center text-center text-black">
          <h1 className="text-3xl md:text-4xl mb-6">Our services</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            Comprehensive civil engineering solutions for every project
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index}>
              <Service
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Lead section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="flex flex-col h-full w-full items-center justify-centertext-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6">
            Ready to Start Your Project?
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Contact us today to discuss how we can help bring your vision to
            life.
          </p>
          {/* Buttons! */}
          <div className="flex flex-row">
            <Link
              to="/contact"
              className="inline-flex bg-white hover:bg-gray-400 text-black px-8 py-3 rounded transition-colors mx-5"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
