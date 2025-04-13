import { Button, Select } from "antd";
import DeliveryFilter from "../../../components/Shared/Components/DeliveryFilter";
import DeliveryHeader from "../../../components/Shared/Components/DeliveryHeader";
import truck from "../../../assets/images/truck.png";

const data = [
  { id: 1, name: "At Sorting", amount: "0", percentage: "0%" },
  { id: 2, name: "In transit", amount: "0", percentage: "0%" },
  { id: 3, name: "At delivery hub", amount: "0", percentage: "0%" },
  { id: 4, name: "Assigned for delivery", amount: "0", percentage: "0%" },
  { id: 5, name: "Delivery on hold", amount: "0", percentage: "0%" },
  { id: 5, name: "Collectable amount", amount: "$0" },
];

const ActiveDeliveries = () => {
  return (
    <>
      <DeliveryHeader title={"Active Deliveries"} />
      <div className="bg-white p-5 rounded-lg">
        <div className="border-b mb-4 pb-4 flex flex-wrap items-center gap-4">
          <h3 className="font-medium text-base">Delivery List</h3>
          <Select
            showSearch
            placeholder={"Delivery Filter"}
            allowClear
            size="middle"
          />
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-5 mb-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 bg-light rounded p-5 w-full md:w-[150px] lg:w-[250px] h-[120px] justify-center"
            >
              <h3 className="xl:text-lg font-medium text-textColor">
                {item.name}
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-medium">{item.amount}</p>
                <p className="text-xl">{item?.percentage}</p>
              </div>
            </div>
          ))}
        </div>
        <DeliveryFilter />
        <div className="flex flex-col text-center justify-center items-center">
          <img src={truck} alt="deliveryLink" />
          <h2 className="text-2xl font-medium mb-4">No delivery found</h2>
          <p className="text-base text-textColor mb-5">
            There is no delivery that matches your filter or you have not
            created one yet. Let’s create one.
          </p>
          <Button size="large" className="font-normal">
            See In Archive
          </Button>
        </div>
      </div>
    </>
  );
};

export default ActiveDeliveries;
