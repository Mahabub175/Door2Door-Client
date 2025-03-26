import { Layout, Menu } from "antd";
import { useLocation } from "react-router-dom";

import { userPaths } from "../routes/user.routes";
import { sidebarItemsGenerator } from "../utilities/lib/sidebarItemsGenerator";

const { Sider } = Layout;

const SideBar = ({ collapsed, setCollapsed }) => {
  const { pathname } = useLocation();

  const formattedSegment = pathname
    .split("/")
    .slice(-1)[0]
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const sidebarItems = sidebarItemsGenerator(userPaths, collapsed);

  return (
    <Sider
      className="h-full overflow-x-auto bg-white pb-10 pt-1 "
      width={240}
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        boxShadow:
          "4px 0 4px -1px rgb(0 0 0 / 0.1), 2px 0 2px -2px rgb(0 0 0 / 0.1)",
      }}
    >
      <Menu
        theme="light"
        mode="inline"
        className="h-full w-full"
        defaultSelectedKeys={formattedSegment}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default SideBar;
