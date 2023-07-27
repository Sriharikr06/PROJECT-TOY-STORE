import { createStore } from "redux";

import { reducers } from "./reducersCombine";

export const store = createStore(
  reducers,
  {},
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);