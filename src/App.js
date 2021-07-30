import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <section className="about-section">
        <h2>Palindrome Birthday</h2>
        <p>
          A palindrome is a word, number, phrase, or other sequence of
          characters which reads the same backward as forward.
        </p>
        <p>
          This app will take your birthday as an input and check whether it is a
          palindrome or not.
        </p>
        <p>It will also find out, by how many days you missed!</p>
      </section>
      <section className="working-section">
        <h3>Enter Your Birthday</h3>
        <input type="date"></input>
      </section>
    </div>
  );
}
