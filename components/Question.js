import styles from "../styles/Home.module.css";

export default function Question({ question, index }) {
  return (
    <div>
      <li key={index}>
        <label htmlFor={`Question ${index}`}>{question.question}</label>
        {question.choices.map((answer, index) => (
          <li key={index}>
            <input
              type="checkbox"
              id={`Answer ${index}`}
              name={`Answer ${index}`}
              value={answer}
            />
            <label htmlFor={`Answer ${index}`}>{answer}</label>
          </li>
        ))}
        <li>
          <input
            type="checkbox"
            id="Own choice"
            name="Own choice"
            value="Own choice"
          />
          <label htmlFor="Own choice">Own Choice</label>
        </li>
      </li>
    </div>
  );
}
