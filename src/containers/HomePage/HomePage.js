import React, { Component } from 'react';
import { Container, Video } from './HomePage.style';

export default class HomePage extends Component {
	render() {
		return (
			<Container>
				<Video autoPlay loop>
					<source src={require('../../assets/homepage_720p_v3.webm')} type="video/webm"/>
					<source src={require('../../assets/homepage_720p_v3.mp4')} type="video/mp4"/>
					<source src={require('../../assets/homepage_720p_v3.ogv')} type="video/ogv"/>
					Your browser doesn't support HTML5 video tag.
				</Video>
			</Container>
		);
	}
}
