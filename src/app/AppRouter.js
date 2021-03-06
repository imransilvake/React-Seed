// react
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// app
import ENV from '../environment/index';

// lazy load components
const Home = React.lazy(() => import('./screens/home/Home'));
const Error404 = React.lazy(() => import('./screens/404/Error404'));

const AppRouter = () => {
	return (
		<Switch>
			<Route exact path={ENV().ROUTING.HOME} component={Home} />
			<Route exact from="*" component={Error404} />
		</Switch>
	);
};
export default AppRouter;
