import styled from "styled-components";

export default function Bottom({ completedCount, total }) {
  return (
    <Footer>
      {completedCount}/{total} CONCLUÍDOS
    </Footer>
  );
}

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 15px 0;
  background-color: #ffffff;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  border-top: 1px solid #ddd;
  font-family: "Recursive", sans-serif;
  box-sizing: border-box;
`;
