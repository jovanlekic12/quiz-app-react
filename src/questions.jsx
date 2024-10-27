import { useEffect, useState } from "react";
import Answer from "./answer";
import Modal from "./modal";
function Question(props) {
  const {
    correctAnswers,
    setCorrectAnswers,
    totalQuestions,
    setIsSubmited,
    question: { incorrect_answers, correct_answer, question },
    Next,
    isFinished,
    handleRestart,
  } = props;
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * (incorrect_answers + 1));
    const newAnswers = [...incorrect_answers];
    newAnswers.splice(randomIndex, 0, correct_answer);
    setAnswers(newAnswers);
  }, [question]);

  return isFinished ? (
    <Modal
      correctAnswers={correctAnswers}
      totalQuestions={totalQuestions}
      handleRestart={handleRestart}
    />
  ) : (
    <article className="question__container">
      <p className="correct__answers__counter">
        Correct answers {correctAnswers}/{totalQuestions}
      </p>
      <h1
        className="question__title"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <ul className="answers__list">
        <li
          className="answer"
          dangerouslySetInnerHTML={{ __html: correct_answer }}
          onClick={() => setCorrectAnswers(correctAnswers + 1)}
        />
        {answers.map((answer) => {
          return (
            <Answer
              answer={answer}
              dangerouslySetInnerHTML={{ __html: answer }}
              key={self.crypto.randomUUID()}
              Next={Next}
            />
          );
        })}
      </ul>
      <button className="next__btn" onClick={Next}>
        Next question
      </button>
    </article>
  );
  // );
}
export default Question;
