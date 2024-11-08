import React from "react";
import SingleQuestion from "./SingleQuestion";

export default function Questions({ onAnswer }) {
  const questions = [
    { question: "What is React?", answer: "A JavaScript library for building user interfaces" },
    { question: "What is a component?", answer: "An independent piece of UI in a React application" },
    { question: "What is JSX?", answer: "A syntax extension for JavaScript that looks like HTML" },
    { question: "What is a hook?", answer: "A special function that lets you use React features" },
  ];

  return (
    <div>
      {questions.map((q, index) => (
        <SingleQuestion key={index} question={q.question} answer={q.answer} index={index} onAnswer={onAnswer} />
      ))}
    </div>
  );
}
