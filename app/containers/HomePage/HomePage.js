/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import { Container, Video } from 'containers/HomePage/HomePage.style';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
		<Container>
			<Video autoPlay loop>
				<source src={require('assets/zozi_homepage_720p_v13.webm')} type="video/webm"/>
				<source src={require('assets/zozi_homepage_720p_v13.mp4')} type="video/mp4"/>
				Your browser doesn't support HTML5 video tag.
			</Video>
		</Container>
    );
  }
}