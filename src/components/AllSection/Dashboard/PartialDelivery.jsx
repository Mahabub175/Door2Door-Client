import { FaInfoCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import CustomForm from "../../Reusable/Form/CustomForm";
import CustomInput from "../../Reusable/Form/CustomInput";
import CustomSelect from "../../Reusable/Form/CustomSelect";
import FormButton from "../../Reusable/Form/FormButton";

const PartialDelivery = () => {
  return (
    <section>
      <div className="bg-white p-5 mt-5 rounded-lg w-full flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-base font-medium">
            Partial Delivery Order
            <FaInfoCircle className="text-primary inline-block ml-2" />
          </p>
          <p className="text-base font-medium cursor-pointer hover:text-primary duration-300">
            Bulk Delivery
            <IoIosArrowForward className="text-primary inline-block ml-2" />
          </p>
        </div>
        <div className="lmt-4">
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
            <FormButton />
          </CustomForm>
        </div>
      </div>
    </section>
  );
};

export default PartialDelivery;
