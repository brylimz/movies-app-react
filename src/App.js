import { useEffect } from "react";
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
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
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
          value="
        Superman"
          onChange={() => {}}
        />
        <img src={searchIcon} alt="search" onClick={() => {}} />
      </div>
      <div className="container">
    
      </div>
    </div>
  );
};

export default App;
