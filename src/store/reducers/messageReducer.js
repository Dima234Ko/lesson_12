// src/store/reducers/messageReducer.js

import {
  FETCH_MESSAGES,
  SEND_MESSAGE,
  initialMessageState,
} from "../types/messageTypes.js";

const messageReducer = (state = initialMessageState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return { ...state, messages: action.payload };
    case SEND_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state; // Возвращаем текущее состояние, если действие не распознано
  }
};

export default messageReducer;
