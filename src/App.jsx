import Bottom from "./components/Bottom";
import Questions from "./components/Questions";
import Top from "./components/Top";
import styled from "styled-components";

export default function App() {
  return (
    <AppContainer>
      <Top />
      <Questions />
      <Bottom />
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
