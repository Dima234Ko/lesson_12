 //import { FETCH_MESSAGES, SEND_MESSAGE, initialMessageState } from "../types/messageTypes.js";

// const messageReducer = (state = initialMessageState, action) => {
//   switch (action.type) {
//     case FETCH_MESSAGES:
//       return { ...state, messages: action.payload };
//     case SEND_MESSAGE:
//       return { ...state, messages: [...state.messages, action.payload] };
//     default:
//       return state; // Возвращаем текущее состояние, если действие не распознано
//   }
// };

// export default messageReducer;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// Определяем интерфейс для сообщения
interface Message {
  id?: string; // Или number, в зависимости от вашей структуры
  text: string;
  // Добавьте другие поля, если они есть в вашем сообщении
}

// Определяем интерфейс для состояния
interface MessageState {
  messages: Message[];
}

// Начальное состояние
const initialMessageState: MessageState = {
  messages: [],
};

// Создаем срез с помощью createSlice
const messageSlice = createSlice({
  name: 'messages',
  initialState: initialMessageState,
  reducers: {
    fetchMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    sendMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
});

// Экспортируем действия
export const { fetchMessages, sendMessage } = messageSlice.actions;

// Экспортируем редьюсер
export default messageSlice.reducer;
