import { Collapse } from "antd";
import { BiSolidMessageMinus } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

const AgentMessage = () => {
  const items = [
    {
      key: "1",
      label: (
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BiSolidMessageMinus className="text-primary text-xl mr-3" />
            <p className="text-base font-medium">Agent Messages</p>
          </div>
          <p className="text-primary text-base font-medium flex items-center gap-1">
            Read All
          </p>
        </div>
      ),
      children: (
        <p className="text-sm text-gray-600">
          This is an example message from your agent.
        </p>
      ),
    },
  ];

  return (
    <Collapse
      bordered={false}
      expandIconPosition="end"
      expandIcon={({ isActive }) => (
        <IoIosArrowForward
          className={`transition-transform duration-300 -ml-2 mt-1 ${
            isActive ? "rotate-90" : ""
          }`}
        />
      )}
      className="bg-white p-0 mt-5 rounded-lg"
      items={items}
    />
  );
};

export default AgentMessage;
