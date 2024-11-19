'use client'
import Link from 'next/link'
import React from 'react'

function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <Link href={'/dynamicRouting/studentList/yogesh'}>yogesh</Link>
      <br></br>
      <Link href={'/dynamicRouting/studentList/pravin'}>pravin</Link>
      <br></br>
      <Link href={'/dynamicRouting/studentList/lokesh'}>lokesh</Link>
    </div>
  )
}

export default StudentList
