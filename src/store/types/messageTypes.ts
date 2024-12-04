

// // Определяем константы для действий
// export const FETCH_MESSAGES = "FETCH_MESSAGES";
// export const SEND_MESSAGE = "SEND_MESSAGE";

// // Определяем начальное состояние
// export const initialMessageState = {
//   messages: [], // Массив сообщений
// };

// // Экспортируем типы сообщений
// export const MessageTypes = {
//   FETCH_MESSAGES,
//   SEND_MESSAGE,
// };

// // Экспортируем начальное состояние
// export const MessageState = {
//   messages: [],
// };



// Определяем константы для действий
export const FETCH_MESSAGES = "FETCH_MESSAGES" as const;
export const SEND_MESSAGE = "SEND_MESSAGE" as const;

// Определяем типы действий
export type MessageActionTypes =
  | { type: typeof FETCH_MESSAGES; payload: Message[] }
  | { type: typeof SEND_MESSAGE; payload: Message }; // Добавьте payload для отправляемого сообщения

// Определяем интерфейс для сообщения
export interface Message {
  id: string;
  text: string;
  senderId: number; 
  timestamp: string;
}

// Определяем интерфейс для состояния
export interface MessageState {
  messages: Message[]; // Массив сообщений
}

// Определяем начальное состояние
export const initialMessageState: MessageState = {
  messages: [],
};

// Экспортируем типы сообщений и начальное состояние
export const MessageTypes = {
  FETCH_MESSAGES,
  SEND_MESSAGE,
} as const;

export const MessageState = initialMessageState;
