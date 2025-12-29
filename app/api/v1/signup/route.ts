import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client";

const prismaClient = new PrismaClient({})

export async function POST(req: NextRequest){
    // we get this req object that is of tpe NextRequest
    // we can extract the bodyin the following manner 

    const data = await req.json();

    //console.log(data);
    
    await prismaClient.user.create({
        data:{
            username: data.username,
            password: data.password
        }
    });
    return NextResponse.json({
        message:"You have been signed up"
    })
}

/*export async function GET(req: NextRequest){
    const user = await prismaClient.user.findFirst();

    return NextResponse.json({
        user: user
    })
}*/