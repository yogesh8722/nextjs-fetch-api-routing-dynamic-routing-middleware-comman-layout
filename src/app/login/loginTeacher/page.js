'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const route=useRouter();
  return (
    <div>
      <h1>Login for Teacher</h1>
      <button onClick={()=>route.push('/')}>Home Page</button><br /> <br />
      <Link href={'/login/loginStudent'}>Login student</Link><br /> <br />
      <button onClick={()=>route.push('/login')}>Login Page</button>
    </div>
  )
}

export default page
