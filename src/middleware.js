import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

// Proper token verification using jose library
async function verifyToken(token) {
  try {
    console.log("JWT_SECRET exists:", !!process.env.JWT_SECRET);
    console.log("Token to verify:", token.substring(0, 20) + "...");
    
    if (!JWT_SECRET || !process.env.JWT_SECRET) {
      console.error("JWT_SECRET not found in middleware");
      return null;
    }

    const { payload } = await jwtVerify(token, JWT_SECRET);
    console.log("JWT payload:", payload);
    
    // Check if user is admin
    if (payload.role !== "admin") {
      console.log("Role is not admin:", payload.role);
      return null;
    }
    
    console.log("Token verification successful");
    return payload;
  } catch (error) {
    console.error("Token verification failed in middleware:", error.message);
    console.error("Error details:", error);
    return null;
  }
}

export async function middleware(request) {
  // Check if the request is for an admin route
  if (request.nextUrl.pathname.startsWith("/admin")) {
    console.log("=== MIDDLEWARE RUNNING ===");
    console.log("Path:", request.nextUrl.pathname);
    console.log("All cookies:", request.cookies.getAll());
    
    // Skip middleware for login page
    if (request.nextUrl.pathname === "/admin/login") {
      console.log("Skipping middleware for login page");
      return NextResponse.next();
    }

    // Get the token from cookies
    const token = request.cookies.get("admin_token")?.value;
    console.log("Token found:", !!token);
    console.log("Token length:", token?.length || 0);
    
    if (!token) {
      console.log("No token found in middleware, redirecting to login");
      // Redirect to login if no token is present
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // Verify the token
    console.log("Verifying token...");
    const decoded = await verifyToken(token);
    
    if (!decoded) {
      console.log("Token verification failed in middleware, redirecting to login");
      // Token is invalid or expired
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    console.log("Token verified successfully in middleware");
    console.log("=== MIDDLEWARE ALLOWING ACCESS ===");
    
    // Add the decoded token to the request headers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-admin-role", decoded.role);
    
    // Return response with modified headers
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: ["/admin/:path*"],
};