import React, { useState } from "react";
import styled from "styled-components";
import Answers from "./Answers";

export default function SingleQuestion({ question, answer, index }) {
  const [state, setState] = useState("initial");

  const handlePlayClick = () => setState("question");
  const handleFlipClick = () => setState("answer");

  return (
    <QuestionCard $state={state}>
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
          <Answers /> {}
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
  background-color: ${(props) => (props.$state === "initial" ? "#FFFFFF" : "#FFFBDB")};
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Recursive", sans-serif;
  color: #333333;
  position: relative;

  button {
    background: none;
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
