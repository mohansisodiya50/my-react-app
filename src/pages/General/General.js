import React, { useState } from 'react';
import './General.css';
import { Form, Input, Button, Row, Col, Switch } from 'antd';

const { TextArea } = Input;

const General = () => {
  const [form] = Form.useForm();
  const [status, setStatus] = useState(true);

  const onFinish = values => {
	values.status = status;
    console.log('Success:', values);
  };

  const onChange = checked => setStatus(checked);

  return (
    <>
      <Form
        layout='vertical'
		form={form}
		onFinish={onFinish}
		name="basic"
      >
		<Row gutter={24}>
			<Col span={12} xs={24} sm={24} md={12} lg={12}>
				<Form.Item
					
					name='shop-owner'
					rules={[
						{
							required: true,
						},
					]} 
					label="Shop Owner"
					className="form-grouppp"
				>
					<Input placeholder="Shop Owner" />
				</Form.Item>
				<Form.Item
					name='shop-name'
					rules={[
						{
							required: true,
						},
					]} 
					label="Shop Name"
					className="form-grouppp"
				>
					<Input placeholder="Shop Name" />
				</Form.Item>				
				<Form.Item label="Ease URL" className="form-grouppp">
					<Input placeholder="Url" />
				</Form.Item>
			</Col>
			<Col span={12}>
				<Form.Item name="status" label="Status" className="form-grouppp">
					<span>Online</span>
						<Switch defaultChecked onChange={onChange} />
					<span>Offline</span>
				</Form.Item>
				<Form.Item name='country' label="Country" className="form-grouppp">
					<Input placeholder="Country" />
				</Form.Item>
				<Form.Item name='currency' label="Currency" className="form-grouppp">
					<Input placeholder="Currency" />
				</Form.Item>
			</Col>
		</Row>
        <Form.Item name='long-name' label="Long Name" className="form-grouppp">
          <Input placeholder="Long Name" />
        </Form.Item>
        <Form.Item name='description' label="Description" className="form-grouppp">
          <TextArea rows={4} placeholder="Description" />
        </Form.Item>
		<Row>
			<Col
				span={24}
				style={{
					textAlign: 'right',
				}}
			>
				<Form.Item>

				<Button type="primary" htmlType="submit">
					Submit
				</Button>
				</Form.Item>
			</Col>
      	</Row>
      </Form>
    </>
  );
};

export default General;