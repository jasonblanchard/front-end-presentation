import React, { Component } from 'react';
import ToLearnsList from 'app/shared/components/ToLearnsList';
import NewToLearn from 'app/shared/components/NewToLearn';

let id = 100;
function increment() {
  id += 1;
  return id;
}

let toLearnsCache = [];

export default class ToLearnsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toLearns: [],
      error: null,
    };

    this.addToLearn = this.addToLearn.bind(this);
    this.updateToLearn = this.updateToLearn.bind(this);
    this.destroyToLearn = this.destroyToLearn.bind(this);
  }

  componentWillMount() {
    this.setState({
      toLearns: toLearnsCache,
    });
  }

  componentWillUnmount() {
    toLearnsCache = this.state.toLearns;
  }

  isInvalidInput(name) {
    if (name) {
      const count = name.length;
      return (count <= 0) || (count >= 140);
    }

    return true;
  }

  addToLearn(toLearn) {
    if (this.isInvalidInput(toLearn.name)) {
      this.setState({
        error: 'Enter a valid thing to learn',
      });
    } else {
      const newToLearn = Object.assign({}, {id: increment()}, toLearn);
      this.setState({
        toLearns: [...this.state.toLearns, newToLearn],
        error: null,
      });
    }
  }

  updateError(error) {
    this.setState({
      error: error,
    });
  }

  updateToLearn(toLearnId) {
    const toLearnIndex = this.state.toLearns.findIndex(toLearn => Number(toLearn.id) === Number(toLearnId));
    const toLearns = this.state.toLearns;
    this.setState({
      toLearns: [
        ...toLearns.slice(0, toLearnIndex),
        Object.assign({}, toLearns[toLearnIndex], {completed: !toLearns[toLearnIndex].completed}),
        ...toLearns.slice(toLearnIndex + 1, toLearns.length),
      ],
    });
  }

  destroyToLearn(toLearnId) {
    this.setState({
      toLearns: this.state.toLearns.filter(toLearn => toLearn.id !== Number(toLearnId)),
    });
  }

  render() {
    return (
      <div>
        <NewToLearn handleSubmit={this.addToLearn} error={this.state.error} isInvalidInput={this.isInvalidInput} />
        <ToLearnsList toLearns={this.state.toLearns} handleChange={this.updateToLearn} onClickDelete={this.destroyToLearn}/>
      </div>
    );
  }
}
