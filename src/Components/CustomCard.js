import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

export const CustomCard = ({ movie = {}, func, inSearchForm }) => {
  const { Title, Poster, imdbRating, Plot } = movie;
  return (
    <div>
      <Card style={{ width: "18rem" }} className="mt-3">
        <Card.Img variant="top" src={Poster} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Title>Rating:{imdbRating}</Card.Title>
          <div>{Plot}</div>
          {inSearchForm ? (
            <div className="d-flex justify-content-between mt-3">
              <Button
                variant="primary"
                onClick={() => func({ ...movie, mood: "happy" })}
              >
                Happy
              </Button>
              <Button
                variant="danger"
                onClick={() => func({ ...movie, mood: "romantic" })}
              >
                Romantic
              </Button>
            </div>
          ) : (
            <div className="d-grid gap-2">
              <Button
                variant="danger"
                size="lg"
                onClick={() => func(movie.imdbID)}
              >
                Delete Movie
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
