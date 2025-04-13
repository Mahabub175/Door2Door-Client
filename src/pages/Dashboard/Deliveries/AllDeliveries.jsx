import { Button, Select, Space, Table, Tag } from "antd";
import DeliveryFilter from "../../../components/Shared/Components/DeliveryFilter";
import DeliveryHeader from "../../../components/Shared/Components/DeliveryHeader";
import { FaRegPaste, FaRegUser } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { GoDownload } from "react-icons/go";

const tableData = [
  {
    key: 1,
    consId: "DJ120425ALXXC9",
    type: "Parcel",
    orderID: "4543538",
    store: "Fashion House",
    name: "Akash",
    address: "Dhaka, Bangladesh",
    number: "0123456789",
    cod: "$0",
    charge: "$0",
    discount: "$0",
    deliveryStatus: "Delivered",
    paymentStatus: "Paid",
  },
  {
    key: 2,
    consId: "DJ120425ALXXC9",
    type: "Parcel",
    orderID: "4543538",
    store: "Fashion House",
    name: "Akash",
    address: "Dhaka, Bangladesh",
    number: "0123456789",
    cod: "$0",
    charge: "$0",
    discount: "$0",
    deliveryStatus: "Delivered",
    paymentStatus: "Paid",
  },
];

const AllDeliveries = () => {
  const columns = [
    {
      title: "Cos. ID",
      dataIndex: "key",
      key: "key",
      render: (_, record) => (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <span>{record.consId}</span>
            <FaRegPaste className="text-primary" />
          </div>
          <span className="font-medium">Type: {record.type}</span>
        </div>
      ),
    },
    {
      title: "Order ID",
      dataIndex: "orderID",
      key: "orderID",
    },
    {
      title: "Store",
      dataIndex: "store",
      key: "store",
    },
    {
      title: "Recipient Info",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaRegUser />
            <span>{record.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <CiLocationOn />
            <span>{record.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlinePhone />
            <span>{record.number}</span>
          </div>
        </div>
      ),
    },
    {
      title: "Delivery Status",
      dataIndex: "deliveryStatus",
      key: "deliveryStatus",
      render: (_, record) => (
        <>
          <Tag color="green">{record.deliveryStatus}</Tag>
        </>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (_, record) => (
        <div className="text-base font-medium text-textColor space-y-1">
          <div>COD: {record.cod}</div>
          <div>Charge: {record.charge}</div>
          <div>Discount: {record.discount}</div>
        </div>
      ),
    },
    {
      title: "Payment",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (_, record) => (
        <>
          <Tag color="green">{record.paymentStatus}</Tag>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle" direction="vertical">
          <Button size="small" className="font-normal px-4">
            View
          </Button>
          <Button
            size="small"
            className="font-normal px-2 flex items-center"
            icon={<GoDownload />}
          >
            PDF
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <DeliveryHeader title={"All Deliveries"} />
      <div className="bg-white p-5 rounded-lg">
        <div className="border-b mb-4 pb-4 flex items-center gap-4">
          <h3 className="font-medium text-base">Delivery List</h3>
          <Select
            showSearch
            placeholder={"Delivery Filter"}
            allowClear
            size="middle"
          />
        </div>
        <DeliveryFilter />
      </div>
      <section>
        <Table
          dataSource={tableData}
          columns={columns}
          pagination={false}
          rowSelection
        />
      </section>
    </>
  );
};

export default AllDeliveries;
