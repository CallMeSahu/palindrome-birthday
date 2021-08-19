import "./styles.css";
import React, { useState } from "react";
import loading from "/src/loading.gif";

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var date = 0;

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

    if (isPalindrome(type1)) {
      return `${dd}-${mm}-${yyyy}`;
    } else if (isPalindrome(type2)) {
      return `${mm}-${dd}-${yyyy}`;
    } else if (isPalindrome(type3)) {
      return `${mm}-${dd}-${yyyy.slice(-2)}`;
    } else {
      return null;
    }
  }

  function getNearestDate(date, month, year) {
    var dd1 = Number(date);
    var mm1 = Number(month);
    var yy1 = Number(year);
    var dd2 = Number(date);
    var mm2 = Number(month);
    var yy2 = Number(year);

    for (var i = 1; i > 0; i++) {
      dd1++;
      if (dd1 > Number(daysInMonth[mm1 - 1])) {
        dd1 = 1;
        mm1++;
        if (mm1 > 12) {
          mm1 = 1;
          yy1++;
        }
      }

      var ddString = dd1.toString();
      var mmString = mm1.toString();
      var yyString = yy1.toString();

      if (ddString.length === 1) {
        ddString = "0" + ddString;
      }
      if (mmString.length === 1) {
        mmString = "0" + mmString;
      }

      var nextCorrectCombi = checkCombi(ddString, mmString, yyString);
      if (nextCorrectCombi) {
        return [`${nextCorrectCombi}`, i];
      }

      if (yy2 > 1) {
        dd2--;
        if (dd2 < 1) {
          mm2--;
          if (mm2 < 1) {
            mm2 = 12;
            yy2--;
            if (yy2 < 1) {
              break;
            }
            dd2 = daysInMonth[mm2 - 1];
          }
        }
        var yy2String = yy2.toString();
        var mm2String = mm2.toString();
        var dd2String = dd2.toString();
        if (dd2String.length === 1) {
          dd2String = "0" + dd2String;
        }
        if (mm2String.length === 1) {
          mm2String = "0" + mm2String;
        }
        var prevCorrectCombi = checkCombi(dd2String, mm2String, yy2String);
        if (prevCorrectCombi) {
          return [`${prevCorrectCombi}`, i];
        }
      }
    }
  }

  function findResult(date) {
    var arr = date.split("-");
    var inputYear = arr[0];
    var inputMonth = arr[1];
    var inputDate = arr[2];

    var correctCombi = checkCombi(inputDate, inputMonth, inputYear);

    if (correctCombi) {
      setOutput(`Your birthday is a Palindrome in ${correctCombi} format!🙌🎉`);
    } else {
      var [nearestDate, daysGap] = getNearestDate(
        inputDate,
        inputMonth,
        inputYear
      );
      var falseOutput = `Your birthday is not a Palindrome. Nearest Palindrome date to your birthday was ${nearestDate} and you missed it by ${daysGap} days.🥺👉👈`;
      setOutput(falseOutput);
    }
  }

  function userInputHandler(event) {
    setOutput(<img style={{ width: "250px" }} src={loading} alt=""></img>);
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
        <input
          type="date"
          onChange={(event) => {
            date = event.target.value;
          }}
        ></input>
        <div>
          <button className="button" onClick={userInputHandler}>
            Check
          </button>
        </div>
        <div className="output-area" style={{}}>
          {output}
        </div>
      </section>
    </div>
  );
}
