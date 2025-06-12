import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function BookingForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/confirmation', { state: { ...formData, bookingId: Math.floor(100000 + Math.random() * 900000) } })
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Enter Your Details</h2>
      <input type="text" placeholder="Name" required onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" placeholder="Email" required onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <input type="tel" placeholder="Mobile" required onChange={e => setFormData({ ...formData, mobile: e.target.value })} />
      <button type="submit">Submit</button>
    </form>
  )
}
