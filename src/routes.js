import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Items from './pages/Items/Items';
import Deals from './pages/Deals/Deals';
import Customers from './pages/Customers/Customers';
import General from './pages/General/General';

const Routes = () => (
	<Switch>
		<Route path={process.env.PUBLIC_URL + '/items'}>
			<Items />
		</Route>
		<Route path={process.env.PUBLIC_URL + '/deals'}>
			<Deals />
		</Route>
		<Route path={process.env.PUBLIC_URL + '/general'}>
			<General />
		</Route>
		<Route path={process.env.PUBLIC_URL + '/customers'}>
			<Customers />
		</Route>
		<Route path="/">
			<General />
		</Route>
	</Switch>
);

export default Routes;
