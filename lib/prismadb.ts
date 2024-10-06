import { PrismaClient } from "@prisma/client";
{
    /*
        This imports the PrismaClient class from the @prisma/client package. The PrismaClient 
        is the interface that allows your application to interact with your database 
        (e.g., running queries).
    */
}


declare global{
    var prisma: PrismaClient | undefined
};

{
    /*
        Declaring Global Variable (global)

           1.declare global is used to extend the global scope by adding a prisma variable to globalThis.
            In Node.js, global (or globalThis) refers to the global object. Anything declared as a property 
            on global can be accessed throughout the app without importing or passing the variable around.
           
           2.var prisma: PrismaClient | undefined; declares a variable prisma of type PrismaClient or 
            undefined, meaning that this global variable may hold a PrismaClient instance or be undefined.
    */
}

const prismadb = globalThis.prisma || new PrismaClient();
{
    /*
        Conditional Initialization of PrismaClient

            1.This line checks if globalThis.prisma (the global prisma variable) is already defined.
            If it’s not (undefined), it creates a new instance of PrismaClient with new PrismaClient().

            2.If globalThis.prisma already holds a PrismaClient instance, it assigns that to prismadb, 
            thus avoiding the creation of a new instance.
    */
}
if(process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;
{
    /*
        Preventing Multiple Instances in Development

            1.In development mode (process.env.NODE_ENV !== "production"), this assigns the prismadb instance 
            to globalThis.prisma.

            2.This ensures that the Prisma Client instance persists across hot-reloads in development. 
            Otherwise, without this, every time the app reloads (due to file changes), a new Prisma Client 
            instance would be created, which can lead to performance issues and database connection 
            exhaustion.
              {
                Hot-reloads refer to a feature in development environments where changes 
                in the code automatically reload parts (or the whole) of the application 
                without requiring a manual restart of the server. This allows developers 
                to see the effects of their changes almost instantly, speeding up the 
                development process.
              }

              dekho ham log nhi chahte the ki bar bar jo hai koi change ho prismadb ke 
              andar to bar bar new PrismaClient() run ho aur bar bar aek instance banaye 
              to isiliye hamne usko global declare kar diya kis ko kiya?-> var prisma ko 
              aur uski value niche bale line me de diya.

            3.In production, hot-reloading is not an issue, so there's no need to store the Prisma instance 
            globally.

    */
}


export default prismadb;