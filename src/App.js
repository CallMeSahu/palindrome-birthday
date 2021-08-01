import "./styles.css";
import React, { useState } from "react";
import loading from "/src/loading.gif";

export default function App() {
  const [output, setOutput] = useState("");

  function isPalindrome(dateString) {
    var dateStringReverse = "";
    for (var i = dateString.length - 1; i >= 0; i--) {
      dateStringReverse += dateString[i];
    }
    if (dateStringReverse === dateString) {
      return true;
    } else {
      return false;
    }
  }

  function checkCombi(dd, mm, yyyy) {
    var type1 = dd + mm + yyyy;
    var type2 = mm + dd + yyyy;
    var type3 = mm + dd + yyyy.slice(-2);

    if (isPalindrome(type1) || isPalindrome(type2) || isPalindrome(type3)) {
      return true;
    } else {
      return false;
    }
  }

  function getNextDate(date, month, year) {}

  function findResult(date) {
    var arr = date.split("-");
    var inputYear = arr[0];
    var inputMonth = arr[1];
    var inputDate = arr[2];

    var flag = checkCombi(inputDate, inputMonth, inputYear);

    if (flag === true) {
      setOutput("Your birthday is a Palindrome 🙌🎉");
    } else {
      var [nextDate, days] = getNextDate(inputDate, inputMonth, inputYear);
      var falseOutput = "Your bithday is not a Palindrome 🥺👉👈";
      setOutput(falseOutput);
    }
  }

  function userInputHandler(event) {
    var date = event.target.value;
    setOutput(<img style={{ width: "200px" }} src={loading} alt=""></img>);
    setTimeout(() => {
      findResult(date);
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
        <p>
          This app will check your birthday in MM/DD/YYYY, DD/MM/YYYY and
          MM/DD/YY formats.
        </p>
        <p>It will also find out, by how many days you missed!</p>
      </section>
      <section className="working-section">
        <h3>Enter Your Birthday</h3>
        <input type="date" onChange={userInputHandler}></input>
        <div style={{ padding: "1rem", fontWeight: "bold" }}>{output}</div>
      </section>
    </div>
  );
}
