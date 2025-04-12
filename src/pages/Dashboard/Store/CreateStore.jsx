import { Button } from "antd";
import StoreForm from "../../../components/AllSection/Store/StoreForm";
import CustomForm from "../../../components/Reusable/Form/CustomForm";
import FormButton from "../../../components/Reusable/Form/FormButton";

const CreateStore = () => {
  return (
    <section>
      <div className="flex justify-between items-center mb-5">
        <div></div>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-5 lg:mt-0">
          <Button type="primary" size="large" className="font-normal lg:px-5">
            Import CSV
          </Button>
          <Button size="large" className="font-normal lg:px-5">
            Download Sample CSV
          </Button>
        </div>
      </div>
      <div className="bg-white p-5 rounded-lg">
        <h1 className="text-2xl font-medium mb-4 border-b pb-4">
          Create Store
        </h1>
        <CustomForm>
          <StoreForm />
          <div className="lg:w-3/6">
            <FormButton />
          </div>
        </CustomForm>
      </div>
    </section>
  );
};

export default CreateStore;
