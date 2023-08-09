import React from "react";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";

import "./App.css";
import { getQuestions } from "./utils/questions";

class App extends React.Component {
  state = {
    questions: [],
    currentQuestionIndex: 0,
    isQuizStarted: false,
    isQuizFinished: false,
    isCorrect: false,
    questionsCorrect: 0,
  };

  componentDidMount() {
    const questions = getQuestions();
    this.setState({ questions });
  }

  startQuizHandler = () => {
    this.setState({ isQuizStarted: true });
  };

  answerHandler = (answer) => {
    const { questions, currentQuestionIndex } = this.state;
    const isCorrect = answer === questions[currentQuestionIndex].answer;
    const questionsCorrect = isCorrect ? this.state.questionsCorrect + 1 : this.state.questionsCorrect;
    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      this.setState({
        isCorrect,
        questionsCorrect,
        currentQuestionIndex: nextQuestionIndex,
      });
    } else {
      this.setState({
        isQuizFinished: true,
        isCorrect,
        questionsCorrect,
      });
    }
  };

  resetQuizHandler = () => {
    this.setState({
      currentQuestionIndex: 0,
      isQuizStarted: false,
      isQuizFinished: false,
      isCorrect: false,
      questionsCorrect: 0,
    });
  };

  render() {
    const { questions, currentQuestionIndex, isQuizStarted, isQuizFinished, isCorrect, questionsCorrect } = this.state;

    if (!questions.length) {
      return <h2>Loading...</h2>;
    }

    if (!isQuizStarted) {
      return (
        <div className="App">
          <h1>Quizz App</h1>
          <Button onClick={this.startQuizHandler}>Start Quiz</Button>
        </div>
      );
    }

    if (isQuizFinished) {
      return (
        <QuizSummary
          questionsCorrect={questionsCorrect}
          totalQuestions={questions.length}
          resetQuizHandler={this.resetQuizHandler}
        />
      );
    }

    const { question, options } = questions[currentQuestionIndex];

    return (
      <div className="App">
        <Question
          questionNumber={currentQuestionIndex + 1}
          question={question}
        />
        <Card>
          {Object.keys(options).map((option) => (
            <Button key={option} onClick={() => this.answerHandler(option)}>
              {options[option]}
            </Button>
          ))}
        </Card>
        {isCorrect && <Banner type="correct" />}
        {!isCorrect && <Banner type="incorrect" />}
      </div>
    );
  }
}

export default App;
