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
			<div className="wrapper">
				<Header />
				<Layout>
					<Sidebar />
					<Layout.Content>
						<Routes />
					</Layout.Content>
				</Layout>
			</div>

		</Layout>
	</BrowserRouter>
  );
}

export default App;
