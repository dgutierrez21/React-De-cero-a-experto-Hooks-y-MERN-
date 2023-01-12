export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "ABC":
      throw new Error("action.type = ABC no esta implementada");
      break;

    default:
      return initialState;
      break;
  }
};
