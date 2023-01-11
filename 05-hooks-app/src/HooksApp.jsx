import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { FormWithCustomHook } from "./02-useEffect/SimpleFormWithCustomHook";
import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";

const HooksApp = () => {
  return (
    <>
      {/* <CounterApp /> */}
      {/* <CounterWithCustomHook /> */}
      {/* <SimpleForm /> */}
      {/* <FormWithCustomHook /> */}
      <MultipleCustomHook />
    </>
  );
};

export default HooksApp;
