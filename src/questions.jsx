import { useState } from "react";

function Question(props) {
  const [index, setIndex] = useState(0);
  const { question, incorrect_answers, correct_answer } = props[index];
  return (
    <article className="question__container">
      <p>mjau</p>
      <h1>{question}</h1>
      <ul className="answers__list">
        <li className="answer">{correct_answer}</li>
      </ul>
    </article>
  );
}
export default Question;
