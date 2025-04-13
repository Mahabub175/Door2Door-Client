import { Select } from "antd";
import DeliveryFilter from "../../../components/Shared/Components/DeliveryFilter";
import DeliveryHeader from "../../../components/Shared/Components/DeliveryHeader";

const AllDeliveries = () => {
  return (
    <>
      <DeliveryHeader title={"All Deliveries"} />
      <div className="bg-white p-5 rounded-lg">
        <div className="border-b mb-4 pb-4 flex items-center gap-4">
          <h3 className="font-medium text-base">Delivery List</h3>
          <Select
            showSearch
            placeholder={"Delivery Filter"}
            allowClear
            size="middle"
          />
        </div>
        <DeliveryFilter />
      </div>
    </>
  );
};

export default AllDeliveries;
