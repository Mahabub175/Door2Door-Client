import CustomForm from "../../../Reusable/Form/CustomForm";
import FormButton from "../../../Reusable/Form/FormButton";
import CustomModal from "../../../Reusable/Modal/CustomModal";
import DeliveryLinkForm from "./DeliveryLinkForm";

const CreateDeliveryLink = ({ open, setOpen }) => {
  return (
    <CustomModal
      open={open}
      setOpen={setOpen}
      title={
        <div>
          <p className="text-xl">Create Delivery Link</p>
          <p className="font-normal mt-1">
            Link can be used to collect customer’s address and phone number. One
            link can be used only one time.
          </p>
        </div>
      }
    >
      <CustomForm>
        <DeliveryLinkForm />
        <FormButton />
      </CustomForm>
    </CustomModal>
  );
};

export default CreateDeliveryLink;
