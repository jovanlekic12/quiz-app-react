import { useEffect, useState } from "react";
import Answer from "./answer";
import Modal from "./modal";
function Question(props) {
  const {
    correctAnswers,
    setCorrectAnswers,
    totalQuestions,
    question: { incorrect_answers, correct_answer, question },
    Next,
    isFinished,
    handleRestart,
    number,
  } = props;

  const answers = handleRandomAnswer();

  function handleIsCorrect(answer) {
    if (answer === correct_answer) {
      setCorrectAnswers(correctAnswers + 1);
      Next();
    } else Next();
  }

  function handleRandomAnswer() {
    const randomIndex = Math.floor(
      Math.random() * (incorrect_answers.length + 1)
    );
    const newAnswers = [...incorrect_answers];
    newAnswers.splice(randomIndex, 0, correct_answer);
    return newAnswers;
  }

  return isFinished ? (
    <Modal
      correctAnswers={correctAnswers}
      totalQuestions={totalQuestions}
      handleRestart={handleRestart}
    />
  ) : (
    <article className="question__container">
      <h1 className="question__title">{number}.</h1>
      <h1
        className="question__title"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <ul className="answers__list">
        {answers.map((answer) => {
          return (
            <Answer
              answer={answer}
              dangerouslySetInnerHTML={{ __html: answer }}
              key={self.crypto.randomUUID()}
              Next={Next}
              handleIsCorrect={handleIsCorrect}
            />
          );
        })}
      </ul>
      <p className="correct__answers__counter">
        Correct answers {correctAnswers}/{totalQuestions}
      </p>
      <button className="next__btn" onClick={Next}>
        Next question
      </button>
    </article>
  );
}
export default Question;
