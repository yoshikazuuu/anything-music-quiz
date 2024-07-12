import { NextAuthConfig } from "next-auth"
import Discord from "next-auth/providers/discord"
import Credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server"

export default {
    providers: [Credentials({
        credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" }
        },
        async authorize(c) {
            if (c.password !== "password") {
                return null;
            }

            return {
                id: "1",
                name: "Fill Murray",
                email: "fill@murray.com",
                image: "https://source.boringavatars.com/marble/120",
            };
        },
    }),
        Discord
    ],
    callbacks: {
        authorized: async ({ request, auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page

            if (request.nextUrl.pathname === "/login") {
                if (!auth) return true
                return NextResponse.redirect(new URL('/', request.url));
            }

            return !!auth
        },
    },
} satisfies NextAuthConfig