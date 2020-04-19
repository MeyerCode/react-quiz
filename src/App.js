import React, {useState} from 'react';
import PropTypes from 'prop-types';

const questions = [
  {
    content: "Vad ås det kan man hur?",
    answers: [ 	
      { text: "ja", correct: false },
      { text: "nej", correct: false  }, 
      { text: "kanske", correct: true } 
    ]
  },
]

Question.propTypes = {
  content: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.object  
  )
};

function Question(props) {
  const [guess, setGuess] = useState(null);

  const answers = props.answers.map((answer, index) => 
    <li key={index} onClick={ () => { 
        console.log(`You guessed no. ${index}: ${answer.text}`); 
        setGuess(index); 
      }}>
      <span>{answer.text}</span>
    </li>
  );

  return(
    <div className="question-container">
      <h2><i>{props.content}</i></h2>

      <ul>
        {answers}
      </ul>

    </div>
  );
}

function App() {

	return (
		<div className="App">
      <h1>Ett quiz</h1>
      <Question content={questions[0].content} answers={questions[0].answers}/>
		</div>
	);
}

export default App;
