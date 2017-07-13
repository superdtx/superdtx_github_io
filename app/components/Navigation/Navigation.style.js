import styled from 'styled-components';

export const NavigationContainer = styled.div`
	height: 80px;
	background-color: rgba(255, 255,255,.9);
	border-bottom: 1px #eeeeee solid;
	display: block;

	z-index: 1000;
	position: relative
`;

export const MainMenu = styled.div`
	margin: auto;
	width: 1200px;
`;

export const Logo = styled.img`
	
`;

export const UL = styled.ul`
	margin-left: 360px;
	display: block;
`;

export const NavItem = styled.li`
	float: left;
	postion: relative;

	list-style: none;
	display: list-item;
	text-align: -webkit-match-parent;
	padding: 0 30px;
`;

export const NavItemLink = styled.a`
	text-decoration: none;
    color: #333;
    font-size: 18px;
    display: block;
`;