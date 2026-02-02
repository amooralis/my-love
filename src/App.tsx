import { useState, useRef } from "react";
import "./App.css";

const predefinedPositions = [
  { x: 25, y: 30 },
  { x: 60, y: 20 },
  { x: 15, y: 65 },
  { x: 65, y: 70 },
  { x: 40, y: 15 },
  { x: 70, y: 45 },
  { x: 25, y: 45 },
  { x: 45, y: 75 },
  { x: 30, y: 10 },
  { x: 55, y: 55 },
  { x: 35, y: 60 },
  { x: 60, y: 30 },
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
    setAnsweredNo(true);
  };

  const handleBack = () => {
    setIsBackClicked(true);
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
          <button className="back-button" onClick={handleBack}>
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
          </button>)}
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
