import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import GameCard from "./components/GameCard";
import "./App.css";

const API_KEY = "e9c5240d429646b1a0c32e044a6b12bf";

function App() {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState([]);

  const searchGames = async (e) => {
    e.preventDefault();
    const url = `https://api.rawg.io/api/games?key=${API_KEY}&search=${query}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setGames(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Rawg Game Search</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Favorites</Nav.Link>
            </Nav>
            <Form onSubmit={searchGames} className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 my-4">
          {games.map((game) => (
            <Col key={game.id}>
              <GameCard game={game} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
