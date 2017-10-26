import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';
import HomePage from './containers/HomePage/HomePage';
import Photograph from './containers/Photograph/Photograph';
import About from './containers/About/About';
import Stack from './containers/Stack/Stack';
import Experiment from './containers/Experiment/Experiment';
import App from './containers/App/App';

export default (
	<Router>
		<App>
    <HomePage />
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
				<Route path="/Photograph" component={Photograph}></Route>
				<Route path="/Stack" component={Stack}></Route>
				<Route path="/Experiment" component={Experiment}></Route>
				<Route path="/About" component={About}></Route>
				<Redirect path="/*" to="/"></Redirect>
			</Switch>
		</App>
	</Router>
);
