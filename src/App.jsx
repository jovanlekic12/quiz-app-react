import { useState } from "react";
import Form from "./form";
import Question from "./questions";
import "./App.css";

function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [error, setError] = useState();
  const url = "https://opentdb.com/api.php?";
  const [questions, setQuestions] = useState([]);
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState("easy");
  let totalQuestions = questions.length;
  const fetchData = async () => {
    try {
      const response = await fetch(
        url + `amount=${amount}&category=${category}&difficulty=${difficulty}`
      );
      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      setError(error);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    await fetchData();
    setIsSubmited(!isSubmited);
  }
  if (questions.length === 0 && isSubmited) return <h1>loading...</h1>;
  return (
    <main className="main__container">
      {isSubmited ? (
        <Question
          {...questions}
          totalQuestions={totalQuestions}
          setIsSubmited={setIsSubmited}
        />
      ) : (
        <Form
          handleSubmit={handleSubmit}
          amount={amount}
          setAmount={setAmount}
          setCategory={setCategory}
          setDifficulty={setDifficulty}
          questions={questions}
        />
      )}
    </main>
  );
}

export default App;
