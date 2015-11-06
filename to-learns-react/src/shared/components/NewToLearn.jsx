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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newName} onChange={this.handleChange} />
          <input type="submit" value="add" />
        </form>
      </div>
    );
  }
}

NewToLearn.propTypes = {
  handleSubmit: PropTypes.func,
};
