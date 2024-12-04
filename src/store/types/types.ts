// types.ts
import { MessageState } from './messageTypes'; // Импортируйте тип состояния сообщений
import { UserState } from './userTypes'; // Импортируйте тип состояния пользователей

export interface RootState {
  messages: MessageState; // Состояние сообщений
  users: UserState;       // Состояние пользователей
}
