import { Container, Row, Col } from 'react-bootstrap';
import GameCard from './GameCard';

const GameList = ({ games }) => {
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {games.map((game) => (
          <Col key={game.id}>
            <GameCard game={game} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GameList;
