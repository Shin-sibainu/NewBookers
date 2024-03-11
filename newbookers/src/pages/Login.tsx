import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { NextPage } from "next";
import { Session, getServerSession } from "next-auth";
import authOptions from "./api/auth/[...nextauth]";
import AuthServerButton from "../components/auth/AuthClientButton";
import AuthClientButton from "../components/auth/AuthClientButton";

const Login: NextPage = async () => {
  // const { data: session } = useSession(authOptions);
  const session: Session | null = await getServerSession();
  console.log(session);

  return (
    <>
      {/* {session && (
        <div>
          <h1>ようこそ, {session.user && session.user.email}</h1>
          <button>ログアウト</button>
        </div>
      )}
      {!session && (
        <div>
          <p>ログインしていません</p>
          <button>ログイン</button>
        </div>
      )} */}
      <AuthClientButton session={session} />
    </>
  );
};

export default Login;
