import { Avatar, Button, Popover } from "antd";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { logout } from "../../../redux/services/auth/authSlice";
import { UserOutlined } from "@ant-design/icons";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully!");
  };

  const content = (
    <div>
      <div className="rounded-md px-2 py-3">
        <div className="flex flex-col items-center gap-4 text-lg">
          <Avatar
            className="avatar-bg shadow-md hover:shadow-lg"
            size={50}
            icon={<UserOutlined />}
          />
          <div className="flex flex-col text-center font-normal">
            <span className="font-bold">
              {"User"} (<span className="font-medium">{"User"}</span>)
            </span>

            <span className={`text-sm`}>{"User"}</span>
          </div>
        </div>

        <div className="rounded-md bg-[#F5F5F5] px-4 py-2">
          <div
            className="profile-ul flex w-max items-center gap-2 text-lg hover:underline"
            onClick={() => navigate("/settings/general-settings")}
          >
            <IoSettingsOutline size={18} />
            <div className="flex flex-col text-[15px] font-semibold">
              <span className="">General Settings</span>
            </div>
          </div>
        </div>
      </div>
      <Button
        type="primary"
        size="large"
        className="font-normal lg:px-5 lg:hidden w-full"
      >
        New Delivery
      </Button>
      <div className="flex w-full justify-end pt-3">
        <Button onClick={handleLogout} className={`w-full`} size="large">
          Log Out
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex gap-2 lg:gap-10 items-center text-white">
      <Button
        type="primary"
        size="large"
        className="font-normal lg:px-5 hidden lg:block"
      >
        New Delivery
      </Button>
      <div className="bg-white shadow text-black p-2 rounded-full cursor-pointer hover:bg-primary hover:text-white duration-300">
        <FaRegBell size={24} />
      </div>
      <Popover
        placement="bottomLeft"
        content={<div className="p-2 text-xs"> {content} </div>}
        className="mr-2 cursor-pointer bg-primary rounded-full px-3 py-2"
      >
        <div className="flex items-center gap-1">
          <Avatar size={32} icon={<UserOutlined />} />
          <div className="hidden lg:flex flex-col">
            <p className="text-sm font-semibold">Fashion House</p>
            <p className="text-xs">D2D Courier</p>
          </div>
          <MdOutlineArrowDropDown size={20} />
        </div>
      </Popover>
    </div>
  );
};

export default Profile;
