'use client'
import React, { useEffect, useState } from 'react'

function page() {
    const [user,setUser]=useState([])
    useEffect(()=>{
        async function getUsers() {
            const users=await fetch('https://jsonplaceholder.typicode.com/users');
            setUser(await users.json())
        }
        getUsers()
    },[])
  return (
    <>
      <h1>Fetch Api Client Side</h1>
      {user && user.map((item,index)=> <li key={index}>{item.name}</li> )}
    </>
  )
}

export default page
