// import { NextResponse } from 'next/server'

// // This is your middleware function
// export function middleware(request) {
//     const isLoggedIn = true;

//     // If the user is not logged in and not already at the /Home page, redirect them
//     if (!isLoggedIn && request.nextUrl.pathname !== '/login') {
//         return NextResponse.redirect(new URL('/login', request.url));
//     }

//     // If the condition isn't met, just continue to the next request
//     return NextResponse.next();
// }

// condition ya fir koi special route pr hi hme redirect krana ho to this code
 


import { NextResponse } from 'next/server';

// Middleware function
export function middleware(request) {
    // Redirect the user to the login page if the condition is met
    return NextResponse.redirect(new URL('/dynamicRouting/studentList', request.url));
}

// Middleware configuration
export const config = {
    // This matcher will apply to all routes under '/loginTeacher/*'
    matcher: ['/login/:path*'], 
};
