import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { FormWithCustomHook } from "./02-useEffect/SimpleFormWithCustomHook";
import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";

const HooksApp = () => {
  return (
    <>
      {/* <CounterApp /> */}
      {/* <CounterWithCustomHook /> */}
      {/* <SimpleForm /> */}
      {/* <FormWithCustomHook /> */}
      {/* <MultipleCustomHook /> */}
      {/* <FocusScreen /> */}
      <Layout />
    </>
  );
};

export default HooksApp;
