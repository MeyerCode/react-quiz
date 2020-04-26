import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RadioButtonUnchecked, CheckCircleOutline, HighlightOff } from '@material-ui/icons';
import { Card, Container, Row, Col } from 'react-bootstrap';

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
    <Container>
    <div className="answer-container " onClick={ () => { 
        console.log(`You guessed no. ${index}: ${answer.text}`); 
        setGuess(index); 
        answerStyles[index] = answer.correct ? 'green' : 'red';
        iconsStateList[index] = answer.correct 
          ? <CheckCircleOutline /> 
          : <HighlightOff />;
      }}>
      <Row xs={2} sm={2}>
        <Col xs={{ span: 1, offset: 1}} sm={{ span: 1, offset: 1}} md={{ span: 1, offset: 1}}>
          {iconsStateList[index]} 
        </Col>
        <Col xs={{ span: 9, offset: 1 }} sm={{ span: 9, offset: 1 }} md={{ span: 9, offset: 1 }} className="text-left">
          <span id={index} style={{color: answerStyles[index]}}>{answer.text}</span>
        </Col>
      </Row>
    </div>
    </Container>
  );

  var extraInfo = <p></p>
  if (guess !== null) {
    extraInfo = <p className="text-justify">{props.extraInfo}</p>;
  }

  return(
    <Container>
      <Row>
        <Col md={2} />
        <Col md={8}>
          <Card style={{ width: '30rem' }} className="question-card" >
            <Card.Img variant="top" src={props.media} />
            <Card.Body>
              <Card.Title>{props.content}</Card.Title>
              <Card.Text>
                {answers}
                <br />
                {extraInfo}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2} />
      </Row>
    </Container> 
  );
}

export default Question;
