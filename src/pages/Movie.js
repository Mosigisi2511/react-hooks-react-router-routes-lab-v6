import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams for URL parameters
import NavBar from "../components/NavBar"; // Import the NavBar component

function Movie() {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie data for the specific ID
    fetch(`http://localhost:3000/movies/${id}`) 
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error("Error fetching movie:", error));
  }, [id]);

  return (
    <>
      <header>
        <NavBar /> 
      </header>
      <main>
        {movie ? (
          <>
            <h1>{movie.title}</h1>
            <p>Time: {movie.time}</p>
            <div>
              Genres:
              {movie.genres.map((genre, index) => (
                <span key={index} className="genre">
                  {genre}
                  {index < movie.genres.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
          </>
        ) : (
          <p>Loading movie details...</p>
        )}
      </main>
    </>
  );
}

export default Movie;

