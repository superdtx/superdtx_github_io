import React, { Component } from 'react';
import { Container, Video } from './HomePage.style';

export default class HomePage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: 0
		};
	}

	increment(){
		this.setState({
			data: this.state.data + 1
		});
	}

	render() {
		return (
			<Container>
				<h1>Hello World!!</h1>
				<p>{this.state.data}</p>
				<button onClick={this.increment.bind(this)}>Increment</button>
				<Video autoPlay loop>
					<source src={require('../../assets/zozi_homepage_720p_v13.webm')} type="video/webm"/>
					<source src={require('../../assets/zozi_homepage_720p_v13.mp4')} type="video/mp4"/>
					<source src={require('../../assets/zozi_homepage_720p_v13.ogv')} type="video/ogv"/>
					Your browser doesn't support HTML5 video tag.
				</Video>
			</Container>
		);
	}
}