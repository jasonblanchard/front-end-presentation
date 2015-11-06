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
        <header className="clearfix">
          <h1><Link to="/">Stuff To Learn</Link></h1>
          <nav>
            <ul>
              <li><Link to="/about" activeClassName="active">about</Link></li>
            </ul>
          </nav>
        </header>

        <div className="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

RootContainer.propTypes = propTypes;
