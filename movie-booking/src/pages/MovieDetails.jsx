import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function MovieDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data))
  }, [id])

  if (!movie) return <p>Loading...</p>

  return (
    <div className="details">
      <h1>{movie.name}</h1>
      <img src={movie.image?.medium} alt={movie.name} />
      <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
      <button onClick={() => navigate(`/book/${movie.id}`)}>Book Seat</button>
    </div>
  )
}
