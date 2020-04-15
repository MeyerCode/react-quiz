import React, {useState, useEffect} from 'react';
var questions = {
	question: "Vad ås det kan man hur?",
	answers: [ 	
		{ text: "ja", correct: false },
		{ text: "nej", correct: false  }, 
		{ text: "kanske", correct: true } ]
}


function App() {

	const [question, setQuestion] = useState(null);
	useEffect(() => {
		setQuestion(
			<div>
				<h2> {questions.question} </h2>

				<ul>
				{console.log(questions.answers)}
				{questions.answers.map((a) =>
					<li> {a.text} </li>
				)}

				</ul>
			</div>
		);
	},[]);

	return (
		<div className="App">
		<h1>ADAM AND EVE's thingamabob</h1>
		<div className="question">
		{question}
		</div>
		</div>
	);
}

export default App;
