import React from 'react';
import 'antd/dist/antd.css';
import './Sidebar.css';
import { Layout, Menu } from 'antd';
import { Link, useLocation  } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faFlag, faTags, faUser } from '@fortawesome/free-solid-svg-icons'

const { Sider } = Layout;

export default function LayoutM() {
	let location = useLocation();

	const renderMenu = () => (
		<Menu
		  className="sidedrawer-menu"
		  defaultSelectedKeys={[location.pathname.replace(/\//g, '') || 'general']}
		>
			<Menu.Item key="general">
				<FontAwesomeIcon icon={faClone} size='2x' />
				<Link to="/general">
					<span title='General'>
						General
					</span>
				</Link>
			</Menu.Item>
		  <Menu.Item key="items">
		  	<FontAwesomeIcon icon={faFlag} size='2x' />
			<Link to="/items">
			  <span title='Items'>
				Items
			  </span>
			</Link>
		  </Menu.Item>
		  <Menu.Item key="deals">
		  	<FontAwesomeIcon icon={faTags} size='2x' />
			<Link to="/deals">
			  <span title='Deals'>
				Deals
			  </span>
			</Link>
		  </Menu.Item>
		  <Menu.Item key="customers">
		  	<FontAwesomeIcon icon={faUser} size='2x' />
			<Link to="/customers">
			  <span title='Customers'>
				  Customers
			  </span>
			</Link>
		  </Menu.Item>
		</Menu>
	  );

	return (

		<Sider className='sidebar'>
			{renderMenu()}
		</Sider>
	);
}
