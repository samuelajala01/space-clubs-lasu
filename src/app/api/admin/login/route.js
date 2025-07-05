import { NextResponse } from "next/server";
import { SignJWT } from "jose";

const ADMIN_CODE = process.env.ADMIN_CODE;
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req) {
  try {
    const { code } = await req.json();
    
    // Debug logging
    console.log("Received code:", JSON.stringify(code));
    console.log("Expected ADMIN_CODE:", JSON.stringify(ADMIN_CODE));
    console.log("Code length:", code?.length);
    console.log("ADMIN_CODE length:", ADMIN_CODE?.length);
    console.log("Codes match:", code === ADMIN_CODE);
    console.log("ADMIN_CODE exists:", !!ADMIN_CODE);
    console.log("JWT_SECRET exists:", !!process.env.JWT_SECRET);
    
    if (!ADMIN_CODE) {
      console.error("ADMIN_CODE environment variable is not set");
      return NextResponse.json({ message: "Server configuration error" }, { status: 500 });
    }
    
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET environment variable is not set");
      return NextResponse.json({ message: "Server configuration error" }, { status: 500 });
    }
    
    if (code !== ADMIN_CODE) {
      console.log("Code mismatch - received:", code, "expected:", ADMIN_CODE);
      return NextResponse.json({ message: "Invalid code" }, { status: 401 });
    }

    const token = await new SignJWT({ role: "admin" })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d")
      .sign(JWT_SECRET);

    const res = NextResponse.json({ message: "OK" });
    
    // FIXED: Set httpOnly to false so client-side JavaScript can read it
    // This is needed because your dashboard code uses document.cookie
    res.cookies.set("admin_token", token, {
      httpOnly: false, // Changed from true to false
      secure: process.env.NODE_ENV === "production", // Use secure in production
      sameSite: "lax", 
      maxAge: 86400,
      path: "/",
    });

    // Remove the test cookie since it's not needed
    // res.cookies.set("test_cookie", "hello", {
    //   httpOnly: false,
    //   maxAge: 86400,
    // });
    
    console.log("Login successful, token generated");
    console.log("Cookie set with token length:", token.length);
    console.log("NODE_ENV:", process.env.NODE_ENV);
    return res;
    
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}