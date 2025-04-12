import CustomForm from "../../Reusable/Form/CustomForm";
import FormButton from "../../Reusable/Form/FormButton";
import CustomModal from "../../Reusable/Modal/CustomModal";
import StoreForm from "./StoreForm";

const CreateStore = ({ open, setOpen }) => {
  return (
    <CustomModal open={open} setOpen={setOpen} title="Create a Store">
      <CustomForm>
        <StoreForm />
        <FormButton />
      </CustomForm>
    </CustomModal>
  );
};

export default CreateStore;
