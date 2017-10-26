import styled from "styled-components";

export const SubMenu = styled.ul`
    list-style-type: none;
    margin: 1em 0;
    padding: 5px 5px 5px 15px;
    color: #f7f6f5;
    background-color: rgba(51,53,56,.8);
    display: ${props => props.status || "none"};
`;

export const NavigationContainer = styled.nav`
    display: block;
    z-index: 1000;
    position: relative;
`;

export const MainMenu = styled.div`
    width: 12%;
    top: auto;
    left: auto;
    font-size: 12px;
    margin: 30px 0 0 30px;
`;

export const OPTIONSUL = styled.ul`
    -webkit-padding-start: 0px;
`;

export const NavItem = styled.li`
    margin: 0.75em 0.5em 0.75em 0;
    line-height: 1.25em;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: 400;
    font-style: normal;
    list-style-type: none;

    display: list-item;
    text-align: -webkit-match-parent;
    cursor: pointer;
`;

export const NavItemLink = styled.a`
    text-decoration: none;
    color: #f7f6f5;
    display: block;

    &:hover {
        color: #a2834e;
    }
`;

export const SOCIALBOX = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding: 0px 30px 0 10px;
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
    margin: 0 7px 14px 7px;
    height: 32px;
    width: 32px;
`;

export const SocItemLink = styled.a`
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
`;
