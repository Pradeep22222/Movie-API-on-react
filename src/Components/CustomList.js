import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

export const CustomList = ({ movie = {}, func, inSearchForm }) => {
  const { Title, Poster, imdbRating, Plot } = movie;
  return (
    <Card
      style={{ width: "100%" }}
      className="mt-3 d-flex flex-row justify-content-between"
    >
      <div style={{ width: "300px", height: "300px", objectFit: "cover" }}>
        <Card.Img
          variant="top"
          src={Poster}
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
        />
      </div>

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
              style={{ width: "30%" }}
            >
              Delete Movie haha
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
