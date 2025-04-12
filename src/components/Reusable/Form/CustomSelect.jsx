import { Form, Select } from "antd";
import { MdOutlineArrowDropDown } from "react-icons/md";

const CustomSelect = ({
  label,
  name,
  mode,
  required,
  options,
  loading,
  disabled,
  defaultValue,
  placeholder,
  value = null,
  onChange,
  noStyle,
  suffixIcon = <MdOutlineArrowDropDown className="text-primary text-2xl" />,
}) => {
  const filterOption = (input, option) =>
    (option?.label ?? "")?.toLowerCase().includes(input?.toLowerCase());

  return (
    <Form.Item
      noStyle={noStyle}
      label={label}
      name={name}
      initialValue={defaultValue}
      rules={[{ required: required, message: `${label} is required` }]}
    >
      <Select
        showSearch
        optionFilterProp="children"
        filterOption={filterOption}
        mode={mode || undefined}
        loading={loading}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder ? placeholder : `Select ${label}`}
        allowClear
        size="large"
        options={options}
        value={value}
        suffixIcon={suffixIcon}
        className="w-full"
      />
    </Form.Item>
  );
};

export default CustomSelect;
