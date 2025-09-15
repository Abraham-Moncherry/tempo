import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"]

export default async function middleware(request: NextRequest){
    // With database sessions, we check for the session cookie
    const sessionCookie = request.cookies.get("authjs.session-token") ||
                         request.cookies.get("__Secure-authjs.session-token");

    const {pathname} = request.nextUrl;

    const isProtected = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );

    if (isProtected && !sessionCookie ) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"]
}