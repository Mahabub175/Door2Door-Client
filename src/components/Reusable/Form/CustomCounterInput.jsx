import { Form, Input } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const CustomCounterInput = ({
  label,
  name,
  required = false,
  min = 0,
  max,
  initialValue = 1,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      if (
        (min !== undefined && newValue < min) ||
        (max !== undefined && newValue > max)
      )
        return;
      setValue(newValue);
    } else {
      setValue("");
    }
  };

  const increment = () => {
    if (max !== undefined && value >= max) return;
    setValue((prev) => (isNaN(prev) ? 1 : prev + 1));
  };

  const decrement = () => {
    if (min !== undefined && value <= min) return;
    setValue((prev) => (isNaN(prev) ? 1 : prev - 1));
  };

  return (
    <div className="w-full">
      <Form.Item
        label={label}
        name={name}
        rules={[{ required: required, message: `${label} is required` }]}
      >
        <div className="flex items-center gap-2 border rounded-lg px-5">
          <button onClick={decrement} type="button">
            <MinusOutlined />
          </button>
          <Input
            name={name}
            value={value}
            onChange={handleChange}
            type="number"
            size="large"
            className="w-full border-none text-center focus:shadow-none"
          />
          <button onClick={increment} type="button">
            <PlusOutlined />
          </button>
        </div>
      </Form.Item>
    </div>
  );
};

export default CustomCounterInput;
