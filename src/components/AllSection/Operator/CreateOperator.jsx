import CustomForm from "../../Reusable/Form/CustomForm";
import FormButton from "../../Reusable/Form/FormButton";
import CustomModal from "../../Reusable/Modal/CustomModal";
import OperatorForm from "./OperatorForm";

const CreateOperator = ({ open, setOpen }) => {
  return (
    <CustomModal open={open} setOpen={setOpen} title="Add Operator">
      <CustomForm>
        <OperatorForm />
        <div className="-mt-5">
          <FormButton />
        </div>
      </CustomForm>
    </CustomModal>
  );
};

export default CreateOperator;
