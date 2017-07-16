import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import Photograph from './containers/Photograph/Photograph';
import About from './containers/About/About';
import Stack from './containers/Stack/Stack';
import Experiment from './containers/Experiment/Experiment';
import App from './containers/App/App';

export default (
	<Router>
		<App>
			<Route path='/' component={HomePage}></Route>
			<Route exact path='/Photograph' component={Photograph}></Route>
			<Route exact path='/Stack' component={Stack}></Route>
			<Route exact path='/Experiment' component={Experiment}></Route>
			<Route exact path='/About' component={About}></Route>
		</App>
	</Router>
);