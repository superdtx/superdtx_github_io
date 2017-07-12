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
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Container } from 'theme/grid';
import { Video, P } from 'containers/HomePage/HomePage.style';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (

		<Container>
			<div class="video_holder">
				<Video autoPlay loop>
					<source src={require('assets/zozi_homepage_720p_v13.webm')} type="video/webm"/>
					<source src={require('assets/zozi_homepage_720p_v13.mp4')} type="video/mp4"/>
					Your browser doesn't support HTML5 video tag.
				</Video>
			</div>
			<P>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</P>
		</Container>
    );
  }
}