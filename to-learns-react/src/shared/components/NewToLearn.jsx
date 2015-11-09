import React, { Component, PropTypes } from 'react';

export default class NewToLearn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      newName: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newToLearnProps = {
      name: this.state.newName,
      completed: false,
    };

    this.props.handleSubmit(newToLearnProps);

    this.setState({
      newName: '',
    });
  }

  render() {
    const countClassNames = this.props.isInvalidInput(this.state.newName) ? 'error' : '';

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="error">
            {this.props.error}
          </div>
          <label htmlFor="new-title">To Learn: </label>
          <input id="new-title" type="text" value={this.state.newName} onChange={this.handleChange} /> <input type="submit" value="Add" /> <span className={countClassNames}>{140 - this.state.newName.length}</span>
        </form>
      </div>
    );
  }
}

NewToLearn.propTypes = {
  handleSubmit: PropTypes.func,
  isInvalidInput: PropTypes.func,
  error: PropTypes.string,
};
