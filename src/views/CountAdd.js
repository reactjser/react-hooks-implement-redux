import React from 'react';
import { connect } from '../myRedux';

function CountAdd(props) {
  return (
    <div>
      <h3>{props.count}</h3>
      <button onClick={() => props.addCount(1)}>Add 1</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCount: payload => dispatch({ type: 'ADD', payload }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountAdd);
