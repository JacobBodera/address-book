import React from 'react'
import { useState } from 'react'
import AddressBook from './components/Address'
import Title from './components/Title'

export default function App() {
  const [userTabOpen, setUserTabOpen] = useState(false)
  const [currentOpenUser, setCurrentOpenUser] = useState({})
  console.log(currentOpenUser)
  return (
    <div>
      <Title />
      <AddressBook />
    </div>
  )
}
