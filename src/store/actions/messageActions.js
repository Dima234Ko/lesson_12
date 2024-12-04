import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig.js';
import { FETCH_MESSAGES, SEND_MESSAGE } from "../types/messageTypes.js";
import { replaceEmojisWithImages } from '../../utils/emojiUtils.js';

// Получение сообщений
export const fetchMessages = () => {
  return async (dispatch) => {
    try {
      const messagesCollection = collection(db, "messages");
      const snapshot = await getDocs(messagesCollection);
      const messages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        text: replaceEmojisWithImages(doc.data().text), // Применяем замену
      }));

      dispatch({ type: FETCH_MESSAGES, payload: messages });
    } catch (error) {
      console.error("Ошибка при получении сообщений:", error);
    }
  };
};

// Отправка сообщения
export const sendMessage = (message) => {
  return async (dispatch) => {
    try {
      // Заменяем смайлы на изображения
      const modifiedMessage = {
        ...message,
        text: replaceEmojisWithImages(message.text),
      };

      const docRef = await addDoc(collection(db, "messages"), modifiedMessage);
      const newMessage = { id: docRef.id, ...modifiedMessage };
      dispatch({ type: SEND_MESSAGE, payload: newMessage });
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
    }
  };
};
