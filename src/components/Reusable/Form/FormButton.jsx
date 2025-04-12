import { Button } from "antd";

const FormButton = ({ loading }) => {
  return (
    <>
      <div className="flex justify-end items-center gap-6 mt-10">
        <Button
          type="primary"
          size="large"
          loading={loading}
          className="font-normal lg:px-5 w-full pb-9 pt-3"
        >
          Save
        </Button>
        <Button size="large" className="font-normal lg:px-5 w-full pb-9 pt-3">
          Cancel
        </Button>
      </div>
    </>
  );
};

export default FormButton;
