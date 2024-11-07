import styled from "styled-components";

export default function Top() {
  return (
    <Topo>
      <img src="src\assets\logo.png" alt="Logo" />
      <h1>ZapRecall</h1>
    </Topo>
  );
}

const Topo = styled.div`
  margin-top: 40px;

  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;

  img {
    height: 60px;
    width: 52px;
  }

  h1 {
    font-weight: 400;
    font-size: 36px;
    color: #ffffff;
    font-family: "Recursive", sans-serif;
  }
`;
