import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WhiteArrow from '../assets/white-arrow.png'

export default function AddressBook() {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=100')
      .then((res) => {
        setUserList(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(userList)

  return (
    <div className='flex flex-row gap-8 flex-wrap justify-center'>
      {userList.map((user, index) => (
        <Address
          key={index}
          first={user.name.first}
          last={user.name.last}
          picture={user.picture.medium}
        />
      ))}
    </div>
  )
}

function Address({ first, last, picture }) {
  return (
    <div className='group flex flex-row items-center gap-8 p-4 bg-slate-300 w-[400px] hover:bg-slate-500 hover:duration-500 rounded-lg justify-between'>
      <img src={picture} className='rounded-full' />
      <div className='font-mono text-sky-950 font-bold group-hover:text-white'>{`${first} ${last}`}</div>
      <img
        src={WhiteArrow}
        className='w-[50px] h-[50px] brightness-0 group-hover:brightness-100'
      />
    </div>
  )
}
