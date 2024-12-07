import React from "react";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Chat from "./components/chat.js";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Чат-приложение</h1>
        <Chat />
      </div>
    </Provider>
  );
};

export default App;
