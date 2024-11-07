import React from "react";
import SingleQuestion from "./SingleQuestion";

const cards = [
  { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
  { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
  { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
  { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
];

export default function Questions() {
  return (
    <div>
      {cards.map((card, index) => (
        <SingleQuestion key={index} question={card.question} answer={card.answer} index={index} />
      ))}
    </div>
  );
}
