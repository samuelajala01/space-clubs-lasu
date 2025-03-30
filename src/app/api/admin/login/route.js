import { NextResponse } from "next/server";
import { SignJWT } from "jose";

// This would typically come from your database
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@spaceclubs.org";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123"; // In production, use a strong password
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key"
);

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate credentials
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate JWT token using jose
    const token = await new SignJWT({ email, role: "admin" })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d")
      .sign(JWT_SECRET);

    // Set the token in an HTTP-only cookie
    const response = NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );

    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
