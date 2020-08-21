import React, { useState } from "react";
import "./Table.css";
import { Table, Input, InputNumber, Popconfirm, Form, Button } from "antd";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`
            }
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = ({ originData, columnData }) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const [count, setCount] = useState(2);

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      ...record
    });
    setEditingKey(record.id);
  };

  const handleDelete = id => {
	const dataSource = data.filter(item => item.id !== id);

	setData(dataSource);
  };

  const handleAdd = () => {
    const newData = {
      id: count + 1,
      name: '',
      age: '',
      address: '',
	};
	setData([...data, newData]);
	setCount(count + 1);
	edit(newData);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (id) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => id === item.id);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
		...columnData,
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.id)}
              style={{
                marginRight: 8
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <a disabled={editingKey !== ""} onClick={() => edit(record)}>
            Edit
          </a>
        );
      }
	},
	{
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) =>
			data.length >= 1 ? (
				<Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
				<a>Delete</a>
				</Popconfirm>
          ) : null,
      },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    };
  });
  return (
    <Form form={form} component={false}>
		<Button
			onClick={handleAdd}
			type="primary"
			style={{
			marginBottom: 16,
			}}
		>
			Add a row
		</Button>
      <Table
        components={{
          body: {
            cell: EditableCell
          }
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel
        }}
      />
    </Form>
  );
};

export default EditableTable;
