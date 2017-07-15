import React from 'react';
import { NavigationContainer, Logo, MainMenu, NavItem, NavItemLink, UL } from './Navigation.style';

export default class Navigation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
	render() {
		return (			
			<NavigationContainer>
				<MainMenu>
					<Logo />
					<UL>
						<NavItem>
							<NavItemLink href="#">HOME</NavItemLink>
						</NavItem>
						<NavItem>
							<NavItemLink href="#">PHOTOGRAPH</NavItemLink>
						</NavItem>
						<NavItem>
							<NavItemLink href="#">STEPS</NavItemLink>
						</NavItem>
						<NavItem>
							<NavItemLink href="#">STACK</NavItemLink>
						</NavItem>
						<NavItem>
							<NavItemLink href="#">ABOUT</NavItemLink>
						</NavItem>
					</UL>
				</MainMenu>
			</NavigationContainer>
		);
	}
}