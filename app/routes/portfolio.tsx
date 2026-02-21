import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Project from "~/components/project";

export default function Portfolio() {
  const projects = [
    {
      title: "Gunningbar Subdivision",
      category: "Civil Design",
      description: "Civil design and subdivision support",
      image: "",
    },
    {
      title: "Nevertire Truck Parking Facility",
      category: "Heavy Vechicle Infrastructure",
      description:
        "Concept Design and project support for heavy vehicle infrastructure",
      image: "",
    },
    {
      title:
        "Industrial Access Road/Dubbo Street/Carinda Rd intersection Upgrade",
      category: "Road Design",
      description: "Road design, safety, and constructability input",
      image: "",
    },
    {
      title: "Oxley Hwy &amp; Marthaguy Road Intersection Upgrade",
      category: "Road Design",
      description:
        "Detailed design for Intersection upgrade works and technical support",
      image: "",
    },
  ];

  return (
    <div>
      {/* hero seciton (ABOUT TACT) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="flex flex-col text-gray-50 items-center justify-center h-full w-full mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">Our Services</h1>
          <p className="text-2xl md:text-3xl mb-6">
            Explore our diverse range of completed projects
          </p>
        </div>
      </section>

      {/* project card section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index}>
                <Project
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  image={project.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Lead section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="flex flex-col h-full w-full items-center justify-centertext-center text-white">
          <h1 className="text-4xl md:text-5xl mb-6">
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
