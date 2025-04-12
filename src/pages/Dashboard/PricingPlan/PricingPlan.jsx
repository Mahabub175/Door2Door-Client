import { Table } from "antd";

const tableData = [
  {
    key: 1,
    type: "Parcel",
    pickupLocation: "Inside Dhaka",
    deliveryLocation: "Inside Dhaka",
    weight: "0-0.5kg",
    deliveryTime: "Standard Delivery",
    price: "$60.00",
    status: "active",
  },
  {
    key: 2,
    type: "Parcel",
    pickupLocation: "Inside Dhaka",
    deliveryLocation: "Inside Dhaka",
    weight: "0-0.5kg",
    deliveryTime: "Standard Delivery",
    price: "$60.00",
    status: "active",
  },
  {
    key: 3,
    type: "Parcel",
    pickupLocation: "Inside Dhaka",
    deliveryLocation: "Inside Dhaka",
    weight: "0-0.5kg",
    deliveryTime: "Standard Delivery",
    price: "$60.00",
    status: "active",
  },
];

const pricingInfo = [
  "1% Cash On Delivery Fee May Apply",
  "Inside Dhaka 15 BDT Per Kg will apply after 2Kg",
  "Outside Dhaka 25 BDT Per Kg will apply after 2Kg",
  "Same Day Delivery 15 BDT Per Kg will apply after 2Kg",
  "Price may change during Promotions",
  "Suburbs are Gazipur, Keranigong, Naryangong, Savar",
];

const PricingPlan = () => {
  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Pickup Location",
      dataIndex: "pickupLocation",
      key: "pickupLocation",
    },
    {
      title: "Delivery Location",
      dataIndex: "deliveryLocation",
      key: "deliveryLocation",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "Delivery Time",
      dataIndex: "deliveryTime",
      key: "deliveryTime",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  return (
    <div>
      <header className="flex items-center justify-between mb-5">
        <h3 className="text-2xl lg:text-3xl font-medium">Stores</h3>
      </header>
      <section>
        <Table dataSource={tableData} columns={columns} pagination={false} />
      </section>
      <ul className="mt-8">
        {pricingInfo.map((info, index) => (
          <li
            key={index}
            className="text-base font-medium list-disc list-inside mb-2"
          >
            {info}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingPlan;
