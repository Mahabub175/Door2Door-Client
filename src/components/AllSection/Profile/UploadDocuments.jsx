import CustomForm from "../../Reusable/Form/CustomForm";
import CustomInput from "../../Reusable/Form/CustomInput";
import FileUploader from "../../Reusable/Form/FileUploader";
import FormButton from "../../Reusable/Form/FormButton";

const UploadDocuments = () => {
  return (
    <div className="lg:w-3/6">
      <CustomForm>
        <div className="border border-dashed border-primary p-5 rounded-lg mb-5 lg:mb-10">
          <CustomInput label="NID Number" name="nidNumber" />

          <div className="two-grid">
            <FileUploader label="Front Side of NID (Max 2MB)" name="nidFront" />
            <FileUploader label="Back Side of NID (Max 2MB)" name="nidBack" />
          </div>

          <div className="lg:w-4/6 -mt-10">
            <FormButton />
          </div>
        </div>
        <div className="border border-dashed border-primary p-5 rounded-lg mb-5 lg:mb-10">
          <CustomInput label="TIN Number" name="tinNumber" />

          <div className="two-grid">
            <FileUploader label="Front Side of BIN (Max 2MB)" name="binFront" />
          </div>

          <div className="lg:w-4/6 -mt-10">
            <FormButton />
          </div>
        </div>
        <div className="border border-dashed border-primary p-5 rounded-lg">
          <CustomInput label="Trade License Number" name="tradeLicenseNumber" />

          <div className="two-grid">
            <FileUploader
              label="Front Side of Trade License (Max 2MB)"
              name="tradeLicense"
            />
          </div>

          <div className="lg:w-4/6 -mt-10">
            <FormButton />
          </div>
        </div>
      </CustomForm>
    </div>
  );
};

export default UploadDocuments;
