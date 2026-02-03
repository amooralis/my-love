import { useState, useRef } from "react";
import "./App.css";

const predefinedPositions = [
  { x: 0, y: 25 }, // верх слева
  { x: 65, y: 20 }, // верх справа
  { x: 20, y: 55 }, // низ слева
  { x: 65, y: 34 }, // низ справа
  { x: 25, y: 0 }, // верх слева центр
  { x: 60, y: 70 }, // верх справа центр
  { x: 5, y: 55 }, // центр слева
  { x: 2, y: 50 }, // центр справа
  { x: 65, y: 23 }, // низ слева центр
  { x: 40, y: 5 }, // низ справа центр
  { x: 30, y: 70 }, // самый низ слева
  { x: 65, y: 10 }, // самый верх справа
];

function App() {
  const [answeredYes, setAnsweredYes] = useState(false);
  const [answeredNo, setAnsweredNo] = useState(false);
  const [isBackClicked, setIsBackClicked] = useState(false);
  const [noPosition, setNoPosition] = useState(predefinedPositions[0]);
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleYes = () => {
    setAnsweredYes(true);
  };

  const handleNo = () => {
    // На мобильных устройствах просто двигаем кнопку вместо показа сообщения
    if (window.innerWidth <= 768) {
      handleNoHover();
    } else {
      setAnsweredNo(true);
    }
  };

  const handleBack = () => {
    setIsBackClicked(true);
  };

  const handleBackReal = () => {
    setAnsweredYes(false);
    setAnsweredNo(false);
  };

  const handleNoHover = () => {
    const nextIndex = (currentPositionIndex + 1) % predefinedPositions.length;
    setCurrentPositionIndex(nextIndex);
    setNoPosition(predefinedPositions[nextIndex]);
  };

  if (answeredNo) {
    return (
      <div className="container success" ref={containerRef}>
        <div className="hearts-bg">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className={`heart heart-${i + 1}`}>
              😡
            </div>
          ))}
        </div>
        <div className="success-message">
          <h1>😡 ТЫ БАЛУЕШЬСЯ 😡</h1>
          <div className="celebration">👊🏻👊🏻👊🏻👊🏻</div>
          <button className="back-button" onClick={handleBackReal}>
            ⬅︎ Поменять решение
          </button>
        </div>
      </div>
    );
  }
  if (answeredYes) {
    return (
      <div className="container success" ref={containerRef}>
        <div className="hearts-bg">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className={`heart heart-${i + 1}`}>
              💖
            </div>
          ))}
        </div>
        <div className="success-message">
          <h1>🥰 Ура! 🥰</h1>
          <p className="success-message-text">Моводец ❤️</p>
          <p className="success-message-text">Правильный выбор! 💕</p>
          <div className="celebration">🎉💝🎉💝🎉</div>
          {!isBackClicked && (
            <button
              className={`back-button isBackClicked`}
              onClick={handleBack}
            >
              ⬅︎ Поменять решение (как бы нихуя себе)
            </button>
          )}
          {isBackClicked && <p className="error">Не, ну ты норм?</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="container" ref={containerRef}>
      <div className="hearts-bg">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className={`heart heart-${i + 1}`}>
            💕
          </div>
        ))}
      </div>

      <div className="valentine-card">
        <h1 className="question">💖 Будешь моей валентинкой? 💖</h1>

        <div className="buttons-container">
          <button className="yes-button" onClick={handleYes}>
            💕 Да! 💕
          </button>

          <div
            className="no-button-zone"
            onMouseEnter={handleNoHover}
            onMouseOver={handleNoHover}
            onTouchStart={handleNoHover}
            style={{
              position: "absolute",
              left: `${noPosition.x}%`,
              top: `${noPosition.y}%`,
              transition: "all 0.2s ease",
            }}
          >
            <button ref={noButtonRef} className="no-button" onClick={handleNo}>
              Нет 🤡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
