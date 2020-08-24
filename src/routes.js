import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Items from './pages/Items/Items';
import Deals from './pages/Deals/Deals';
import Customers from './pages/Customers/Customers';
import General from './pages/General/General';

const Routes = () => (
	<BrowserRouter  basename={process.env.PUBLIC_URL}>
		<Switch>
			<Route path="/items">
				<Items />
			</Route>
			<Route path="/deals">
				<Deals />
			</Route>
			<Route path="/general">
				<General />
			</Route>
			<Route path="/customers">
				<Customers />
			</Route>
			<Route path="/">
				<General />
			</Route>
		</Switch>
	</BrowserRouter>
);

export default Routes;
