import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch(); 

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Redux Counter</h2>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      {/* <h4>Current State:</h4>
      <pre>{JSON.stringify({ count }, null, 2)}</pre> */}
    </div>
  );
}

export default App;
