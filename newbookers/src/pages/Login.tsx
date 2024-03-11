import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { NextPage } from "next";
import { Session, getServerSession } from "next-auth";
import AuthClientButton from "../components/auth/AuthClientButton";

const Login: NextPage = async () => {
  const session: Session | null = await getServerSession();
  console.log(session);

  return (
    <>
      <AuthClientButton session={session} />
    </>
  );
};

export default Login;
