import { useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

import { Rotas } from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

import { Provider } from "react-redux";
import store from "./store";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Rotas />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
