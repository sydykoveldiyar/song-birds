import './styles/App.css';
import { useEffect, useState, useContext } from "react";
import Header from './components/Header';
import Question from './components/Question';
import AnswerList from './components/AnswerList';
import CurrentAnswer from './components/CurrentAnswer';
import EndGame from './components/EndGame';
import Next from './components/Next';
import birdsData from './birdsData'
import success from "./audios/ff.mp3";
import error from "./audios/error.mp3"

const sucessAudio = new Audio(success);
const errorAudio = new Audio(error);

function App() {
  const [step, setStep] = useState(1);
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState({});
  const [isRight, setIsRight] = useState(false);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);

  let currentAnswers = birdsData[step - 1];

  useEffect(() => {
    setCurrentQuestion();
  }, [step]);

  useEffect(() => {
    checkAnswer(answer);
  }, [answer])

  const setCurrentQuestion = () => {
    let random = getRandom(1, currentAnswers.length);
    setQuestion(currentAnswers.find(el => el.id === random));
  }

  const checkAnswer = () => {
    if (Object.keys(question).length !== 0) {
      if (question.id === answer.id) {
        setIsRight(true)
        setScore(score + (5 - mistakes));
        setMistakes(0);
        sucessAudio.play();
      }
      else {
        setIsRight(false);
        setMistakes(mistakes + 1);
        errorAudio.play();
      }
    }
  }

  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="container">
      <Header step={step} score={score} />
      { step < 6
        ?
        <>
          <Question question={question} isRight={isRight} />
          <div className="answer grid grid__col-6">
            <AnswerList answers={currentAnswers} setAnswer={setAnswer} isRight={isRight} question={question} answer={answer}/>
            <CurrentAnswer answer={answer} />
          </div>
        <Next currentStep={step} setStep={setStep} isRight={isRight} setIsRight={setIsRight} setAnswer={setAnswer} setStep={setStep} />
        </>
        : <EndGame score={score} setStep={setStep} setScore={setScore}/>
      }
    </div>
  );
}

export default App;
