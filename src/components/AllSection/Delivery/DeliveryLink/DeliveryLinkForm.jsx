import { Form, Radio } from "antd";
import CustomInput from "../../../Reusable/Form/CustomInput";
import CustomSelect from "../../../Reusable/Form/CustomSelect";

const DeliveryLinkForm = () => {
  return (
    <>
      <CustomSelect label={"Store"} name={"store"} required={true} />
      <CustomInput
        type="textarea"
        label="Item Description & Price"
        name="description"
        required
      />
      <CustomInput
        type="number"
        label="Amount to Collect (৳)"
        name="amount"
        required
      />
      <Form.Item label="Link Status" name="linkStatus" required>
        <Radio.Group>
          <Radio value="singleUse">Single Use</Radio>
          <Radio value="multipleUse">Multiple Use</Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default DeliveryLinkForm;
