import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Simple token verification for Edge Runtime
function verifyToken(token) {
  try {
    // In production, you should use a proper JWT verification library
    // This is a simplified version for demonstration
    const [headerB64, payloadB64] = token.split(".");
    const payload = JSON.parse(atob(payloadB64));

    // Check if token is expired
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }

    // Check if user is admin
    if (payload.role !== "admin") {
      return null;
    }

    return payload;
  } catch (error) {
    return null;
  }
}

export async function middleware(request) {
  // Check if the request is for an admin route
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Skip middleware for login page
    if (request.nextUrl.pathname === "/admin/login") {
      return NextResponse.next();
    }

    // Get the token from cookies
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      // Redirect to login if no token is present
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // Verify the token
    const decoded = verifyToken(token);

    if (!decoded) {
      // Token is invalid or expired
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // Add the decoded token to the request headers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-admin-email", decoded.email);

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
