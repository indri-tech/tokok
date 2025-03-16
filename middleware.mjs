import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const session = await getSession({ req });

    // Blokir akses langsung ke login dan register
    if (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/register") {
        if (req.headers.get("referer") === null) {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }

    return NextResponse.next();
}
