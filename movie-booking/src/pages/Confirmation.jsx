import { useLocation, useNavigate } from 'react-router-dom'

export default function Confirmation() {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!state) return <p>No booking found</p>

  return (
    <div className="confirmation">
      <h2>🎉 Booking Confirmed!</h2>
      <div className="booking-details">
        <p><strong>Booking ID:</strong> {state.bookingId}</p>
        <p><strong>Name:</strong> {state.name}</p>
        <p><strong>Email:</strong> {state.email}</p>
        <p><strong>Mobile:</strong> {state.mobile}</p>
      </div>
      <button onClick={() => navigate('/')}>🏠 Go to Home</button>
    </div>
  )
}
