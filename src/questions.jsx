import { useState } from "react";
import Answer from "./answer";

function Question(props) {
  const [index, setIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const { totalQuestions, setIsSubmited } = props;
  const { question, incorrect_answers, correct_answer } = props[index];
  function Next() {
    if (index === totalQuestions - 1) {
      setIsFinished(true);
      return;
    } else {
      setIndex(index + 1);
    }
  }

  function handleRestart() {
    setIsFinished(false);
    setIsSubmited(false);
    setCorrectAnswers(0);
  }

  return isFinished ? (
    <article className="modal">
      <p>Game over!</p>
      <p>
        You answered {correctAnswers}/{totalQuestions} questions correctly
      </p>
      <button className="restart__btn" onClick={handleRestart}>
        Restart
      </button>
    </article>
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
}
export default Question;
