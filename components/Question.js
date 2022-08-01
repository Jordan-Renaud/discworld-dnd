import styles from "../styles/components/Question.module.css";

export default function Question({
  question,
  index,
  answers,
  setAnswers,
  ownChoice,
  setOwnChoice,
}) {
  const isDisabled = (answer) =>
    !answers.includes(answer) &&
    answers.length === question.choiceAmountRequired;
  function handleChoiceSelection({ target }) {
    if (target.checked && answers.length >= question.choiceAmountRequired) {
      return;
    }
    setAnswers(target.value);
  }

  return (
    <section>
      <label htmlFor={`Question ${index}`}>{question.question}</label>
      <ul>
        {question.choices.map((answer, index) => (
          <li key={answer}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id={`Answer ${index}`}
              name={`Answer ${index}`}
              value={answer}
              checked={answers.includes(answer)}
              onChange={handleChoiceSelection}
              disabled={isDisabled(answer)}
            />
            <label className={styles.label} htmlFor={`Answer ${index}`}>
              {answer}
            </label>
          </li>
        ))}
        <li>
          <input
            checked={answers.includes("Own choice")}
            type="checkbox"
            id="Own choice"
            name="Own choice"
            value="Own choice"
            onChange={handleChoiceSelection}
            disabled={isDisabled("Own choice")}
          />
          <input
            type="text"
            onChange={(e) => setOwnChoice(e.target.value)}
            value={ownChoice}
            disabled={isDisabled("Own choice")}
          />
        </li>
      </ul>
    </section>
  );
}
