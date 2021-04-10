import headerLogo from '../../assets/headerLogo.svg'
import './Header.css';
import React from 'react';
import NavigationBar from './TopNavigationBar/NavigationBar';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="HeaderInnerContainer">
          <a className="headerLogoContainer">
            <img src={headerLogo} className="HeaderLogo" alt="Header Logo"/>
          </a>
          <NavigationBar />
        </div>
      </div>
    );
  }
};

export default Header;