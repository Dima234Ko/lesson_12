import React from "react";
import ReactDOM from "react-dom/client"; // Обновленный импорт для React 18
import App from "./App.js"; // Настройте путь по необходимости
import "./css/style.css";

const container = document.getElementById("app"); // Убедитесь, что этот ID соответствует вашему HTML
if (container) {
  const root = ReactDOM.createRoot(container); // Создание корня
  root.render(<App tab="home" />); // Отрисовка вашего компонента App
} else {
  console.error("Целевой контейнер не является элементом DOM."); // Обработка ошибок
}
