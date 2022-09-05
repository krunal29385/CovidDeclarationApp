import {
    INSERT_DECLARATION
  } from "../actions/types";
  const initialState = [];

  function declarationReducer(declarations = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case INSERT_DECLARATION:
        return [...declarations, payload];
      default:
        return declarations;
    }
  };
  export default declarationReducer;