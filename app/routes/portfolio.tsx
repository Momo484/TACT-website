import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Project from "~/components/project";

export default function Portfolio() {
  const projects = [
    {
      title: "Metropolitan Bridge Expansion",
      category: "Infrastructure",
      description:
        "Structural analysis and expansion design for a major metropolitan bridge system.",
      image:
        "https://images.unsplash.com/photo-1724118135465-edeef6acf221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZ2UlMjBpbmZyYXN0cnVjdHVyZSUyMGVuZ2luZWVyaW5nfGVufDF8fHx8MTc3MTIyMzU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Downtown Commercial Complex",
      category: "Structural Engineering",
      description:
        "Complete structural engineering for a 30-story mixed-use development.",
      image:
        "https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzEyNDE0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Regional Highway Network",
      category: "Transportation",
      description:
        "Design and planning for 50 miles of new highway infrastructure.",
      image:
        "https://images.unsplash.com/photo-1552278596-1355a1421b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwcm9hZCUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3MTIyMzU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Urban Renewal Project",
      category: "Planning",
      description:
        "Comprehensive site development and infrastructure planning for urban redevelopment.",
      image:
        "https://images.unsplash.com/photo-1760553120324-d3d2bf53852b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHBsYW5uaW5nJTIwY2l0eSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MTI5MDgzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Water Treatment Facility",
      category: "Water Resources",
      description:
        "Design and implementation of state-of-the-art water treatment infrastructure.",
      image:
        "https://images.unsplash.com/photo-1655975719898-8f3432eed322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NzEyMjM1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Sustainable Transit Hub",
      category: "Transportation",
      description:
        "Multi-modal transportation center with focus on sustainable design.",
      image:
        "https://images.unsplash.com/photo-1724118135465-edeef6acf221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZ2UlMjBpbmZyYXN0cnVjdHVyZSUyMGVuZ2luZWVyaW5nfGVufDF8fHx8MTc3MTIyMzU4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
