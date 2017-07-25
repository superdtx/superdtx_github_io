import React from 'react';
import { NavigationContainer, MainMenu, NavItem, NavItemLink, 
	OPTIONSUL, SOCIALBOX, SOCIALUL, SocItem, SocItemLink } from './Navigation.style';
import githubr from '../../assets/socialIcon/githubr.svg';
import linkedinr from '../../assets/socialIcon/linkedinr.svg';

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
							<SocItemLink href="https://github.com/superdtx">
								<object type="image/svg+xml" data={githubr}>Your browser does not support SVGs</object>	
							</SocItemLink>
						</SocItem>
						<SocItem>
							<SocItemLink href="https://www.linkedin.com/in/tanxind">
								<object type="image/svg+xml" data={linkedinr}>Your browser does not support SVGs</object>	
							</SocItemLink>
						</SocItem>
					</SOCIALUL>
				</SOCIALBOX>
			</NavigationContainer>
		);
	}
}