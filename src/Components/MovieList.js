import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CustomCard } from "./CustomCard";
import { CustomList } from "./CustomList";

export const MovieList = ({ movieList, deleteMovie }) => {
  const [displayList, setDisplayList] = useState([]);
  const [view, setView] = useState("list");
  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);
  const filterMovie = (mood) => {
    if (mood === "all") {
      return setDisplayList(movieList);
    }
    const tempArg = movieList.filter((item) => item.mood === mood);
    setDisplayList(tempArg);
  };
  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-between">
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => filterMovie("all")}>
              All
            </Button>
            <Button variant="primary" onClick={() => filterMovie("happy")}>
              Happy
            </Button>
            <Button variant="danger" onClick={() => filterMovie("romantic")}>
              Romantic
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example">
            <Button variant="primart" onClick={() => setView("grid")}>
              Grid
            </Button>
            <Button variant="info" onClick={() => setView("list")}>
              List
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            fontSize: "1.5rem",
            boxShadow: " .2rem .2rem .1rem black",
            maxWidth: "13rem",
            marginTop: "1rem",
            backgroundColor: "grey",
          }}
        >
          {displayList.length} movies found
        </Col>
      </Row>
      <p></p>
      <Row className="mt-5 ">
        <Col className="d-flex justify-content-between flex-wrap">
          {displayList.map((item, i) =>
            view === "grid" ? (
              <CustomCard movie={item} key={i} func={deleteMovie} />
            ) : (
              <CustomList movie={item} key={i} func={deleteMovie} />
            )
          )}
        </Col>
      </Row>
    </div>
  );
};
