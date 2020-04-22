import React, {useState} from 'react';
import PropTypes from 'prop-types';

Question.propTypes = {
  content: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.object  
  ).isRequired,
  extraInfo: PropTypes.string.isRequired,
};

function Question(props) {
  const [guess, setGuess] = useState(null);

  const stylesList = props.answers.map( _ => '');
  const [answerStyles] = useState(stylesList);

  const answers = props.answers.map((answer, index) => 
    <li key={index} onClick={ () => { 
        console.log(`You guessed no. ${index}: ${answer.text}`); 
        setGuess(index); 
        answerStyles[index] = answer.correct ? 'green' : 'red';
      }}>
      <span id={index} style={{backgroundColor: answerStyles[index]}}>{answer.text}</span>
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

export default Question;
