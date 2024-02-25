import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/signin",
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnPosts = nextUrl.pathname.startsWith("/posts");

      if (isOnPosts) {
        if (isLoggedIn) return true;
        return false; //redirect
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/posts", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
