import CustomInput from "../../Reusable/Form/CustomInput";

const OperatorForm = () => {
  return (
    <div className="two-grid">
      <CustomInput label="Operator Name" name="name" required />
      <CustomInput type="email" label="Operator Email" name="email" required />
      <CustomInput type="number" label="Mobile Number" name="number" required />
    </div>
  );
};

export default OperatorForm;
