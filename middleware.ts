{/*
    Why Middleware is Used:
Middleware is a function that runs before the request is completed. 
        In this context, a request refers to an HTTP request made by a user (or client) to the server. This typically happens when:

            A user visits a webpage (GET request).
            A form is submitted (POST request).
            A client fetches data via an API (GET, POST, PUT, DELETE requests).
    It's often used for:

        1.Authentication: Ensuring that a user is authenticated before they can access a route.

        In this case, Clerk's middleware checks if a user is authenticated before serving certain pages or API routes.
        2.Authorization: Checking if a user has the necessary permissions to access a resource.

        Logging: Logging requests or gathering analytics before serving the response.

        Redirection: Automatically redirecting users based on conditions, like if they are not logged in.

        Handling requests based on conditions: Middleware can modify the response, block certain requests, or apply logic conditionally before a response is served.
*/}


import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};