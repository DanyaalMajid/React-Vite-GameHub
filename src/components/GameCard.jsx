import React from "react";
import { Card } from "react-bootstrap";
import "./GameCard.css";

function GameCard(props) {
  const { game } = props;

  const platforms = game.platforms
    .map((platform) => platform.platform.name)
    .join(", ");

  return (
    <Card className="h-100">
      <a href={game.id} className="game-link">
        <Card.Img variant="top" src={game.background_image} />
      </a>
      <Card.Body>
        <a href={game.id} className="game-link">
          <Card.Title className="game-title">{game.name}</Card.Title>
        </a>
        <Card.Text className="platforms">Platforms: {platforms}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GameCard;
