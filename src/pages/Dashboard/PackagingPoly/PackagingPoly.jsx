import { Card, Tag, Divider } from "antd";
import {
  FaWeightHanging,
  FaRulerCombined,
  FaMoneyBillWave,
} from "react-icons/fa";

const polyPackages = [
  {
    id: 1,
    name: "Standard Poly Mailer",
    image:
      "https://fnfshoppingbd.com/storage/app/public/product/2023-03-09-640958d36db25.png",
    dimensions: '10" x 13"',
    weightCapacity: "Up to 3 kg",
    price: "৳8",
    tags: ["Waterproof", "Tamper-proof", "Lightweight"],
  },
  {
    id: 2,
    name: "Large Poly Mailer",
    image:
      "https://fnfshoppingbd.com/storage/app/public/product/2023-03-09-640958d36db25.png",
    dimensions: '14" x 19"',
    weightCapacity: "Up to 7 kg",
    price: "৳12",
    tags: ["Reusable", "Tear-resistant", "Weather-proof"],
  },
  {
    id: 3,
    name: "Eco-Friendly Poly Mailer",
    image:
      "https://fnfshoppingbd.com/storage/app/public/product/2023-03-09-640958d36db25.png",
    dimensions: '12" x 16"',
    weightCapacity: "Up to 5 kg",
    price: "৳15",
    tags: ["Biodegradable", "Recyclable", "Eco-safe"],
  },
];

const PackagingPoly = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {polyPackages.map((poly) => (
        <Card
          key={poly.id}
          hoverable
          className="w-full shadow-xl rounded-2xl"
          cover={
            <img
              alt={poly.name}
              src={poly.image}
              className="rounded-t-2xl h-64 object-cover"
            />
          }
        >
          <h2 className="text-xl lg:text-2xl font-medium mb-2 text-primary">
            {poly.name}
          </h2>
          <p className="text-gray-600 mb-4">
            {poly.description ||
              "Durable, secure poly mailer ideal for safe courier delivery."}
          </p>

          <Divider />

          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <FaRulerCombined className="text-primary" />
              <span>
                <strong>Dimensions:</strong> {poly.dimensions}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaWeightHanging className="text-primary" />
              <span>
                <strong>Weight Capacity:</strong> {poly.weightCapacity}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaMoneyBillWave className="text-primary" />
              <span>
                <strong>Price:</strong> {poly.price} per piece
              </span>
            </div>
          </div>

          <Divider />

          <div className="flex gap-2 flex-wrap">
            {poly.tags.map((tag, index) => (
              <Tag key={index} color="blue">
                {tag}
              </Tag>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PackagingPoly;
