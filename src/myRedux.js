import React, { useContext } from 'react';

const MyContext = React.createContext();
const MyProvider = MyContext.Provider;

function connect(mapStateToProps, mapDispatchToProps) {
  return function(Component) {
    return function(props) {
      const { state, dispatch } = useContext(MyContext);
      const stateToProps = mapStateToProps(state);
      const dispatchToProps = mapDispatchToProps(dispatch);
      const newProps = { ...props, ...stateToProps, ...dispatchToProps };
      return <Component {...newProps} />;
    };
  };
}

export { connect, MyProvider as Provider };
