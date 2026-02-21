import { Award, Target, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Technical Excellence",
      description: "We deliver High-quality, accurate, and compliant solutions",
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Tailored solutions aligned with client objectives",
    },
    {
      icon: Award,
      title: "Practicality",
      description: "Real-world, constructible, and efficient outcomes",
    },
  ];

  return (
    <div>
      {/* hero seciton (ABOUT TACT) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="flex flex-col text-gray-50 items-center justify-center h-full w-full mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">About TACT</h1>
          <p className="text-2xl md:text-3xl mb-6">How can we help you?</p>
        </div>
      </section>
      {/* Our Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-6 text-center">Our Mission</h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-700">
            TACT Consulting Services is a civil engineering and project
            management consultancy delivering practical, compliant, and
            cost-effective infrastructure design solutions. We support clients
            through all stages of a project—from concept and detailed design to
            construction support and delivery.
          </p>
          <p className="text-xl md:text-2xl text-gray-700">
            Our services are underpinned by strong technical capability, local
            industry knowledge, and a commitment to achieving efficient,
            buildable outcomes. TACT Consulting Services works closely with
            clients, councils, contractors, and stakeholders to ensure project
            objectives are met safely, on time, and within budget.
          </p>
        </div>
      </section>
      {/* Our Values Section */}
      <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl mb-4">{value.title}</h3>
                  <p className="text-gray-600 text-lg">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Last section, numbers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="text-6xl text-blue-600">5+</h3>
            <p className="text-gray-600 text-xl">Projects completed</p>
          </div>
          <div>
            <h3 className="text-6xl text-blue-600">25+</h3>
            <p className="text-gray-600 text-xl">Years Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
}
