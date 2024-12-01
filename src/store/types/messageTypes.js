// src/store/types/messageTypes.ts

// Определяем интерфейс для сообщения
export interface Message {
  id?: string; // ? означает, что это поле может быть неопределенным
  text: string;
  senderId: number; // Или string, если вы используете строковые идентификаторы пользователей
  timestamp: Date;
}

// Определяем действия
export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const SEND_MESSAGE = "SEND_MESSAGE";

// Интерфейсы действий
interface FetchMessagesAction {
  type: typeof FETCH_MESSAGES;
  payload: Message[];
}

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

// Объединяем все типы действий в один
export type MessageActionTypes = FetchMessagesAction | SendMessageAction;

// Определяем интерфейс состояния сообщений
export interface MessageState {
  messages: Message[]; // Массив сообщений
}

// Начальное состояние
export const initialMessageState: MessageState = {
  messages: [],
};

// Определяем интерфейс RootState
export interface RootState {
  messages: MessageState; // Используем MessageState для сообщений
}
