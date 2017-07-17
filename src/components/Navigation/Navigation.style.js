import styled from 'styled-components';

export const NavigationContainer = styled.header`
	display: block;
	z-index: 1000;
	position: relative
`;

export const MainMenu = styled.div`
    width: calc(50% - 30%);
    top: auto;
    left: auto;
    font-size: 12px;
    margin: 30px 0 0 30px;
`;

export const OPTIONSUL = styled.ul`
    -webkit-padding-start: 0px;
`;

export const NavItem = styled.li`

	margin: .75em .5em .75em 0;
	font-family: "Lato";
    line-height: 1.25em;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: 400;
    font-style: normal;
    list-style-type: none;
	
	display: list-item;
    text-align: -webkit-match-parent;
`;

export const NavItemLink = styled.a`
	text-decoration: none;
    color: #f7f6f5;
    cursor: auto;
    display: block;

    &:hover {
	    color: #a2834e;
	}
`;

export const SOCIALBOX = styled.div`
	position: absolute;
    right: 0;
    top: 0;
    padding: 30px 30px 0 10px;
    box-sizing: border-box;
`;

export const SOCIALUL = styled.ul`
	margin: 0;
    padding: 0;
    text-align: right;
`;

export const SocItem = styled.li`
	list-style-type: none;
    display: inline-block;
    text-align: right;
    margin: 0 0 14px 7px;
`;