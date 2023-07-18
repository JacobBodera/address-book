import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WhiteArrow from '../assets/white-arrow.png'
import Close from '../assets/close.png'

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
    <div
      data-test='address-list'
      className='flex flex-row gap-8 flex-wrap justify-center'
    >
      {userList.map((user, index) => (
        <Address key={index} user={user} id={index} />
      ))}
    </div>
  )
}

function Address({ user, id }) {
  const [isSelected, setIsSelected] = useState(false)
  const { first, last } = user.name
  const picture = user.picture.medium
  return (
    <div className='font-mono'>
      {!isSelected && (
        <div
          data-test={`closed-address-item-${id}`}
          onClick={() => setIsSelected(true)}
          className={
            'group flex flex-row items-center p-4 bg-slate-300 w-[400px] hover:bg-slate-500 hover:duration-500 rounded-lg justify-between hover:cursor-pointer'
          }
        >
          <img data-test='image' src={picture} className='rounded-full' />
          <div
            data-test='name'
            className='text-sky-950 font-bold group-hover:text-white'
          >{`${first} ${last}`}</div>
          <img
            src={WhiteArrow}
            className='w-[50px] h-[50px] brightness-0 group-hover:brightness-100'
          />
        </div>
      )}
      {isSelected && (
        <div
          data-test={`expanded-address-item-${id}`}
          onClick={() => setIsSelected(false)}
          className='group flex flex-col justify-center items-center p-4 bg-slate-300 w-[400px] hover:bg-slate-500 hover:duration-500 rounded-lg hover:cursor-pointer'
        >
          <div className='flex w-full flex-row items-center justify-between'>
            <img data-test='image' src={picture} className='rounded-lg' />
            <div
              data-test='image'
              className='text-sky-950 font-bold group-hover:text-white'
            >{`${first} ${last}`}</div>
            <img
              src={Close}
              className='w-[36px] h-[36px] brightness-0 group-hover:brightness-100'
            />
          </div>
          <div
            data-test='detailed-information'
            className='group-hover:text-white flex flex-col items-center mt-6 gap-2'
          >
            <div>{user.cell}</div>
            <div>{user.email}</div>
            <div>{`${user.location.state}, ${user.location.country}`}</div>
          </div>
        </div>
      )}
    </div>
  )
}
