import { useState } from "react";
import { BrowserRouter, Routes, Router } from "react-router-dom";

import { Rotas } from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify";
import history from "./services/history";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <Router  location={history}>
        <Header />
        <Rotas />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
