import React, { Component, PropTypes } from 'react';
import ToLearnsList from 'app/shared/components/ToLearnsList';
import NewToLearn from 'app/shared/components/NewToLearn';

let id = 100;
function increment() {
  id += 1;
  return id;
}

export default class ToLearnsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toLearns: [],
    };
  }

  addToLearn(toLearn) {
    const newToLearn = Object.assign({}, {id: increment()}, toLearn);
    this.setState({
      toLearns: [...this.state.toLearns, newToLearn],
    });
  }

  updateToLearn(toLearnId) {
    console.log(toLearnId);
  }

  render() {
    return (
      <div>
        <NewToLearn handleSubmit={this.addToLearn.bind(this)} />
        <ToLearnsList toLearns={this.state.toLearns} handleChange={this.updateToLearn} />
      </div>
    );
  }
}

ToLearnsContainer.propTypes = {
  toLearns: PropTypes.array,
  addToLearn: PropTypes.func,
};
