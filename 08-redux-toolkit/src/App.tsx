import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { RootState } from "./store/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux Toolkit</h1>
      <h2>{count}</h2>
      <div className="card">
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          incrementBy
        </button>
      </div>
    </>
  );
}

export default App;
