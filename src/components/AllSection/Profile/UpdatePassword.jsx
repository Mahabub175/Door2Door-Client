import CustomForm from "../../Reusable/Form/CustomForm";
import CustomInput from "../../Reusable/Form/CustomInput";
import FormButton from "../../Reusable/Form/FormButton";

const UpdatePassword = () => {
  return (
    <div className="lg:w-3/6">
      <CustomForm>
        <CustomInput
          label="Old Password"
          name="oldPassword"
          type={"password"}
        />
        <CustomInput
          label="New Password"
          name="newPassword"
          type={"password"}
        />
        <CustomInput
          label="Confirm Password"
          name="confirmPassword"
          type={"password"}
        />

        <div className="lg:w-4/6">
          <FormButton />
        </div>
      </CustomForm>
    </div>
  );
};

export default UpdatePassword;
