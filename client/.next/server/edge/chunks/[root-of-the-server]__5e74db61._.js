(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__5e74db61._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Developer/Projects/tempo/client/app/auth.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$tempo$2f$client$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/Projects/tempo/client/node_modules/next-auth/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$tempo$2f$client$2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/Projects/tempo/client/node_modules/next-auth/providers/google.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$tempo$2f$client$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects/tempo/client/node_modules/@auth/core/providers/google.js [middleware-edge] (ecmascript)");
//import NodemailerProvider from "next-auth/providers/nodemailer";
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$tempo$2f$client$2f$node_modules$2f40$prisma$2f$client$2f$default$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects/tempo/client/node_modules/@prisma/client/default.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$tempo$2f$client$2f$node_modules$2f40$auth$2f$prisma$2d$adapter$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects/tempo/client/node_modules/@auth/prisma-adapter/index.js [middleware-edge] (ecmascript)");
;
;
;
;
const prisma = new __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$tempo$2f$client$2f$node_modules$2f40$prisma$2f$client$2f$default$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PrismaClient"]();
const { auth, handlers, signIn, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$tempo$2f$client$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$tempo$2f$client$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    adapter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$tempo$2f$client$2f$node_modules$2f40$auth$2f$prisma$2d$adapter$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PrismaAdapter"])(prisma),
    session: {
        strategy: "database"
    },
    callbacks: {
        session: async ({ session, user })=>{
            if (session?.user) {
                session.user.id = user.id;
            }
            return session;
        }
    },
    pages: {
        signIn: "/login"
    }
});
}),
"[project]/Developer/Projects/tempo/client/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$tempo$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/Projects/tempo/client/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$tempo$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects/tempo/client/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$tempo$2f$client$2f$app$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects/tempo/client/app/auth.ts [middleware-edge] (ecmascript)");
;
;
const protectedRoutes = [
    "/dashboard"
];
async function middleware(request) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$tempo$2f$client$2f$app$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["auth"])();
    const { pathname } = request.nextUrl;
    const isProtected = protectedRoutes.some((route)=>pathname.startsWith(route));
    if (isProtected && !session) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$tempo$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/login", request.url));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects$2f$tempo$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__5e74db61._.js.map