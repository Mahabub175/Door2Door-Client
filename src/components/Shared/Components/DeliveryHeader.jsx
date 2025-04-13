import { Button } from "antd";
import { Link } from "react-router-dom";

const DeliveryHeader = ({ title }) => {
  return (
    <header>
      <div className="flex flex-wrap justify-center lg:justify-between items-center gap-5 mb-10 text-center">
        <h2 className="text-2xl font-medium">{title}</h2>

        <div className="flex flex-wrap gap-5 items-center justify-center">
          <Link to={"/bulk-delivery"}>
            <Button size="large" className="font-normal">
              Bulk Delivery
            </Button>
          </Link>
          <Link to={"/deliveries/delivery-link"}>
            <Button size="large" className="font-normal">
              All Links
            </Button>
          </Link>
          <Link to={"/deliveries/delivery-link"}>
            <Button size="large" className="font-normal">
              Create Delivery Link
            </Button>
          </Link>
          <Link to={"/deliveries/new-delivery"}>
            <Button size="large" type="primary" className="font-normal">
              New Delivery
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DeliveryHeader;
