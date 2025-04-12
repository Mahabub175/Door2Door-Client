import { Button } from "antd";
import bulk from "../../../assets/images/bulk.png";

const BulkDelivery = () => {
  return (
    <section>
      <div className="flex flex-wrap justify-center lg:justify-between items-center gap-5 mb-10">
        <h2 className="text-2xl font-medium">Bulk Delivery</h2>

        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-5">
          <Button size="large" type="primary" className="font-normal">
            Import CSV
          </Button>
          <Button size="large" className="font-normal">
            Download Sample CSV
          </Button>
        </div>
      </div>
      <img src={bulk} alt="bulk" className="w-full" />
      <div className="flex flex-wrap justify-center lg:justify-start items-center gap-5 mt-10">
        <Button size="large" type="primary" className="font-normal">
          Confirm Orders
        </Button>
        <Button size="large" className="font-normal">
          Download Sample CSV
        </Button>
      </div>
    </section>
  );
};

export default BulkDelivery;
