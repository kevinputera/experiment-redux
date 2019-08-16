import React, { useCallback } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { INCREASE_COUNTER, DECREASE_COUNTER } from "../actions/counter";

const Counter: React.FC<{
  counter: number;
  dispatch: Dispatch<{ type: string }>;
}> = props => {
  const handleIncrement = useCallback(() => {
    props.dispatch({ type: INCREASE_COUNTER });
  }, [props.dispatch]);

  const handleDecrement = useCallback(() => {
    props.dispatch({ type: DECREASE_COUNTER });
  }, [props.dispatch]);

  const handleOddIncrement = useCallback(() => {
    if (props.counter % 2 !== 0) {
      props.dispatch({ type: INCREASE_COUNTER });
    }
  }, [props.counter, props.dispatch]);

  const handleAsyncIncrement = useCallback(() => {
    setTimeout(() => props.dispatch({ type: INCREASE_COUNTER }), 500);
  }, [props.dispatch]);

  return (
    <div>
      <span>Clicked: {props.counter} times</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleOddIncrement}>Increment if odd</button>
      <button onClick={handleAsyncIncrement}>Increment async</button>
    </div>
  );
};

const mapStateToProps = (state: number) => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps)(Counter);
