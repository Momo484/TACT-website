import { CheckCircle } from "lucide-react";

export default function Service({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <CheckCircle className="h-10 w-10 text-blue-600 mb-4" />
      <h3 className="text-xl mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
