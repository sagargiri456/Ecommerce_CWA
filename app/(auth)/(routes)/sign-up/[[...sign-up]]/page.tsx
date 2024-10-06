{/**
    Breakdown of the Syntax:
        Single Brackets [name]: This is for a single dynamic route.
        It will match one part of the URL, like /profile/[username]. 
        For example:

        /profile/john will match [username] = "john".
        Triple Dots with Single Brackets [...name]: This is a 
        catch-all route, meaning it matches one or more parts of the URL. 
        For example:

        /docs/a/b/c will match [...name] = ["a", "b", "c"].
        Double Brackets with Triple Dots [[...name]]: This is an optional catch-all
        route. It matches zero or more parts of the URL. 
        For example:

        / (root) matches name = undefined (or an empty array).
        /about matches name = ["about"].
        /about/team/structure matches name = ["about", "team", "structure"].    

*/}

import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp />
}