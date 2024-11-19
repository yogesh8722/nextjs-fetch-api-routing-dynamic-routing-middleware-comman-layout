'use client';
import { use } from "react";

function Student({params}) {
    // console.log(params);
    const Sname=use(params)
    
  return (
    <div>
      <h1>Student</h1>
      <h4>{Sname.student}</h4>
    </div>
  )
}
export default Student;

