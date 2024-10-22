function Answer(props) {
  const { answer } = props;
  return <li className="answer" dangerouslySetInnerHTML={{ __html: answer }} />;
}

export default Answer;
