import React, { useState } from "react";
import styled from "styled-components";
import Top from "./components/Top";
import Questions from "./components/Questions";
import Bottom from "./components/Bottom";

export default function App() {
  const [completedCount, setCompletedCount] = useState(0);

  const incrementCount = () => setCompletedCount((prev) => prev + 1);

  return (
    <AppContainer>
      <Top />
      <Questions onAnswer={incrementCount} />
      <Bottom completedCount={completedCount} total={4} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: rgba(251, 107, 107, 1);
  padding-bottom: 60px;
  box-sizing: border-box;
`;
