'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

function LoginStudent() {
    const route=useRouter();
    return (
        <div>
            <h1>Login for student</h1>
            <button onClick={() => route.push('/')}>Go To Home</button><br />
            <Link href={'/login/loginTeacher'}>Login Teacher</Link><br />
            <Link href={'/login'} >Login Page</Link>
        </div>
    )
}

export default LoginStudent
