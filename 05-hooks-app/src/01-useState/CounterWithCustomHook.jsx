import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, incremento, decremento, reset } = useCounter(50);
  return (
    <>
      <h1>Counter con hook: {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => incremento(100)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decremento(50)}>
        -1
      </button>
    </>
  );
};
