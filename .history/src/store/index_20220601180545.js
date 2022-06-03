import { configureStore  } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const enhancer = process.env.NODE_ENV === 'development'
  ? console.tron.createEnhancer()
  : null;

const store = configureStore({
  reducer: {
    todos: rootReducer
  },
  enhancers: [enhancer]
});

export default store;