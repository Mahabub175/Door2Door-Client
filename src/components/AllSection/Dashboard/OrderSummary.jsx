import { FaInfoCircle } from "react-icons/fa";
import icon1 from "../../../assets/images/icon1.png";
import icon2 from "../../../assets/images/icon2.png";
import icon3 from "../../../assets/images/icon3.png";
import icon4 from "../../../assets/images/icon4.png";
import icon5 from "../../../assets/images/icon5.png";

const data = [
  { id: 1, name: "At Sorting", amount: "0", icon: icon1 },
  { id: 2, name: "In Transit", amount: "0", icon: icon2 },
  { id: 3, name: "At Delivery Hub", amount: "0", icon: icon3 },
  { id: 4, name: "Assigned for Delivery", amount: "0", icon: icon4 },
  { id: 5, name: "On Hold", amount: "0", icon: icon5 },
];

const OrderSummary = () => {
  return (
    <section className="mt-5 lg:mt-10">
      <h3 className="text-2xl lg:text-3xl font-medium">Summary</h3>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="bg-white p-5 mt-5 rounded-lg w-full">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap items-center gap-4 text-base">
              <p className="text-2xl font-medium">0 Orders</p>
              <p className="text-textColor">
                (0 orders Pending) Currently active
              </p>
              <p className="w-3 h-3 bg-primary rounded-full"></p>
            </div>
            <div className="text-base text-textColor flex items-center gap-4">
              <p>See order amount?</p>
              <FaInfoCircle className="text-primary" />
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10">
            {data?.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between items-start mt-4"
              >
                <img src={item.icon} alt={item?.name} className="w-10" />
                <p className="text-base mt-2 font-medium mb-5 text-textColor">
                  {item.name}
                </p>
                <p className="text-2xl font-medium">{item.amount}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-5 lg:mt-5 rounded-lg lg:w-2/6">
          <p className="text-xl text-textColor font-medium mb-4">
            Today&apos;s Sorted Order
          </p>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
