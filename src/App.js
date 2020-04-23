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
  {
    content: "Vad krävs för att slåtterblomma ska kunna växa på en strandäng?",
    answers: [ 	
      { text: "Att större gräs och buskar har börjat växa på ängen.", correct: false },
      { text: "Det krävs inte något särskilt, slåtterblomma trivs på alla ängar.", correct: false  }, 
      { text: "Att bete eller slåtter har ägt rum på platsen.", correct: true } 
    ],
    extraInfo: "Bete och slåtter är två sorters störningar på området som är gynnande för slåtterblomman. Bete är helt enkelt djur som betar och slåtter är när man skördar gräs och örter för höproduktion. Genom att gräs och örter tas bort blir inte slåtterblomman utkonkurrerad."
  },
]

function App() {

  const questionComponents = questions.map( (question) =>
    <div className="question-card">
      <div className="media-container">
      </div>
      <Question content={question.content} answers={question.answers} extraInfo={question.extraInfo}/>
    </div>
  );

	return (
		<div className="App">
      <h1>Ett quiz</h1>
      {questionComponents}
		</div>
	);
}

export default App;
