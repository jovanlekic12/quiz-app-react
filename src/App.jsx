import { useState } from "react";
import "./App.css";

function App() {
  const [error, setError] = useState();
  const url = "https://opentdb.com/api.php?";

  const categories = {
    Sports: 21,
    GeneralKnowledge: 9,
    VideoGames: 27,
    Mythology: 20,
  };

  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState(categories["GeneralKnowledge"]);
  const [difficulty, setDifficulty] = useState("easy");

  const fetchData = async () => {
    try {
      const response = await fetch(
        url + `amount=${amount}&category=${category}&difficulty=${difficulty}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError(error);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    fetchData();
  }

  return (
    <main className="main__container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">Quiz setup</h1>
        <div className="input__container">
          <label htmlFor="numberOfQuestions">Number of questions:</label>
          <input
            type="number"
            className="questions__numbers"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
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
