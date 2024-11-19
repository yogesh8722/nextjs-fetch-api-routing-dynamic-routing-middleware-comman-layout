'use client';
import Link from "next/link";


const Login=()=>{
    
    return(
        <div>
            <h1>Login page</h1>
           
            <div>
            <Link href={'/'}>go to Home page</Link><br></br><br></br>
            <Link href={'/login/loginStudent'}>go to loginStudent page</Link><br></br><br></br>
            <Link href={'login/loginTeacher'}>go to loginTeacher page</Link>
            </div>
        
        </div>
    )
}
export default Login;
