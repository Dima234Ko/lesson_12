// src/store/store.js

import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import { combineReducers } from "redux";
import messageReducer from "./reducers/messageReducer.js";

// Объединяем редьюсеры
const rootReducer = combineReducers({
  messages: messageReducer,
});

// Создаем хранилище с middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
