// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchMessages, sendMessage } from "../store/actions/messageActions.js";


// const emojiMap = {
//   ":)": "path/to/smile.png",
//   ":(": "path/to/sad.png",
//   ":D": "path/to/laugh.png",
// };

// const replaceEmojis = (text) => {
//   return text.replace(/:\)|:\(|:D/g, (match) => `<img src="${emojiMap[match]}" alt="${match}" style="width:20px;height:20px;">`);
// };

// const Chat = () => {
//   const dispatch = useDispatch();
//   const messages = useSelector((state) => state.messages.messages);
//   const [messageText, setMessageText] = useState("");

//   useEffect(() => {
//     dispatch(fetchMessages());
//   }, [dispatch]);

//   const handleSendMessage = () => {
//     if (messageText.trim()) {
//       const message = {
//         text: messageText,
//         senderId: 1, // Замените на реальный ID пользователя
//         timestamp: new Date(),
//       };
//       dispatch(sendMessage(message));
//       setMessageText("");
//     }
//   };

//   return (
//     <div className="chat-container">
//       <div className="messages">
//         {messages.map((msg) => (
//           <div key={msg.id} className="message">
//             <div dangerouslySetInnerHTML={{ __html: replaceEmojis(msg.text) }} />
//           </div>
//         ))}
//       </div>
//       <div className="input-container">
//         <input
//           type="text"
//           value={messageText}
//           onChange={(e) => setMessageText(e.target.value)}
//           placeholder="Введите сообщение..."
//         />
//         <button onClick={handleSendMessage}>Отправить</button>
//       </div>
//     </div>
//   );
// };

// export default Chat;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages, sendMessage } from "../store/actions/messageActions";
import { RootState } from "../store/types/types"; 
import { Message } from "../store/types/messageTypes"; 

const replaceEmojis = (text: string): string => {
  return text.replace(/:\)/g, '<img src="path/to/smile.png" alt=":)" />'); // Замените путь на реальный
};

const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const messages: Message[] = useSelector((state: RootState) => state.messages.messages);
  const [messageText, setMessageText] = useState<string>("");

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        text: messageText,
        senderId: 1,
        timestamp: new Date().toISOString(),
      };
      dispatch(sendMessage(message));
      setMessageText("");
    }
  };

  const messageElements = messages.map((msg: Message) => (
    <div key={msg.id} className="message">
      <div dangerouslySetInnerHTML={{ __html: replaceEmojis(msg.text) }} />
    </div>
  ));

  const noMessagesElement = <div className="no-messages">Нет сообщений</div>;

  const messagesDisplay = messages.length > 0 ? messageElements : noMessagesElement;

  return (
    <div className="chat-container">
      <div className="messages">
        {messagesDisplay}
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



