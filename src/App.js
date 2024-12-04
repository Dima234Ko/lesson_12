import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Chat from "./components/chat";

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

// import React from "react";
// import { Provider } from "react-redux";
// import store from "./store/store"; // Убедитесь, что расширение файла соответствует вашему проекту
// import Chat from "./components/chat.js";

// const App: React.FC = () => {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <h1>Чат-приложение</h1>
//         <Chat />
//       </div>
//     </Provider>
//   );
// };

// export default App;



