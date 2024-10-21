import { useState } from "react";

function Question(props) {
  const [index, setIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const { totalQuestions } = props;
  const { question, incorrect_answers, correct_answer } = props[index];
  function Next() {
    if (index === totalQuestions - 1) {
      setIsFinished(!isFinished);
      return;
    } else {
      setIndex(index + 1);
      console.log(index);
    }
  }
  //pogledaj dangerouslySetInnerHtml
  return isFinished ? (
    <article className="modal">
      <p>Game over!</p>
      <p>
        You answered {correctAnswers}/{totalQuestions} questions correctly
      </p>
    </article>
  ) : (
    <article className="question__container">
      <h1 dangerouslySetInnerHTML={{ __html: question }} />
      <ul className="answers__list">
        <li dangerouslySetInnerHTML={{ __html: correct_answer }} />
        <li dangerouslySetInnerHTML={{ __html: incorrect_answers }} />
      </ul>
      <button className="next__btn" onClick={Next}>
        Next question
      </button>
    </article>
  );
}
export default Question;
