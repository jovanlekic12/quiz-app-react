import { useState } from "react";
import Form from "./form";
import Question from "./questions";
import "./App.css";

function App() {
  const url = "https://opentdb.com/api.php?";
  const [isFinished, setIsFinished] = useState(false);
  const [index, setIndex] = useState(0);
  const [isSubmited, setIsSubmited] = useState(false);
  const [error, setError] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState("mjau");
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
    handleActiveQuestion();
  }

  function Next() {
    // if (index === totalQuestions - 1) {
    //   setIsFinished(true);
    //   return;
    // } else {
    //   setIndex(index + 1);
    // }
  }

  function handleRestart() {
    setIsFinished(false);
    setIsSubmited(false);
    setCorrectAnswers(0);
  }

  function handleActiveQuestion(index) {
    const activeQuestion = questions[index];
    setActiveQuestion(activeQuestion);
    console.log(activeQuestion);
    console.log(questions);
  }

  return (
    <main className="main__container">
      {isSubmited ? (
        <Question
          question={activeQuestion}
          totalQuestions={totalQuestions}
          setIsSubmited={setIsSubmited}
          Next={Next}
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
