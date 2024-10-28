function Answer(props) {
  const { answer, handleIsCorrect } = props;
  return (
    <li
      onClick={(event) => handleIsCorrect(event.target.textContent)}
      className="answer"
      dangerouslySetInnerHTML={{ __html: answer }}
    />
  );
}

export default Answer;
