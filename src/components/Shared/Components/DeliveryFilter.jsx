import { Button, DatePicker, Input, Select } from "antd";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";

const { RangePicker } = DatePicker;

const DeliveryFilter = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-5 mb-10">
      <Input placeholder="Consignment ID" prefix={<BsSearch />} size="large" />
      <Input placeholder="Order ID" prefix={<BsSearch />} size="large" />
      <Select
        showSearch
        placeholder={"Order Status"}
        allowClear
        size="large"
        className="w-full"
      />
      <Input
        placeholder="Recipient Name/Phone"
        prefix={<BsSearch />}
        size="large"
      />
      <Input
        placeholder="Recipient Name/Phone"
        prefix={<BsSearch />}
        size="large"
      />
      <RangePicker
        size="large"
        allowClear
        placeholder={"Select Date Range"}
        className="w-full"
      />
      <button size="large" className="font-normal border px-2 py-3 rounded-lg">
        <BsThreeDotsVertical />
      </button>
      <Button size="large" className="font-normal">
        Export CSV
      </Button>
    </div>
  );
};

export default DeliveryFilter;
