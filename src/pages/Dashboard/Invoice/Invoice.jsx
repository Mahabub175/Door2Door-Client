import { Select } from "antd";
import invoice from "../../../assets/images/truck.png";
import { DatePicker } from "antd";
import { MdOutlineArrowDropDown } from "react-icons/md";
const { RangePicker } = DatePicker;

const Invoice = () => {
  return (
    <section>
      <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-5 mt-5 mb-10">
        <h2 className="text-2xl font-medium">Invoice List</h2>

        <div className="flex gap-5">
          <Select
            showSearch
            placeholder={"Type"}
            allowClear
            size="large"
            suffixIcon={
              <MdOutlineArrowDropDown className="text-primary text-2xl" />
            }
            className="lg:w-2/6"
          />
          <RangePicker
            size="large"
            allowClear
            placeholder={"Select Date Range"}
          />
        </div>
      </div>
      <div className="bg-white rounded-lg py-20 flex flex-col justify-center items-center text-center">
        <img src={invoice} alt="invoice" />
        <h2 className="text-2xl font-medium mb-4">No invoice found</h2>
        <p className="text-base text-textColor mb-5">
          There is no invoice available yet. Generated invoices will be shown
          here when available.
        </p>
      </div>
    </section>
  );
};

export default Invoice;
