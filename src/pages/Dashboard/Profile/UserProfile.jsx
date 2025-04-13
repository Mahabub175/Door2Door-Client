import { Tabs } from "antd";
import OwnerInfo from "../../../components/AllSection/Profile/OwnerInfo";
import UpdatePassword from "../../../components/AllSection/Profile/UpdatePassword";
import UploadDocuments from "../../../components/AllSection/Profile/UploadDocuments";

const UserProfile = () => {
  const tabItems = [
    {
      key: "1",
      label: "Owner Info",
      children: <OwnerInfo />,
    },
    {
      key: "2",
      label: "Password",
      children: <UpdatePassword />,
    },
    {
      key: "3",
      label: "Upload Documents",
      children: <UploadDocuments />,
    },
  ];
  return (
    <>
      <h2 className="text-2xl lg:text-3xl font-medium mb-5">Profile</h2>
      <div className="bg-white p-5 rounded-lg">
        <Tabs defaultActiveKey="1" items={tabItems} size="large" />
      </div>
    </>
  );
};

export default UserProfile;
