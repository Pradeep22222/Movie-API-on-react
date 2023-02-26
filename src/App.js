import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import Button from "react-bootstrap/button";
import { Container, Alert } from "react-bootstrap";
import { CustomCard } from "./Components/CustomCard";
import { MovieList } from "./Components/MovieList";
import { SearchForm } from "./Components/SearchForm";
import { fetchMovieInfo } from "./Helper/axiosHelper";

function App() {
  const [movie, setMovie] = useState({});
  const [showError, setShowError] = useState("");
  const [movieList, setMovieList] = useState([]);
  const handleOnChange = async (str) => {
    const result = await fetchMovieInfo(str);
    setMovie(result);
    result.Response === "False" ? setShowError(result.Error) : setShowError("");
  };



  const movieSelect = (movie) => {
    setMovieList([...movieList, movie]);
    setMovie({});
  };
  const deleteMovie = (imdbID) => {
    if (window.confirm("Are you sure")) {
      const filteredArg = movieList.filter((item) => item.imdbID !== imdbID);
      setMovieList(filteredArg);
    }
  };

  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnChange}></SearchForm>
        <div className="mt-4 d-flex justify-content-center">
          <div>
            {movie.imdbID && (
              <CustomCard
                movie={movie}
                func={movieSelect}
                inSearchForm={true}
              />
            )}
            {showError && <Alert variant="danger">{showError}</Alert>}
          </div>
        </div>
        <hr />
        <MovieList movieList={movieList} deleteMovie={deleteMovie}></MovieList>
      </Container>
    </div>
  );
}

export default App;
