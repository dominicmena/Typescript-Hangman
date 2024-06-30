import React from "react";

const word = 'test'

function HangmanWord() {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >{word.split("").map((letter, index) => (
        <span key={index}>{letter}</span>
    ))}</div>
  );
}

export default HangmanWord;
