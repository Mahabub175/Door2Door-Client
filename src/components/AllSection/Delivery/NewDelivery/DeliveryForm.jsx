import CustomForm from "../../../Reusable/Form/CustomForm";
import CustomSelect from "../../../Reusable/Form/CustomSelect";
import CustomInput from "../../../Reusable/Form/CustomInput";
import FormButton from "../../../Reusable/Form/FormButton";
import { Button } from "antd";

const DeliveryForm = () => {
  return (
    <section className="lg:w-10/12">
      <div className="bg-white p-5 rounded-lg w-full flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-2xl font-medium">New Delivery</p>
          <div className="flex flex-wrap justify-center items-center gap-5 mt-5 lg:mt-0">
            <Button type="primary" size="large" className="font-normal lg:px-5">
              Create Delivery Link
            </Button>
            <Button size="large" className="font-normal lg:px-5">
              Bulk Order
            </Button>
            <Button size="large" className="font-normal lg:px-5">
              Partial Delivery
            </Button>
          </div>
        </div>
        <div className="mt-4">
          <CustomForm>
            <div className="three-grid lg:mt-5">
              <CustomSelect label={"Store"} name={"store"} required={true} />
              <CustomSelect
                label={"Product Type"}
                name={"productType"}
                required={true}
              />
              <CustomSelect
                label={"Merchant Order ID"}
                name={"merchantOrderId"}
                required={true}
              />
            </div>
            <div className="two-grid lg:mt-5">
              <div>
                <p className="text-xl font-medium mb-5">Recipient Details</p>
                <CustomInput
                  label={"Recipient's Phone"}
                  name={"phone"}
                  required={true}
                />
                <CustomInput
                  label={"Recipient's Second Phone"}
                  name={"secondPhone"}
                  required={true}
                />
                <CustomInput
                  label={"Recipient's Name"}
                  name={"name"}
                  required={true}
                />
                <CustomInput
                  label={"Recipient's Address"}
                  name={"address"}
                  required={true}
                />
                <CustomSelect
                  label={"Delivery Area"}
                  name={"deliveryArea"}
                  required={true}
                />
              </div>
              <div>
                <p className="text-xl font-medium mb-5">Delivery Details</p>
                <CustomSelect
                  label={"Merchant Order ID"}
                  name={"merchantOrderId"}
                  required={true}
                />
                <div className="two-grid">
                  <CustomSelect
                    label={"Total Weight"}
                    name={"totalWeight"}
                    required={true}
                  />
                  <CustomInput
                    label={"Quantity"}
                    name={"quantity"}
                    required={true}
                    type={"number"}
                  />
                </div>
                <CustomInput
                  label={"Amount To Collect"}
                  name={"amountToCollect"}
                  required={true}
                  type={"number"}
                />
                <CustomInput
                  label={"Item Description & Price "}
                  name={"itemDescription"}
                  required={true}
                  type={"textarea"}
                />
              </div>
            </div>
            <CustomInput
              label={"Special Instructions"}
              name={"specialInstructions"}
              type={"textarea"}
              required={true}
            />
            <FormButton />
          </CustomForm>
        </div>
      </div>
    </section>
  );
};

export default DeliveryForm;
