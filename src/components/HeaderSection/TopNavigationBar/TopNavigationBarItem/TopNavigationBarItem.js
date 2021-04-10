import './TopNavigationBarItem.css';
import React from 'react';

class TopNavigationBarItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <li>
        <a href="https://www.google.ca/">{this.props.value}</a>
      </li>
    );
  }
};

export default TopNavigationBarItem;