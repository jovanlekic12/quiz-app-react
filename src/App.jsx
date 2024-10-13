import { useState } from "react";
import "./App.css";

function App() {
  const url = "https://opentdb.com/api.php?";
  const categories = {
    Sports: 21,
  };
  console.log(categories["Sports"]);
  return (
    <main className="main__container">
      <form action="" className="form">
        <h1 className="title">Quiz setup</h1>
        <div className="input__container">
          <label htmlFor="numberOfQuestions">Number of questions:</label>
          <input
            type="number"
            className="questions__numbers"
            defaultValue={10}
          />
        </div>
        <div className="input__container">
          <label htmlFor="category">Category:</label>
          <select name="category">
            <option value="9">General Knowledge</option>
            <option value="21">Sports</option>
            <option value="27">Animals</option>
            <option value="20">Mythology</option>
          </select>
        </div>
        <div className="input__container">
          <label htmlFor="difficulty">Difficulty:</label>
          <select name="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button className="form__btn">Submit</button>
      </form>
    </main>
  );
}

export default App;
