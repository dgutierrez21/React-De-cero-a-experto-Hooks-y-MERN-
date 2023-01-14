import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { FormWithCustomHook } from "./02-useEffect/SimpleFormWithCustomHook";
import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { MemoHook } from "./06-Memos/MemoHook";
import { Memorize } from "./06-Memos/Memorize";
import { CallbackHook } from "./07-useCallback/CallbackHook";
import { Padre } from "./08-tarea-memo/Padre";

// import "./09-useReducer/intro-Reducer";
import { TodoApp } from "./09-useReducer/TodoApp";

import { MainApp } from "./10-useContext/MainApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./10-useContext/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    errorElement: <ErrorPage />,
  },
]);

const HooksApp = () => {
  return (
    <>
      {/* <CounterApp /> */}
      {/* <CounterWithCustomHook /> */}
      {/* <SimpleForm /> */}
      {/* <FormWithCustomHook /> */}
      {/* <MultipleCustomHook /> */}
      {/* <FocusScreen /> */}
      {/* <Layout /> */}
      {/* <Memorize /> */}
      {/* <MemoHook /> */}
      {/* <CallbackHook/> */}
      {/* <Padre/> */}
      {/* <TodoApp /> */}
      <RouterProvider router={router} />
    </>
  );
};

export default HooksApp;
