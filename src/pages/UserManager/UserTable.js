import { Table, Tag, Space } from "antd";
import { BsGearWide } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import UpdateInfor from "./UpdateInfor";
const { Column } = Table;

export default ({ userList }) => (
  <Table dataSource={userList}>
    <Column title="ID" dataIndex="_id" key="_id" />
    <Column title="Tên" dataIndex="name" key="name" />
    <Column title="Email" dataIndex="email" key="email" />
    <Column title="SĐT" dataIndex="phone" key="phone" />
    <Column
      title="Role"
      dataIndex="type"
      key="type"
      render={(text, record) =>
        record.type === "ADMIN" ? (
          <Tag color="red">ADMIN</Tag>
        ) : (
          <Tag color="green">CLIENT</Tag>
        )
      }
    />
    <Column
      title={<BsGearWide />}
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <button>
            <UpdateInfor data={record} id={record._id} />
          </button>
          <button className="bg-deepblue text-white  px-4 py-2 rounded-full">
            <TiDelete size={20} />
          </button>
        </Space>
      )}
    />
  </Table>
);
