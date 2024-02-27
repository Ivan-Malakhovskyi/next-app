// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { signInWithEmailAndPassword } from "firebase/auth";

// // //! Authorization with Email Firebase
// const authOptions = {
//   // Configure one or more authentication providers
//   pages: {
//     signIn: "/signin",
//   },

//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {},
//       async authorize(credentials): Promise<any> {
//         try {
//           const userCredentials = await signInWithEmailAndPassword(
//             auth,
//             (credentials as any).email || "",
//             (credentials as any).password || ""
//           );
//           if (userCredentials.user) {
//             return userCredentials.user;
//           } else {
//             return null;
//           }
//         } catch (error) {
//           console.log(error.massage);
//           return null;
//         }
//       return await signInWithEmailAndPassword(
//         auth,
//         (credentials as any).email || "",
//         (credentials as any).password || ""
//       )
//         .then((userCredentials) => {
//           if (userCredentials.user) {
//             return userCredentials.user;
//           }
//           return null;
//         })
//         .catch((err) => console.log(err.message));
//       },
//     }),
//   ],
// };

// export default NextAuth(authOptions);
