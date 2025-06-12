import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows?page=1')
      .then(res => res.json())
      .then(data => setMovies(data.slice(0, 16)))
  }, [])

  return (
    <div className="grid-container">
      {movies.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`} className="card">
          <img src={movie.image?.medium} alt={movie.name} />
          <h3>{movie.name}</h3>
        </Link>
      ))}
    </div>
  )
}
