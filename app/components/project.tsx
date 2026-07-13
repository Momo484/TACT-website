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
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full">
      <div
        className="relative h-85 w-full bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded text-sm">
          {category}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl mb-3">{title}</h3>
        <p className="text-gray-600 flex-1">{description}</p>
        <p className="text-gray-400 text-xs mt-4">
          Contains data from Digital Atlas Australia, CC BY 4.0
        </p>
      </div>
    </div>
  );
}
