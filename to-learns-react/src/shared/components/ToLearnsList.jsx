import React, { Component, PropTypes } from 'react';

export default class ToLearnsList extends Component {
  constructor(props) {
    super(props);

    this.renderToLearn = this.renderToLearn.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event.target.value);
  }

  renderToLearn(toLearn) {
    return <li key={toLearn.id}><input type="checkbox" value={toLearn.id} onChange={this.handleChange}/>{toLearn.name}</li>;
  }

  render() {
    const toLearns = this.props.toLearns;

    return (
      <div>
        <ul>
          {toLearns.length > 0 ? toLearns.map(this.renderToLearn) : 'Add something to learn!'}
        </ul>
        <div className="stats">
          total: {toLearns.length} |
          completed: {toLearns.filter(toLearn => toLearn.completed).length} |
          uncompleted: {toLearns.filter(toLearn => !toLearn.completed).length}
        </div>
      </div>
    );
  }
}

ToLearnsList.propTypes = {
  toLearns: PropTypes.array,
  handleChange: PropTypes.func,
};
