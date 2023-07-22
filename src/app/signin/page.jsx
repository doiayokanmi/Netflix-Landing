
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Signin from "../components/Signin";

const page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Signin />
      <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
    </>
  );
};

export default page;
