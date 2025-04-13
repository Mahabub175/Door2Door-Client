import { Modal } from "antd";

const CustomModal = ({
  setOpen,
  open,
  children,
  title,
  loading,
  width = 1000,
}) => {
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      title={title}
      width={width}
      destroyOnClose
      centered
      footer={null}
      loading={loading}
      keyboard={true}
    >
      <div className="lg:p-2">{children}</div>
    </Modal>
  );
};

export default CustomModal;
