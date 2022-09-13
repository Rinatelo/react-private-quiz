import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'Я люблю ... ?',
    variants: ['Путешествовать', 'Шашлыки', 'Зульфию Абзалутдинову'],
    correct: 2,
  },
  {
    title: 'Главное в жизни ... ',
    variants: ['деньги', 'семья, работа, развитие', 'развлечения'],
    correct: 1,
  },
  {
    title: 'Я тебя люблю, потому что...',
    variants: [
      'Ты очень красивая',
      'Что бы ты не говорила, но ты очень заботливая',
      'Любят не за что-то, а вопреки',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/677/677684.png" alt='' />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>
      <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);


  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;