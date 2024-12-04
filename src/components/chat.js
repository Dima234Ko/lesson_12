import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages, sendMessage } from "../store/actions/messageActions.js";

const emojiMap = {
  ":)": "path/to/smile.png",
  ":(": "path/to/sad.png",
  ":D": "path/to/laugh.png",
};

const replaceEmojis = (text) => {
  return text.replace(
    /:\)|:\(|:D/g,
    (match) =>
      `<img src="${emojiMap[match]}" alt="${match}" style="width:20px;height:20px;">`,
  );
};

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.messages);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      const message = {
        text: messageText,
        senderId: 1, // Замените на реальный ID пользователя
        timestamp: new Date(),
      };
      dispatch(sendMessage(message));
      setMessageText("");
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <div
              dangerouslySetInnerHTML={{ __html: replaceEmojis(msg.text) }}
            />
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Введите сообщение..."
        />
        <button onClick={handleSendMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default Chat;
