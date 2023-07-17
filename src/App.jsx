import React from 'react'
import { useState } from 'react'

export default function App() {
  const [userTabOpen, setUserTabOpen] = useState(false)
  const [currentOpenUser, setCurrentOpenUser] = useState({})
  return (
    <div>
      <Title />
      <AddressBook />
    </div>
  )
}
