import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import BookingForm from './pages/BookingForm'
import Confirmation from './pages/Confirmation'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/book/:id" element={<BookingForm />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  )
}
