import { Button, Table, Space } from "antd";
import { useState } from "react";
import CreateStore from "../../../components/AllSection/Store/CreateStore";
import EditStore from "../../../components/AllSection/Store/EditStore";

const tableData = [
  {
    key: 1,
    name: "store1",
    address: "address1",
    status: "active",
  },
  {
    key: 2,
    name: "store2",
    address: "address2",
    status: "inactive",
  },
];

const Store = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button className="font-normal" onClick={() => setOpenEdit(true)}>
            Edit
          </Button>
          <Button className="font-normal">Deactivate</Button>
          <Button className="font-normal">Default Pickup Store</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <header className="flex items-center justify-between mb-5">
        <h3 className="text-2xl lg:text-3xl font-medium">Stores</h3>
        <Button
          size="large"
          className="font-medium lg:px-5"
          onClick={() => setOpenCreate(true)}
        >
          Create Store
        </Button>
      </header>
      <section>
        <Table dataSource={tableData} columns={columns} pagination={false} />
      </section>
      <CreateStore open={openCreate} setOpen={setOpenCreate} />
      <EditStore open={openEdit} setOpen={setOpenEdit} />
    </div>
  );
};

export default Store;
