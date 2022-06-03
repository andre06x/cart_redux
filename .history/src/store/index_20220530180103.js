import { configureStore  } from '@reduxjs/toolkit';
import rootReducer from "./modules/rootReducer";

// const enhancer = process.env.NODE_ENV === 'development'
//   ? console.tron.createEnhancer()
//   : null;

const store = configureStore({
  reducer: {
    todos: rootReducer
  },
  // enhancers: [enhancer]
});

export default store;