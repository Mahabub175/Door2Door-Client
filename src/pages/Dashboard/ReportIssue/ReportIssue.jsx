import { Button, Input, Select } from "antd";
import issue from "../../../assets/images/issue.png";
import { BsSearch } from "react-icons/bs";

const ReportIssue = () => {
  return (
    <section className="bg-white rounded-lg p-5">
      <h2 className="text-2xl font-medium mb-4">Issue History</h2>

      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-5 mb-10">
        <Button size="large" type="primary" className="font-normal">
          Report issue
        </Button>
        <Select
          showSearch
          placeholder={"Issues Category"}
          allowClear
          size="large"
          className="w-full"
        />
        <Input
          placeholder="Search by Consignment ID"
          suffix={<BsSearch />}
          size="large"
        />
        <Input
          placeholder="Search by Invoice ID"
          suffix={<BsSearch />}
          size="large"
        />
        <Select
          showSearch
          placeholder={"All Issues"}
          allowClear
          size="large"
          className="w-full"
        />
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <img src={issue} alt="issue" />
        <h2 className="text-2xl font-medium my-4">Everything seems great</h2>
        <p className="text-base text-textColor mb-5">
          You haven’t reported any issue. Hope you’ve found Door2Door Courier
          helpful. For any order specific issue, report us from the order
          details page.
        </p>
        <Button size="large" className="font-normal">
          See In Archive
        </Button>
      </div>
    </section>
  );
};

export default ReportIssue;
