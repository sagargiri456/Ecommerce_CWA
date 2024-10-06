import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import prismadb from "@/lib/prismadb";

export async function POST(req:Request) {
    try{
        const {userId} = auth();
        const body = await req.json();
        {
            /*
                Here all content which is coming is nothing but only the name from the dialog box
                that is jsonified so whenever we want to access that name we need to decompose it first
            */
        }

        const {name} = body;

        {
            /*
                Here we destructured name and gave it the value of the body which is nothing but the value
                of the name of the dialog box.
            */
        }

        if(!userId){
            return new NextResponse("Unauthorized User",{status:401})
        }

        if(!name){
            return new NextResponse("Name is required",{status:400})
        }

        const store = await prismadb.store.create({
            data:{
                name,
                userId,
            }
        })
        return NextResponse.json(store);

        
    }catch(error){

        console.log('[STORES_POST',error)
        return new NextResponse("Internal Error",{status:500})
    }
}