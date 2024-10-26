import { useState } from "react";
import Answer from "./answer";
import Modal from "./modal";
function Question(props) {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const {
    totalQuestions,
    setIsSubmited,
    question,
    incorrect_answers,
    correct_answer,
    Next,
  } = props;

  // return isFinished ? (
  //   <Modal
  //     correctAnswers={correctAnswers}
  //     totalQuestions={totalQuestions}
  //     handleRestart={handleRestart}
  //   />
  // ) : (
  return (
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
          onClick={(() => setCorrectAnswers(correctAnswers + 1), Next())}
        />
        {incorrect_answers.map((answer) => {
          return (
            incorrect_answers && (
              <Answer
                {...answer}
                answer={answer}
                dangerouslySetInnerHTML={{ __html: answer }}
                key={self.crypto.randomUUID()}
                Next={Next}
              />
            )
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
