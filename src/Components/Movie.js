import React from "react";
import { Card, Button,} from "react-bootstrap";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={poster} width="200" />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Year}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;