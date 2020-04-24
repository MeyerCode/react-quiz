import React from 'react';
import Question from './Question.js';
import './App.css';
import { Container, Row } from 'react-bootstrap';

const questions = [
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

	return (
		<div className="App">
      <h1>Quiz 1</h1>

      <Container>
        <Row>
          <div id="strandaeng-media">
          </div>
        </Row>
      </Container>
      <Question content={questions[0].content} answers={questions[0].answers} extraInfo={questions[0].extraInfo} className="question-card" />

      <Container>
        <Row>
          <div id="">
          </div>
        </Row>
      </Container>
		</div>
	);
}

export default App;
