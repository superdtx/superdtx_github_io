import React from 'react';
import { NavigationContainer, MainMenu, NavItem, NavItemLink, 
	OPTIONSUL, SOCIALBOX, SOCIALUL, SocItem } from './Navigation.style';

export default class Navigation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
	


	render() {
		return (			
			<NavigationContainer>
				<MainMenu>
					<OPTIONSUL>
						<NavItem>
							<NavItemLink href="/PHOTOGRAPH">+ PHOTOGRAPH</NavItemLink>
						</NavItem>
						<NavItem>
							<NavItemLink href="/STACK">+ STACK</NavItemLink>
						</NavItem>
						<NavItem>
							<NavItemLink href="/EXPERIMENT">+ PROJECTS</NavItemLink>
						</NavItem>
						<NavItem>
							<NavItemLink href="/ABOUT">+ ABOUT ME</NavItemLink>
						</NavItem>
						<NavItem>
							<NavItemLink href="/">+ HOME</NavItemLink>
						</NavItem>
					</OPTIONSUL>
				</MainMenu>
				<SOCIALBOX>
					<SOCIALUL>
						<SocItem>
							{/*<a href="https://github.com/superdtx">
								<object type="image/svg+xml" data="../../assets/socialIcon/github_logo_r.svg"></object>
							</a>*/}
						</SocItem>
						<SocItem>
							<a href="https://www.linkedin.com/in/tanxind">
								<img src="assets/socialIcon/linkedin_logo_r.svg"/>
							</a>
						</SocItem>
					</SOCIALUL>
				</SOCIALBOX>
			</NavigationContainer>
		);
	}
}