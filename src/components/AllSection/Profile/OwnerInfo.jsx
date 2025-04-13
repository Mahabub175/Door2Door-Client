import CustomForm from "../../Reusable/Form/CustomForm";
import CustomInput from "../../Reusable/Form/CustomInput";
import FileUploader from "../../Reusable/Form/FileUploader";
import FormButton from "../../Reusable/Form/FormButton";

const OwnerInfo = () => {
  return (
    <div className="lg:w-3/6">
      <CustomForm>
        <CustomInput label="Name" name="name" />
        <div className="two-grid bg-light p-5 rounded-lg mb-4">
          <CustomInput label="Email" name="email" type={"email"} />
          <CustomInput label="Phone" name="number" type={"number"} />
        </div>
        <CustomInput label="Website/Facebook Page (Optional)" name="website" />
        <FileUploader label="Logo (Optional)" name="logo" />
        <div>
          Your business logo will be shown in the invoice. Logo image must meet
          the following criteria:
          <ul className="list-disc list-inside mt-2">
            <li>Must be in png, jpeg or jpg format</li>
            <li>File size must be within 2 MB</li>
            <li>Maximum width is 200px</li>
            <li>Maximum height is 100px</li>
          </ul>
        </div>

        <div className="lg:w-4/6">
          <FormButton />
        </div>
      </CustomForm>
    </div>
  );
};

export default OwnerInfo;
