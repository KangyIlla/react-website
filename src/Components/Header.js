
import React from "react";
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

const GIT_URL = "https://github.com/KangyIlla/Projects"

const Header = (props) => {
  return (
    <Container>
      <header className="App-header">
        <h2>{props.text}</h2>
        <Button variant="outline-primary" href={GIT_URL}  style={{ marginLeft: "auto" }}>Github</Button>
      </header>
    </Container>
  );
};

export default Header;

