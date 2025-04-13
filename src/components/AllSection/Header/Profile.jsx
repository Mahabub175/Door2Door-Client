import { Avatar, Button, Popover } from "antd";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { logout } from "../../../redux/services/auth/authSlice";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Notification from "../../Shared/Components/Notification";
import { IoMdLogOut } from "react-icons/io";

const Profile = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully!");
  };

  const routes = [
    {
      path: "/report-issue",
      name: "Report Issue",
    },
    {
      path: "/developers-api",
      name: "Developers API",
    },
    {
      path: "/operators",
      name: "Manage Operators",
    },
    {
      path: "/payment-info",
      name: "payment Information",
    },
    {
      path: "/profile",
      name: "Profile",
    },
  ];

  const content = (
    <div>
      {routes?.map((item) => (
        <Link
          key={item?.path}
          to={item?.path}
          className="flex justify-between items-center gap-10 hover:bg-gray-100 hover:text-primary px-2 rounded-lg cursor-pointer duration-300 mb-3"
        >
          <p className="text-lg font-medium">{item?.name}</p>
          <IoIosArrowForward className="text-xl" />
        </Link>
      ))}
      <div className="flex justify-between items-center gap-10 hover:bg-gray-100 hover:text-red-500 px-2 rounded-lg cursor-pointer duration-300">
        <p className="text-lg font-medium">Logout</p>
        <IoMdLogOut className="text-xl text-red-500" onClick={handleLogout} />
      </div>
    </div>
  );

  return (
    <div className="flex gap-2 lg:gap-8 items-center text-white">
      <Link to="/deliveries/new-delivery">
        <Button
          type="primary"
          size="large"
          className="font-normal lg:px-5 hidden lg:block"
        >
          New Delivery
        </Button>
      </Link>

      <Notification />
      <Popover
        placement="bottomLeft"
        trigger={"click"}
        content={<div className="p-2 text-xs"> {content} </div>}
        className="cursor-pointer bg-primary rounded-full lg:px-3 lg:py-2 -mr-2 lg:mr-0"
      >
        <div className="flex items-center gap-1">
          <Avatar className="size-9 lg:size-8" icon={<UserOutlined />} />
          <div className="hidden lg:flex flex-col">
            <p className="text-sm font-semibold">Fashion House</p>
            <p className="text-xs">D2D Courier</p>
          </div>
          <MdOutlineArrowDropDown size={20} className="hidden lg:block" />
        </div>
      </Popover>
    </div>
  );
};

export default Profile;
