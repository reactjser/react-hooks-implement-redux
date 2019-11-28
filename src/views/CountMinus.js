import React, { Component } from 'react';
import { connect } from '../myRedux';

class CountMinus extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.count}</h3>
        <button onClick={() => this.props.minusCount(1)}>Minus 1</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    minusCount: payload => dispatch({ type: 'MINUS', payload }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountMinus);
