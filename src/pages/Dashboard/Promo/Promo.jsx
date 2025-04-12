import { Button, Input } from "antd";
import promo from "../../../assets/images/promo.png";
import { BsSearch } from "react-icons/bs";

const Promo = () => {
  return (
    <section>
      <h2 className="text-2xl font-medium mb-4">My Promo</h2>
      <div className="flex items-center gap-5 mt-5 mb-10 lg:w-2/6">
        <Input
          placeholder="Enter Your promo Code"
          suffix={<BsSearch />}
          size="large"
        />
        <Button size="large" type="primary" className="font-normal">
          Apply Promo
        </Button>
      </div>
      <div className="bg-white rounded-lg py-20 flex flex-col justify-center items-center text-center">
        <img src={promo} alt="promo" />
        <h2 className="text-2xl font-medium mb-4">No promo code found</h2>
      </div>
    </section>
  );
};

export default Promo;
