import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("Logout request received");
    
    const response = NextResponse.json({ message: "Logged out successfully" });
    
    // Clear the admin token cookie
    response.cookies.set("admin_token", "", {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0, // Expire immediately
      path: "/",
    });
    
    console.log("Admin token cookie cleared");
    return response;
    
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ message: "Logout failed" }, { status: 500 });
  }
}