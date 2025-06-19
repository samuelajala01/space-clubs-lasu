import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET(req) {
  try {
    const token = req.cookies.get("admin_token")?.value;
    
    if (!token) {
      return NextResponse.json({ message: "No token provided" }, { status: 401 });
    }

    // Verify the token
    const { payload } = await jwtVerify(token, JWT_SECRET);
    
    if (payload.role !== "admin") {
      return NextResponse.json({ message: "Invalid role" }, { status: 403 });
    }

    return NextResponse.json({ message: "Token valid", role: payload.role });
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}