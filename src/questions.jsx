import { useState } from "react";

function Question(props) {
  const [index, setIndex] = useState(0);
  const { question, incorrect_answers, correct_answer, questions, amount } =
    props[index];
  function Next() {
    if (index === amount) {
      console.log("mjau");
      return;
    } else setIndex(index + 1);
  }
  return (
    <article className="question__container">
      <p>mjau</p>
      <h1>{question}</h1>
      <ul className="answers__list">
        <li className="answer">{correct_answer}</li>
        <li>{incorrect_answers}</li>
      </ul>
      <button className="next__btn" onClick={Next}>
        Next question
      </button>
    </article>
  );
}
export default Question;
