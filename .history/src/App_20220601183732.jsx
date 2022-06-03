import { useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

import { Rotas } from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Rotas />
        <GlobalStyle />
        <ToastContainer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
