import { Button } from "antd";

const FormButton = ({ loading }) => {
  return (
    <>
      <div className="flex justify-end items-center gap-6 mt-10">
        <Button size="large" className="font-normal lg:px-5 w-full">
          Cancel
        </Button>
        <Button
          type="primary"
          size="large"
          loading={loading}
          className="font-normal lg:px-5 w-full"
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default FormButton;
