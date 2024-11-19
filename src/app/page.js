"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Homes from "./Home";
import PeramiterArowFunction from "./NextTutorial/PeramiterArowFunction";
import Link from "next/link";

export default function Home() {
  const router=useRouter();
  return (
    <div>
      <Homes name={'yogesh'}/>


      {/*  */}
        <PeramiterArowFunction />
      {/*  */}

    <Link href={'/login'}>Go To Login Page</Link>
    <button onClick={()=>router.push('/login/loginStudent')}>Go To Login Student</button>
    <button onClick={()=>router.push('/login/loginTeacher')}>Go To Login Teacher</button>
    
    </div>
  );
}
