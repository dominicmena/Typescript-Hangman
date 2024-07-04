import React from "react";

const word = "test";
const guessedLetters = ["e", "t"];

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
}

function HangmanWord({guessedLetters, wordToGuess}: HangmanWordProps) {
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
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }}>
          <span
          key={index}
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
