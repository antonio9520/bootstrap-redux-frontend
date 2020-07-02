import React from "react";
import "./App.css";
import "./fontAwesomeIcons";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom"
import store from "./store/store";
import { Layout } from "./components";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Layout>
        <Routes />
      </Layout>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
