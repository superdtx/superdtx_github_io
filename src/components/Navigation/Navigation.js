import React from "react";
import {
  NavigationContainer,
  SubMenu,
  MainMenu,
  NavItem,
  NavItemLink,
  OPTIONSUL,
  SOCIALBOX,
  SOCIALUL,
  SocItem,
  SocItemLink
} from "./Navigation.style";
import githubr from "../../assets/socialIcon/githubr.svg";
import linkedinr from "../../assets/socialIcon/linkedinr.svg";

export default class Navigation extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      showPhotoSubmenu: false,
      showConnectSubmenu: false
    };
  }

  showHidePhotoSubmenu = () => {
    this.setState(prevState => {
      return {
        showPhotoSubmenu: !prevState.showPhotoSubmenu,
        showConnectSubmenu: false
      };
    });
  };

  showHideConnectSubmenu = () => {
    this.setState(prevState => {
      return {
        showConnectSubmenu: !prevState.showConnectSubmenu,
        showPhotoSubmenu: false
      };
    });
  };

  render() {
    return (
      <NavigationContainer>
        <MainMenu>
          <OPTIONSUL>
            <NavItem>
              <NavItemLink onClick={this.showHidePhotoSubmenu}>
                <i
                  className={
                    this.state.showPhotoSubmenu ? "fa fa-minus" : "fa fa-plus"
                  }
                  aria-hidden="true"
                />{" "}
                PHOTOGRAPH
              </NavItemLink>
              <SubMenu id="photograph" status={this.state.showPhotoSubmenu}>
                  <NavItem>ALASKA</NavItem>
                  <NavItem>GRAND TETON</NavItem>
                  <NavItem>CITY</NavItem>
              </SubMenu>
            </NavItem>
            <NavItem>
              <NavItemLink href="/STACK">
                <i className="fa fa-plus" aria-hidden="true" /> STACK
              </NavItemLink>
            </NavItem>
            <NavItem>
              <NavItemLink onClick={this.showHideConnectSubmenu}>
                <i
                  className={
                    this.state.showConnectSubmenu ? "fa fa-minus" : "fa fa-plus"
                  }
                  aria-hidden="true"
                />{" "}
                CONNECT
              </NavItemLink>
              <SubMenu id="connect" status={this.state.showConnectSubmenu}>
                  <NavItem>DEVELOPER STATEMENT</NavItem>
                  <NavItem>ABOUT THE DEVELOPER</NavItem>
                  <NavItem>CONTACT</NavItem>
              </SubMenu>
            </NavItem>
            <NavItem>
              <NavItemLink href="/ABOUT">
                <i className="fa fa-plus" aria-hidden="true" /> ABOUT ME
              </NavItemLink>
            </NavItem>
            <NavItem>
              <NavItemLink href="/">
                <i className="fa fa-plus" aria-hidden="true" /> HOME
              </NavItemLink>
            </NavItem>
          </OPTIONSUL>
        </MainMenu>
        <SOCIALBOX>
          <SOCIALUL>
            <SocItem>
              <SocItemLink href="https://github.com/superdtx">
                <object type="image/svg+xml" data={githubr}>
                  Your browser does not support SVGs
                </object>
              </SocItemLink>
            </SocItem>
            <SocItem>
              <SocItemLink href="https://www.linkedin.com/in/tanxind">
                <object type="image/svg+xml" data={linkedinr}>
                  Your browser does not support SVGs
                </object>
              </SocItemLink>
            </SocItem>
          </SOCIALUL>
        </SOCIALBOX>
      </NavigationContainer>
    );
  }
}
