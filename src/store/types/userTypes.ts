// export const FETCH_USERS = "FETCH_USERS";
// export const initialUserState = {
//   users: [], 
// };




// Определяем константу для действия
export const FETCH_USERS = "FETCH_USERS" as const;

// Определяем интерфейс для пользователя
export interface User {
  id: string; // Или number, в зависимости от вашей структуры
  name: string;
  email: string;
  // Добавьте другие поля, если они есть в вашем объекте пользователя
}

// Определяем интерфейс для состояния
export interface UserState {
  users: User[]; // Массив пользователей
}

// Определяем начальное состояние
export const initialUserState: UserState = { // Исправлено имя переменной
  users: [],
};

