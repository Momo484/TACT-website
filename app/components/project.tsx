export default function Project({
  title,
  category,
  description,
  image,
}: {
  title: string;
  category: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div
        className={`relative h-64 w-full bg-cover bg-center bg-no-repeat bg-[url('${image}')]`}
      >
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded text-sm">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
