import "./styles.css";
import { useState } from "react";
import Footer from "./footer";

export default function App() {
  const [message, setMessage] = useState("");

  function outputMsg(first, second) {
    if (first % second === 0) {
      setMessage("Congrats! Your B'Day is Lucky!🙌🎉");
    } else {
      setMessage("Your B'Day is not so Lucky😶.. You make your own LUCK!🤩");
    }
  }

  function luckCalculation(num, secnum) {
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
      sum = sum + Number(num.charAt(i));
    }
    if (sum && secnum) {
      outputMsg(sum, secnum);
    } else {
      setMessage("Both the above fields are required😐");
    }
  }

  function clickEventHandler() {
    var dob = dateOfBirth.value.replaceAll("-", "");
    var luckyNum = Number(luckyNumber.value);

    luckCalculation(dob, luckyNum);
  }

  return (
    <div className="App">
      <h1 id="title">
        <span role="img" aria-label="smiley">
          🥳
        </span>
        Is Your Birthday Lucky?
        <span role="img" aria-label="balloon">
          🎈
        </span>
      </h1>
      <label htmlFor="dateOfBirth">Date Of Birth: </label>
      <input id="dateOfBirth" type="date"></input>
      <label htmlFor="luckyNumber">Lucky Number: </label>
      <input id="luckyNumber" type="number"></input>
      <button id="checkBtn" onClick={() => clickEventHandler()}>
        Check
      </button>
      <p id="outputMsg"> {message} </p>
      <Footer />
    </div>
  );
}
