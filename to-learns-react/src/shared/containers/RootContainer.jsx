import React from 'react';
import { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.node,
};

export default class RootContainer extends React.Component {
  render() {
    return (
      <div>
        <h1><Link to="/">App</Link></h1>

        <nav>
          <ul>
            <li><Link to="/about" activeClassName="active">About</Link></li>
          </ul>
        </nav>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

RootContainer.propTypes = propTypes;
