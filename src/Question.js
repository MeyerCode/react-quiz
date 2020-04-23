import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { RadioButtonUnchecked, CheckCircleOutline, HighlightOff } from '@material-ui/icons';
import { Card, Button } from 'react-bootstrap';

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
  const [iconsStateList] = useState(props.answers.map( _ => <RadioButtonUnchecked /> ));

  const answers = props.answers.map((answer, index) => 
    <div className="answer-container" onClick={ () => { 
        console.log(`You guessed no. ${index}: ${answer.text}`); 
        setGuess(index); 
        answerStyles[index] = answer.correct ? 'green' : 'red';
        iconsStateList[index] = answer.correct 
          ? <CheckCircleOutline /> 
          : <HighlightOff />;
      }}>
      {iconsStateList[index]} 
      <span id={index} style={{color: answerStyles[index]}}>{answer.text}</span>
    </div>
  );

  var extraInfo = <p></p>
  if (guess !== null) {
    extraInfo = <p>{props.extraInfo}</p>;
  }

  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.content}</Card.Title>
        <Card.Text>
          {answers}
          {extraInfo}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Question;
