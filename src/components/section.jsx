import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles.css'

function Section(props) {
  return (
    <div class="col-lg-3" >
    <Card bg="light" className="p-3 me-auto ms-auto" style={{ width: '325px',height:'610px' }}>
      <Card.Img variant="top" src={props.img}   style={{ width: '250px',height:'360px' }}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Section;