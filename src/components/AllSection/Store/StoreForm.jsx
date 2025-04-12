import CustomInput from "../../Reusable/Form/CustomInput";
import CustomSelect from "../../Reusable/Form/CustomSelect";

const StoreForm = () => {
  return (
    <>
      <div className="two-grid">
        <CustomInput label="Store Name" name="storeName" required />
        <CustomInput
          label="Store Contact Name"
          name="storeContactName"
          required
        />
        <CustomInput
          type="number"
          label="Contact Number"
          name="storeName"
          required
        />
        <CustomInput
          type="number"
          label="Secondary Contact Number (optional)"
          name="secondaryContactNumber"
        />
      </div>
      <div className="three-grid">
        <CustomSelect label={"City"} name={"city"} required={true} />
        <CustomSelect label={"Zone"} name={"zone"} required={true} />
        <CustomSelect label={"area"} name={"city"} required={true} />
      </div>
      <CustomInput
        type="textarea"
        label="Store Address"
        name="address"
        required
      />
    </>
  );
};

export default StoreForm;
