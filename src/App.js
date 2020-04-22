import React from 'react';
import Question from './Question.js';

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
