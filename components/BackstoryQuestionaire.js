import styles from "../styles/Home.module.css";
import { backstoryQuestions } from "../data/backstoryQuestions";

export default function BackstoryQuestionaire({ character }) {
  return (
    <div>
      <h2>BackstoryQuestionaire</h2>
      <form>
        <ul>
          {backstoryQuestions.map((question, index) => (
            <li key={index}>
              <label htmlFor={`Question ${index}`}>{question.question}</label>
              <br />

              <input
                type="text"
                id={`Question ${index}`}
                name={`Question ${index}`}
              />
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
