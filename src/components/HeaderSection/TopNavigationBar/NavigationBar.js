import './NavigationBar.css';
import React from 'react';
import TopNavigationBarItem from './TopNavigationBarItem/TopNavigationBarItem';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <TopNavigationBarItem value='Overview'></TopNavigationBarItem>
          <TopNavigationBarItem value='Landings'></TopNavigationBarItem>
          <TopNavigationBarItem value='Pages'></TopNavigationBarItem>
          <TopNavigationBarItem value='App'></TopNavigationBarItem>
          <TopNavigationBarItem value='Docs'></TopNavigationBarItem>
          <TopNavigationBarItem value='afjgasdkfgaakfjwefgkjawefgawjhkefgaewjl'></TopNavigationBarItem>
        </ul>
      </div>

    );
  }
};

export default NavigationBar;