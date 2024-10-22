function Modal(props) {
  const { correctAnswers, totalQuestions, handleRestart } = props;
  return (
    <article className="modal">
      <p>Game over!</p>
      <p>
        You answered {correctAnswers}/{totalQuestions} questions correctly
      </p>
      <button className="restart__btn" onClick={handleRestart}>
        Restart
      </button>
    </article>
  );
}

export default Modal;
