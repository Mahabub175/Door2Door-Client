import { Button, Layout } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Profile from "../components/AllSection/Header/Profile";
import SideBar from "./SideBar";
import { useGetAllSystemAssetSettingsQuery } from "../redux/services/systemAssetSetting/systemAssetSettingApi";
import { MdMenuOpen } from "react-icons/md";

const { Header, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { data: systemAssetData } = useGetAllSystemAssetSettingsQuery();

  return (
    <div className="relative">
      <Header className="fixed top-0 z-50 flex w-full items-center justify-between bg-white px-5 shadow-md py-5">
        <div className="flex items-center gap-6 text-2xl">
          <Button
            className="flex items-center justify-center rounded-full border border-none p-0 text-[20px]"
            type="text"
            icon={<MdMenuOpen />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <div className="flex items-center -ml-4">
            <div className="font-bold text-2xl text-primary cursor-pointer">
              {systemAssetData?.data?.logo ? (
                <img
                  src={systemAssetData?.data?.logo}
                  alt=""
                  className="w-full h-12"
                />
              ) : (
                "D2D"
              )}
            </div>
          </div>
        </div>
        <Profile />
      </Header>

      <div className="flex pt-16">
        <div className="sticky left-0 top-[4rem] z-40 h-[calc(100vh-4rem)]">
          <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>

        <Layout className="flex w-48 flex-col ">
          <Content
            style={{
              marginBottom: 0,
            }}
            className={"p-2 lg:p-5"}
          >
            <Outlet />
          </Content>
        </Layout>
      </div>
    </div>
  );
};
export default MainLayout;
