import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Question from "./Question";
import { backstoryQuestions } from "../data/backstoryQuestions";

export default function BackstoryQuestionaire({
  character,
  setBackstoryExists,
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    backstoryQuestions[currentQuestionIndex]
  );

  useEffect(() => {
    setCurrentQuestion(backstoryQuestions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  function handleClick(e) {
    e.preventDefault();
    currentQuestionIndex === backstoryQuestions.length - 1
      ? setBackstoryExists(true)
      : setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  return (
    <div>
      <h2>Backstory Questionaire for {character}</h2>
      <h4></h4>
      <form>
        <ul>
          <Question question={currentQuestion} index={currentQuestionIndex} />
          <button onClick={handleClick}>Submit</button>
        </ul>
      </form>
    </div>
  );
}
