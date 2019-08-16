import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../configureStore";
import AsyncApp from "./AsyncApp";

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    );
  }
}
