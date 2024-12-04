// import { FETCH_USERS } from "../types/userTypes.js";

// const initialState = {
//   users: [],
// };

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_USERS:
//       return { ...state, users: action.payload };
//     default:
//       return state;
//   }
// };

// export default userReducer;

import { FETCH_USERS } from "../types/userTypes";

// Определяем интерфейс для пользователя
interface User {
  id: string; // Или number, в зависимости от вашей структуры
  name: string;
  email: string;
  // Добавьте другие поля, если они есть в вашем объекте пользователя
}

// Определяем интерфейс для состояния
interface UserState {
  users: User[];
}

// Определяем тип действия
interface FetchUsersAction {
  type: typeof FETCH_USERS;
  payload: User[];
}

// Объединяем типы действий
type UserAction = FetchUsersAction;

// Начальное состояние
const initialState: UserState = {
  users: [],
};

// Редюсер пользователей
const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    default:
      return state; // Возвращаем текущее состояние, если действие не распознано
  }
};

export default userReducer;


