import { Button } from "antd";
import { FaInfoCircle } from "react-icons/fa";

const data = [
  { id: 1, name: "Last invoice date", amount: "--" },
  { id: 2, name: "Payment sent to you", amount: "$0" },
  { id: 3, name: "Payment done via", amount: "--" },
  { id: 5, name: "Lifetime earning", amount: "$0" },
];

const CodDetails = () => {
  return (
    <section className="mt-5 lg:mt-10">
      <h3 className="text-2xl lg:text-3xl font-medium">
        Cash on Delivery (COD) Details
      </h3>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="bg-white p-5 mt-5 rounded-lg w-full flex flex-col gap-4">
          {data?.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <p className="text-base font-medium text-textColor">
                  {item.name}
                </p>
                <FaInfoCircle className="text-primary" />
              </div>
              <p className="text-xl font-medium">{item.amount}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-5 lg:mt-5 rounded-lg w-full">
          <div>
            <div className="flex items-center gap-4">
              <p className="text-base font-medium text-textColor">
                Payment in Review
              </p>
              <FaInfoCircle className="text-primary" />
            </div>
            <p className="text-xl font-medium mt-2">$0</p>
          </div>
          <div className="mt-2 border-b pb-2">
            <div className="flex items-center gap-4">
              <p className="text-base font-medium text-textColor">
                Payment Preparing for Invoice
              </p>
              <FaInfoCircle className="text-primary" />
            </div>
            <p className="text-xl font-medium mt-2">$0</p>
          </div>
          <div className="flex justify-end">
            <Button className="mt-4 px-10">Details</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodDetails;
