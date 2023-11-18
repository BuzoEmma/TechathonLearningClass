import { useReducer } from "react";

const Reducers = () => {
  const reducer = (state, action) => {
    const { type } = action;

    switch (type) {
      case "increament": {
        const newCount = state.count + 1;
        const NewError = newCount > 20;
        return {
          ...state,
          count: NewError ? state.count : newCount,
          error: NewError ? (
            <b style={{ color: "red" }}>Maximium reached </b>
          ) : null,
        };
      }

      case "decreament": {
        const newCountDown = state.count - 1;
        const newError = newCountDown < -20;

        return {
          ...state,
          count: newError ? state.count : newCountDown,
          error: newError ? (
            <b style={{ color: "red" }}>Minimium reached </b>
          ) : null,
        };
      }

      case "toggle": {
        return {
          ...state,
          toggle: !state.toggle,
        };
      }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    toggle: true,
    error: null,
  });

  return (
    <div>
      Count: {state.count} {state.toggle ? "Yes Uncle" : "No Aunty"} <br />
      <b>{state.error ? state.error : <b>Click Me Again</b>}</b>
      <br />
      <button onClick={() => dispatch({ type: "increament" })}>
        Increament
      </button>{" "}
      <br />
      <button onClick={() => dispatch({ type: "decreament" })}>
        decreament
      </button>{" "}
      <br />
      <button onClick={() => dispatch({ type: "toggle" })}>Toggle Me</button>
    </div>
  );
};

export default Reducers;
