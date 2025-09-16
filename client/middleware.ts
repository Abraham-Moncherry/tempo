import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"]

export default function middleware(request: NextRequest){
    const {pathname} = request.nextUrl;

    // Skip middleware for auth callbacks
    if (pathname.startsWith("/api/auth/")) {
        return NextResponse.next();
    }

    const isProtected = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );

    if (isProtected) {
        // Check for session cookie
        const sessionCookie = request.cookies.get("authjs.session-token") ||
                             request.cookies.get("__Secure-authjs.session-token");

        if (!sessionCookie) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api/auth (auth routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
    ],
}