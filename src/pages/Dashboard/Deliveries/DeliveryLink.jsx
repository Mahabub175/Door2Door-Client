import { Button } from "antd";
import deliveryLink from "../../../assets/images/truck.png";
import { useState } from "react";
import CreateDeliveryLink from "../../../components/AllSection/Delivery/DeliveryLink/CreateDeliveryLink";

const DeliveryLink = () => {
  const [openCreate, setOpenCreate] = useState(false);
  return (
    <section>
      <div className="flex flex-wrap justify-center lg:justify-between items-center gap-5 mt-5 mb-10">
        <h2 className="text-2xl font-medium">List of order links</h2>

        <Button
          size="large"
          className="font-normal"
          onClick={() => setOpenCreate(true)}
        >
          Create Link
        </Button>
      </div>
      <div className="bg-white rounded-lg py-20 flex flex-col justify-center items-center text-center">
        <img src={deliveryLink} alt="deliveryLink" />
        <h2 className="text-2xl font-medium mb-4">No order links found</h2>
        <p className="text-base text-textColor mb-5">
          You haven’t added any order link yet. Add an order link if you want{" "}
          <br className="hidden lg:block" />
          to start deliveries.
        </p>
      </div>
      <CreateDeliveryLink open={openCreate} setOpen={setOpenCreate} />
    </section>
  );
};

export default DeliveryLink;
