import { configureStore, applyMiddleware, compose  } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMonitor = process.env.NODE_ENV === 'development' 
  ? console.tron.createSagaMonitor()
  : null; 

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor
});

const enhancer = process.env.NODE_ENV === 'development'
  ? compose(console.tron.createEnhancer(),
    applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware);

const store = configureStore({
  reducer: {
    todos: rootReducer
  },
  enhancers: [enhancer]
});

sagaMiddleware.run(rootSaga);
export default store;