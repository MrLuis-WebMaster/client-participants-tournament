"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import ContextAuthProvider from "./ContextAuth";

interface Props {
  children: ReactNode;
}

const ProviderAuth = (props: Props) => {
  return <SessionProvider refetchOnWindowFocus={true}><ContextAuthProvider>{props.children}</ContextAuthProvider></SessionProvider>;
};

export default ProviderAuth;