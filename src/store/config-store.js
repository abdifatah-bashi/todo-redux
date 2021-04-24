import {createStore, applyMiddleware, compose} from "redux"
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer} from "./reducer/reducer"

const middleware = [thunk];

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
  )
);
