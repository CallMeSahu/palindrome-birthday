import "./styles.css";
import React, { useState } from "react";
import loading from "/src/loading.gif";

export default function App() {
  const [output, setOutput] = useState("");

  function userInputHandler(event) {
    var date = event.target.value;
    setOutput(
      <img
        style={{ width: "200px", margin: "1rem" }}
        src={loading}
        alt=""
      ></img>
    );
    setTimeout(() => {
      setOutput(date);
    }, 7000);
  }

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
        <input type="date" onChange={userInputHandler}></input>
        <div>{output}</div>
      </section>
    </div>
  );
}
