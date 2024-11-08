import React from "react";
import styled from "styled-components";

export default function Answers({ onAnswer }) {
  return (
    <ButtonContainer>
      <ActionButton color="#FF3030" onClick={() => onAnswer("nao")}>
        Não Lembrei
      </ActionButton>
      <ActionButton color="#FF922E" onClick={() => onAnswer("quase")}>
        Quase não Lembrei
      </ActionButton>
      <ActionButton color="#2FBE34" onClick={() => onAnswer("zap")}>
        Zap!
      </ActionButton>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  background-color: ${(props) => props.color};
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  flex-grow: 1;
  margin: 0 5px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
