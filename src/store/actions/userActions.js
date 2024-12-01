import { FETCH_USERS } from "../types/userTypes.js";

// Получение пользователей
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("/api/users");
      const users = await response.json();

      dispatch({
        type: FETCH_USERS,
        payload: users,
      });
    } catch (error) {
      console.error("Ошибка при получении пользователей:", error);
    }
  };
};
