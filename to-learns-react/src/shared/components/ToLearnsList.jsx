import React, { Component, PropTypes } from 'react';

export default class ToLearnsList extends Component {
  constructor(props) {
    super(props);

    this.renderToLearn = this.renderToLearn.bind(this);
  }

  renderToLearn(toLearn) {
    return <li key={toLearn.id}>{toLearn.name}</li>;
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
