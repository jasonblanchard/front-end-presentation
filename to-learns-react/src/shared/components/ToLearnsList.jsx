import React, { Component, PropTypes } from 'react';

let uid = 0;
function createUid() {
  uid = uid + 1;
  return uid;
}

export default class ToLearnsList extends Component {
  constructor(props) {
    super(props);

    this.key = createUid();

    this.renderToLearn = this.renderToLearn.bind(this);
  }

  renderToLearn(toLearn) {
    return <li>{toLearn.name}</li>;
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.toLearns.map(this.renderToLearn)}
        </ul>
      </div>
    );
  }
}

ToLearnsList.propTypes = {
  toLearns: PropTypes.array,
};
