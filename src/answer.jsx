function Answer(props) {
  const { answer, Next } = props;
  return (
    <li
      onClick={Next}
      className="answer"
      dangerouslySetInnerHTML={{ __html: answer }}
    />
  );
}

export default Answer;
