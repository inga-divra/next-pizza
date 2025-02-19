import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const data = await request.json();
    console.log('Received data:', data);
    const user = await prisma.user.create({
        data
    });
    return NextResponse.json(user);
}