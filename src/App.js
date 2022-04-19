import { useState, useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// 6e7a649a
const API_URL = "http://www.omdbapi.com/?apikey=6e7a649a";
const movie1 = {
  Title: "Joker",
  Year: "2019",
  imdbID: "tt7286456",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Joker");
  }, []);

  return (
    <div className="app">
      <h1> MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for a movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
// enter
            onKeyPress={(e) => {
                if (e.key === "Enter") {
                    searchMovies(searchTerm);
                }
            }}

        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
