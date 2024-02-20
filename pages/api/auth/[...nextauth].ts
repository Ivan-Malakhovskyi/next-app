import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../src/app/firebase";

const { NEXTAUTH_SECRET_KEY, NEXTAUTH_URL } = process.env;

export const authOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: "/signin",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username: ",
          type: "text",
          placeholder: "Some User 🤣",
        },
      },
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
          auth,
          (credentials as any).email || "",
          (credentials as any).password || ""
        )
          .then((userCredencials) => {
            if (userCredencials.user) {
              return userCredencials.user;
            }
            return null;
          })
          .catch((err) => console.log(err.message));
      },
    }),
  ],
};

export default NextAuth(authOptions);
