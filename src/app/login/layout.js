'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const layout = ({children}) => {
    const pathName=usePathname();
  return (
    <div>
        {
            pathName !== "/login/loginTeacher" ? <h1>Comman Layout for login page</h1> : null
        }
      
      <h4>{children}</h4>
    </div>
  )
}

export default layout
