import { FaInfoCircle } from "react-icons/fa";
import OrderSummary from "../../components/AllSection/Dashboard/OrderSummary";
import CodDetails from "../../components/AllSection/Dashboard/CodDetails";
import PartialDelivery from "../../components/AllSection/Dashboard/PartialDelivery";
import AgentMessage from "../../components/AllSection/Dashboard/AgentMessage";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-5">
      <div className="w-full">
        <div className="flex items-center gap-2 px-4 py-1 bg-white w-fit rounded-lg text-sm lg:text-base text-textColor">
          <FaInfoCircle className="text-primary" />
          <p>Your dashboard data will update automatically every 30 minutes</p>
        </div>
        <OrderSummary />
        <CodDetails />
        <PartialDelivery />
      </div>
      <div className="lg:w-1/2 xxl:w-2/6">
        <AgentMessage />
      </div>
    </div>
  );
};

export default AdminDashboard;
