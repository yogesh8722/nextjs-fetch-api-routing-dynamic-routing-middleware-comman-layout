'use client'
import React, { use } from 'react'

function Students({params}) {
    const Name=use(params)
    console.log(Name);
    
  return (
    <div>
      <h1>Dynamic pages url( {Name.student[0]}/{Name.student[1]})</h1>
    </div>
  )
}

export default Students
