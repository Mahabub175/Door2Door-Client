import { FaInfoCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import CustomForm from "../../Reusable/Form/CustomForm";
import CustomInput from "../../Reusable/Form/CustomInput";
import CustomSelect from "../../Reusable/Form/CustomSelect";
import FormButton from "../../Reusable/Form/FormButton";
import { Link } from "react-router-dom";

const PartialDeliveryForm = () => {
  return (
    <section>
      <div className="bg-white p-5 mt-5 rounded-lg w-full flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-base font-medium">
            Partial Delivery Order
            <FaInfoCircle className="text-primary inline-block ml-2" />
          </p>
          <Link
            to={"/bulk-delivery"}
            className="text-base font-medium cursor-pointer hover:text-primary duration-300"
          >
            Bulk Delivery
            <IoIosArrowForward className="text-primary inline-block ml-2" />
          </Link>
        </div>
        <div className="mt-4">
          <CustomForm>
            <CustomSelect label={"Store"} name={"store"} required={true} />
            <CustomInput
              label={"Amount"}
              name={"amount"}
              required={true}
              type={"number"}
            />
            <CustomInput
              label={"Recipient's Phone"}
              name={"phone"}
              required={true}
            />
            <div className="lg:w-2/3">
              <FormButton />
            </div>
          </CustomForm>
        </div>
      </div>
    </section>
  );
};

export default PartialDeliveryForm;
