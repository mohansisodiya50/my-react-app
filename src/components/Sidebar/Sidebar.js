import React from 'react';
import 'antd/dist/antd.css';
import './Sidebar.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

export default function LayoutM() {
	const renderMenu = () => (
		<Menu
		  className="sidedrawer-menu"
		  defaultSelectedKeys={['general']}
		>
		  <Menu.Item key="general">
			<Link to="/general">
			  <span title='General'>
				General
			  </span>
			</Link>
		  </Menu.Item>
		  <Menu.Item key="items">
			<Link to="/items">
			  <span title='Items'>
				Items
			  </span>
			</Link>
		  </Menu.Item>
		  <Menu.Item key="deals">
			<Link to="/deals">
			  <span title='Deals'>
				Deals
			  </span>
			</Link>
		  </Menu.Item>
		  <Menu.Item key="customers">
			<Link to="/customers">
			  <span title='Customers'>
				  Customers
			  </span>
			</Link>
		  </Menu.Item>
		</Menu>
	  );

	return (

		<Sider width={200} className="site-layout-background">
			{renderMenu()}
		</Sider>
	);
}
