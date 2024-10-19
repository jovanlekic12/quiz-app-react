function Form(props) {
  const { handleSubmit, setAmount, setCategory, setDifficulty, amount } = props;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="title">Quiz setup</h1>
      <div className="input__container">
        <label htmlFor="numberOfQuestions">Number of questions:</label>
        <input
          type="number"
          className="questions__numbers"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>
      <div className="input__container">
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="27">Animals</option>
          <option value="20">Mythology</option>
        </select>
      </div>
      <div className="input__container">
        <label htmlFor="difficulty">Difficulty:</label>
        <select
          name="difficulty"
          onChange={(event) => setDifficulty(event.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button className="form__btn">Submit</button>
    </form>
  );
}

export default Form;
