import React from "react";
import "./App.css";
import "./fontAwesomeIcons";
import { Provider } from "react-redux";
import store from "./store/store";
import { Layout } from "./components";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes />
      </Layout>
    </Provider>
  );
}

export default App;
