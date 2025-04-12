import CostDetails from "../../../components/AllSection/Delivery/NewDelivery/CostDetails";
import DeliveryForm from "../../../components/AllSection/Delivery/NewDelivery/DeliveryForm";

const NewDelivery = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <DeliveryForm />
      <CostDetails />
    </div>
  );
};

export default NewDelivery;
