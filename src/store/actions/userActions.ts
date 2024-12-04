//import { FETCH_USERS } from "../types/userTypes.js";

// // Получение пользователей
// export const fetchUsers = () => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch("/api/users");
//       const users = await response.json();

//       dispatch({
//         type: FETCH_USERS,
//         payload: users,
//       });
//     } catch (error) {
//       console.error("Ошибка при получении пользователей:", error);
//     }
//   };
// };


import { FETCH_USERS } from "../types/userTypes";

// Определяем интерфейс для пользователя
interface User {
  id: string; // или number, в зависимости от вашей структуры
  name: string;
  email: string;
  // Добавьте другие поля, если они есть в вашем объекте пользователя
}

// Получение пользователей
export const fetchUsers = () => {
  return async (dispatch: (action: { type: string; payload: User[] }) => void) => {
    try {
      const response = await fetch("/api/users");

      // Проверяем, успешен ли ответ
      if (!response.ok) {
        throw new Error(`Ошибка сети: ${response.status}`);
      }

      const users: User[] = await response.json();

      dispatch({
        type: FETCH_USERS,
        payload: users,
      });
    } catch (error) {
      console.error("Ошибка при получении пользователей:", error);
    }
  };
};
