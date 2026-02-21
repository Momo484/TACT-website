export default function About() {
  return (
    <div>
      {/* hero seciton (ABOUT TACT) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-950">
        <div className="flex flex-col text-gray-50 items-center justify-center h-full w-full">
          <h1 className="text-5xl md:text-6xl mb-6">About TACT</h1>
          <p className="text-2xl md:text-3xl mb-6">
            Technical Advancement in Civil Technology
          </p>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col text-black bg-gray-50 items-center justify-center h-full w-full">
          <h1 className="text-3xl md:text-4xl mb-6">Our Mission</h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-900">
            TACT is dedicated to providing innovative and sustainable civil
            engineering solutions that shape the infrastructure of tomorrow.
            With decades of combined experience, our team brings technical
            expertise and creative problem-solving to every project. We believe
            in building lasting relationships with our clients through
            transparent communication, reliable service, and unwavering
            commitment to project success.
          </p>
        </div>
      </section>
    </div>
  );
}
