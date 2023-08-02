import { useSession } from "next-auth/react";
import { getServerAuthSession } from "~/server/auth";
import { type GetServerSideProps } from "next";
import { SignIn } from "@clerk/nextjs";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  return {
    props: { session },
  };
};

const User = () => {
  const { data: session } = useSession();

  if (!session) {
    return <SignIn />;
  }
  return <p>Welcome back {session.user.name}</p>;
};
