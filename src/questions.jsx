import { useState } from "react";
import Answer from "./answer";
import Modal from "./modal";
function Question(props) {
  const [index, setIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const { totalQuestions, setIsSubmited, questions } = props;
  const { question, incorrect_answers, correct_answer } = questions[index];
  function Next() {
    if (index === totalQuestions - 1) {
      // setIsFinished(true);
      console.log(index);
      console.log(totalQuestions);
      return;
    } else {
      setIndex(index + 1);
    }
  }
  console.log(questions);
  console.log(question);
  function handleRestart() {
    setIsFinished(false);
    setIsSubmited(false);
    setCorrectAnswers(0);
  }

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
