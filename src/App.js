import React from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row' 
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <header>
            Velkommen til minside
          </header>
        </Row>
        <Row>
          <Col> 1 av 1</Col>
          <Col> 2 av 2</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
