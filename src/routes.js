import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import App from './containers/App/App';

export default (
	<Router>
		<div>
			<Route exact path='/' component={App} />
			<Route exact path='/' component={HomePage}></Route>
		</div>
	</Router>
);