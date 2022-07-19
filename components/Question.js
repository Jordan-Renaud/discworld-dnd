import { useState } from "react";
import styles from "../styles/components/Question.module.css";

export default function Question({ question, index, answers, setAnswers }) {
  const [isOwnChoiceSelected, setIsOwnChoiceSelected] = useState(false);
  const [ownChoice, setOwnChoice] = useState("");

  function handleChoiceSelection({ target }) {
    if (target.checked && answers.length >= question.choiceAmountRequired) {
      return;
    }
    setAnswers(target.value);
  }

  function updateOwnChoice(e) {
    e.preventDefault();
    setOwnChoice(e.target.value);
  }

  return (
    <section>
      <label htmlFor={`Question ${index}`}>{question.question}</label>
      <ul>
        {question.choices.map((answer, index) => (
          <li key={index}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id={`Answer ${index}`}
              name={`Answer ${index}`}
              value={answer}
              checked={answers.includes(answer)}
              onChange={handleChoiceSelection}
              disabled={
                !answers.includes(answer) &&
                answers.length === question.choiceAmountRequired
              }
            />
            <label className={styles.label} htmlFor={`Answer ${index}`}>
              {answer}
            </label>
          </li>
        ))}
        <li
          onClick={() =>
            isOwnChoiceSelected
              ? setIsOwnChoiceSelected(false)
              : setIsOwnChoiceSelected(true)
          }
        >
          <input
            checked={isOwnChoiceSelected}
            type="checkbox"
            id="Own choice"
            name="Own choice"
          />
          <input type="text" onChange={updateOwnChoice} value={ownChoice} />
        </li>
      </ul>
    </section>
  );
}
