import { Popover, Badge, Spin, List, Avatar, Tooltip } from "antd";
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { CheckOutlined, MailOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const Notification = () => {
  const [loading] = useState(false);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New message from Admin",
      description: "Check out the new dashboard updates.",
      read: false,
      time: new Date(Date.now() - 2 * 60 * 1000),
    },
    {
      id: 2,
      title: "System Maintenance",
      description: "Scheduled maintenance at midnight.",
      read: true,
      time: new Date(Date.now() - 24 * 60 * 60 * 1000),
    },
    {
      id: 3,
      title: "Product Back in Stock",
      description: "Your favorite product is available now.",
      read: false,
      time: new Date(Date.now() - 10 * 60 * 1000),
    },
  ]);

  const sortedNotifications = [...notifications].sort(
    (a, b) => b.time - a.time
  );

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const content = (
    <div className="w-[300px] max-h-[300px] overflow-y-auto">
      {loading ? (
        <Spin />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={sortedNotifications}
          locale={{ emptyText: "No notifications" }}
          renderItem={(item) => (
            <List.Item
              className={`group relative px-3 py-2 rounded-md transition mb-2 ${
                !item.read
                  ? "bg-yellow-50 border-l-4 border-primary"
                  : "hover:bg-gray-100"
              }`}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    style={{
                      backgroundColor: item.read ? "#d9d9d9" : "#7d6e4d",
                    }}
                    icon={item.read ? <CheckOutlined /> : <MailOutlined />}
                  />
                }
                title={
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-sm font-medium ${
                        !item.read ? "text-primary" : "text-gray-700"
                      }`}
                    >
                      {item.title}
                    </span>
                    {!item.read && (
                      <Tooltip title="Mark as read">
                        <button
                          onClick={() => markAsRead(item.id)}
                          className="text-xs ml-2 text-primary underline hover:text-primary/80"
                        >
                          Mark as read
                        </button>
                      </Tooltip>
                    )}
                  </div>
                }
                description={
                  <div className="text-xs text-gray-600">
                    {item.description}
                    <div className="text-[10px] mt-1 text-gray-400">
                      {dayjs(item.time).format("MMM D, YYYY h:mm A")}
                    </div>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );

  return (
    <Popover content={content} title="Notifications" trigger="click">
      <Badge count={unreadCount} offset={[-2, 5]} className="cursor-pointer">
        <div className="bg-primary text-white p-2 rounded-full hover:bg-white hover:text-primary duration-300 border border-primary">
          <FaRegBell className="size-5 lg:size-6" />
        </div>
      </Badge>
    </Popover>
  );
};

export default Notification;
