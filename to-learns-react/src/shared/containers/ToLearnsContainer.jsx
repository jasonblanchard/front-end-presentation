import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'app/shared/actions/actions';
import ToLearnsList from 'app/shared/components/ToLearnsList';
import NewToLearn from 'app/shared/components/NewToLearn';

export default class ToLearnsContainer extends Component {
  render() {
    return (
      <div>
        <NewToLearn handleSubmit={this.props.addToLearn} />
        <ToLearnsList toLearns={this.props.toLearns} />
      </div>
    );
  }
}

ToLearnsContainer.propTypes = {
  toLearns: PropTypes.array,
  addToLearn: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    toLearns: state.toLearns,
  };
}

function mapDispatchToProps(dispatch) {
  const actionMapping = {
    addToLearn: actions.addToLearn,
  };

  return bindActionCreators(actionMapping, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ToLearnsContainer);
