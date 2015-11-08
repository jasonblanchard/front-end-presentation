import React, { Component, PropTypes } from 'react';

export default class ToLearnsList extends Component {
  constructor(props) {
    super(props);

    this.renderToLearn = this.renderToLearn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event.target.value);
  }

  handleClick(event) {
    event.preventDefault();
    const toLearnId = event.target.id.match(/toLearn-(.+)/);
    this.props.onClickDelete(toLearnId[1]);
  }

  renderToLearn(toLearn) {
    const classNames = toLearn.completed ? 'completed' : 'uncomplete';

    return (
      <li key={toLearn.id} className={classNames}>
        <input type="checkbox" value={toLearn.id} checked={toLearn.completed} onChange={this.handleChange}/>
        {toLearn.name} <a id={`toLearn-${toLearn.id}`} onClick={this.handleClick} href="#">x</a>
      </li>
    );
  }

  render() {
    const toLearns = this.props.toLearns;

    return (
      <div>
        <ul className="to-learns">
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
  onClickDelete: PropTypes.func,
};
