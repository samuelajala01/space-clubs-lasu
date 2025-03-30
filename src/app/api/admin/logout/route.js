import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json(
    { message: "Logged out successfully" },
    { status: 200 }
  );

  // Clear the admin token cookie
  response.cookies.set("admin_token", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  return response;
}
