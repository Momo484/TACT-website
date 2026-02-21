import { Award, Target, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description:
        "We deliver accurate, detailed engineering solutiosn that meet the highest standards.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working closely with clients and stakeholders to achieve shared goals",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to exceptional quality in every project we undertake",
    },
  ];

  return (
    <div>
      {/* hero seciton (ABOUT TACT) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="flex flex-col text-gray-50 items-center justify-center h-full w-full mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">About TACT</h1>
          <p className="text-2xl md:text-3xl mb-6">
            Technical Advancement in Civil Technology
          </p>
        </div>
      </section>
      {/* Our Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-6 text-center">Our Mission</h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-700">
            TACT is dedicated to providing innovative and sustainable civil
            engineering solutions that shape the infrastructure of tomorrow.
            With decades of combined experience, our team brings technical
            expertise and creative problem-solving to every project.
          </p>
          <p className="text-xl md:text-2xl text-gray-700">
            We believe in building lasting relationships with our clients
            through transparent communication, reliable service, and unwavering
            commitment to project success.
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
