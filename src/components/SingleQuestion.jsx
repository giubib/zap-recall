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
    if (onAnswer) onAnswer(type);
  };

  const renderIcon = () => {
    switch (answerType) {
      case "Não Lembrei":
        return <Icon src="src/assets/icone_erro.png" alt="Error Icon" />;
      case "Quase não Lembrei":
        return <Icon src="src/assets/icone_quase.png" alt="Almost Icon" />;
      case "Zap!":
        return <Icon src="src/assets/icone_certo.png" alt="Correct Icon" />;
      default:
        return null;
    }
  };

  return (
    <QuestionCard $state={state} $answerType={answerType}>
      {state === "initial" && (
        <>
          <QuestionText $answered={answerType}>Pergunta {index + 1}</QuestionText>
          <QuestionButton onClick={handlePlayClick}>
            <img src="src/assets/seta_play.png" alt="Play Icon" />
          </QuestionButton>
        </>
      )}

      {state === "question" && (
        <>
          <QuestionText>{question}</QuestionText>
          <QuestionButton onClick={handleFlipClick}>
            <img src="src/assets/seta_virar.png" alt="Flip Icon" />
          </QuestionButton>
        </>
      )}

      {state === "answer" && (
        <>
          <QuestionText>{answer}</QuestionText>
          <Answers onAnswer={handleAnswer} />
        </>
      )}

      {state === "answered" && (
        <>
          <QuestionText $answered={answerType}>Pergunta {index + 1}</QuestionText>
          {renderIcon()}
        </>
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
  position: relative;
  background-color: ${(props) => (props.$state === "initial" ? "#FFFFFF" : "#FFFBDB")};
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Recursive", sans-serif;
  color: #333333;
`;

const QuestionButton = styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1;
`;

const QuestionText = styled.p`
  font-size: 16px;
  color: #333333;
  margin: 0;
  text-decoration: ${(props) => (props.$answered ? "line-through" : "none")};
  color: ${(props) =>
    props.$answered === "Não Lembrei"
      ? "#FF3030"
      : props.$answered === "Quase não Lembrei"
      ? "#FF922E"
      : props.$answered === "Zap!"
      ? "#2FBE34"
      : "#333333"};
`;

const Icon = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  z-index: 2;
`;
