// src/store/types/messageTypes.js

// Определяем константы для действий
export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const SEND_MESSAGE = "SEND_MESSAGE";

// Определяем начальное состояние
export const initialMessageState = {
  messages: [], // Массив сообщений
};

// Экспортируем типы сообщений
export const MessageTypes = {
  FETCH_MESSAGES,
  SEND_MESSAGE,
};

// Экспортируем начальное состояние
export const MessageState = {
  messages: [],
};


