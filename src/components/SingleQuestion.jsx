import React, { useState } from "react";
import styled from "styled-components";
import Answers from "./Answers";

export default function SingleQuestion({ question, answer, index, onAnswer }) {
  const [state, setState] = useState("initial");
  const [answerType, setAnswerType] = useState(null);

  const handlePlayClick = () => setState("question");
  const handleFlipClick = () => setState("answer");

  const handleAnswer = (type) => {
    setAnswerType(type);
    setState("answered");
    onAnswer(); // Increment the counter in App
  };

  return (
    <QuestionCard $state={state} $answerType={answerType}>
      {state === "initial" && (
        <>
          <p>Pergunta {index + 1}</p>
          <button onClick={handlePlayClick}>
            <img src="src/assets/seta_play.png" alt="Play Icon" />
          </button>
        </>
      )}
      {state === "question" && (
        <>
          <QuestionText>{question}</QuestionText>
          <button onClick={handleFlipClick}>
            <img src="src/assets/seta_virar.png" alt="Flip Icon" />
          </button>
        </>
      )}
      {state === "answer" && (
        <>
          <QuestionText>{answer}</QuestionText>
          <Answers onAnswer={handleAnswer} />
        </>
      )}
      {state === "answered" && (
        <AnsweredText $answerType={answerType}>
          Pergunta {index + 1}
          {answerType === "zap" && <img src="src/assets/icone_certo.png" alt="Zap Icon" />}
          {answerType === "quase" && <img src="src/assets/icone_quase.png" alt="Quase Icon" />}
          {answerType === "nao" && <img src="src/assets/icone_erro.png" alt="Erro Icon" />}
        </AnsweredText>
      )}
    </QuestionCard>
  );
}
const QuestionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 300px;
  padding: 20px;
  background-color: ${(props) =>
    props.$answerType === "error"
      ? "#FF3030"
      : props.$answerType === "partial"
      ? "#FF922E"
      : props.$answerType === "correct"
      ? "#2FBE34"
      : "#FFFFFF"};
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Recursive", sans-serif;
  color: #333333;
  position: relative;

  button {
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const QuestionText = styled.p`
  font-size: 16px;
  color: #333333;
  margin: 0;
`;

const AnsweredText = styled.p`
  color: ${(props) => {
    switch (props.$answerType) {
      case "zap":
        return "#2FBE34";
      case "quase":
        return "#FF922E";
      case "nao":
        return "#FF3030";
      default:
        return "#333333";
    }
  }};
  text-decoration: ${(props) => (props.$answerType ? "line-through" : "none")};
`;
