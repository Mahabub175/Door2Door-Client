import { Button } from "antd";
import operator from "../../../assets/images/operator.png";
import { useState } from "react";
import CreateOperator from "../../../components/AllSection/Operator/CreateOperator";

const Operator = () => {
  const [openCreate, setOpenCreate] = useState(false);
  return (
    <section>
      <div className="flex flex-wrap justify-center lg:justify-between items-center gap-5 mt-5 mb-10">
        <h2 className="text-2xl font-medium">Operator List</h2>

        <Button
          size="large"
          type="primary"
          className="font-normal"
          onClick={() => setOpenCreate(true)}
        >
          Add Operator
        </Button>
      </div>
      <div className="bg-white rounded-lg py-20 flex flex-col justify-center items-center text-center">
        <img src={operator} alt="operator" />
        <h2 className="text-2xl font-medium mb-4">No operator found</h2>
        <p className="text-base text-textColor mb-5">
          You haven’t added any operator yet. Add an operator if you want{" "}
          <br className="hidden lg:block" />
          someone to operate the account on your behalf.
        </p>
        <Button
          size="large"
          className="font-normal"
          onClick={() => setOpenCreate(true)}
        >
          Add Operator
        </Button>
      </div>
      <CreateOperator open={openCreate} setOpen={setOpenCreate} />
    </section>
  );
};

export default Operator;
