import { useState } from "react";
import { unstable_HistoryRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import history from "./services/history";
import store from "./store";

import { Rotas } from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

function App() {

  return (
    <Provider store={store}>
      <Router  history={history}>
        <Header />
        <Rotas />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
