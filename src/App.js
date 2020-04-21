import React, {useState} from 'react';
import PropTypes from 'prop-types';

const questions = [
  {
    content: "Vad ås det kan man hur?",
    answers: [ 	
      { text: "ja", correct: false },
      { text: "nej", correct: false  }, 
      { text: "kanske", correct: true } 
    ],
    extraInfo: "Det kan vara för att det har blivit en gång mer än när den."
  },
  {
    content: "Men om de kan hur va en så?",
    answers: [ 	
      { text: "Ibland", correct: false },
      { text: "Många", correct: false  }, 
      { text: "kanske", correct: true } 
    ],
    extraInfo: "Om den andra inte har då kommer aldrig vara som"
  },
]

Question.propTypes = {
  content: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.object  
  ).isRequired,
  extraInfo: PropTypes.string.isRequired,
};

function Question(props) {
  const [guess, setGuess] = useState(null);

  const answers = props.answers.map((answer, index) => 
    <li key={index} onClick={ () => { 
        console.log(`You guessed no. ${index}: ${answer.text}`); 
        setGuess(index); 
        document.getElementById(index).style.backgroundColor = answer.correct ? "green" : "red";
      }}>
      <span id={index}>{answer.text}</span>
    </li>
  );

  var extraInfo = <p></p>
  if (guess !== null) {
    extraInfo = <p>{props.extraInfo}</p>;
    
  }

  return(
    <div className="question-container">
      <h2><i>{props.content}</i></h2>

      <ul>
        {answers}
      </ul>
      {extraInfo}

    </div>
  );
}

function App() {

  const questionComponents = questions.map( (question) =>
    <Question content={question.content} answers={question.answers} extraInfo={question.extraInfo}/>
  );

	return (
		<div className="App">
      <h1>Ett quiz</h1>
      {questionComponents}
      <Question content={questions[0].content} answers={questions[0].answers} extraInfo={questions[0].extraInfo}/>
		</div>
	);
}

export default App;
