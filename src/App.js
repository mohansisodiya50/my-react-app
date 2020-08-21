import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Routes from './routes';
import './App.css';

function App() {
  return (
	<BrowserRouter>
		<Layout className="layout">
			<Header />
			<Layout>
				<Sidebar />
				<Layout.Content style={{ padding: '0 24px 24px' }}>
				<Routes />
			</Layout.Content>
			</Layout>

		</Layout>
	</BrowserRouter>
  );
}

export default App;
