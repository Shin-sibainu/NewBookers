"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import React from "react";

const AuthClientButton = ({ session }: { session: Session | null }) => {
  console.log(session);
  return (
    <>
      {session ? (
        <div>
          <h1>ようこそ, {session.user && session.user.email}</h1>
          <button onClick={() => signOut()}>ログアウト</button>
        </div>
      ) : (
        <div>
          <p>ログインしていません</p>
          <button onClick={() => signIn()}>ログイン</button>
        </div>
      )}
    </>
  );
};

export default AuthClientButton;
