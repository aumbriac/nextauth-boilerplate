"use client";
import { withAuth } from "@/app/components/withAuth";
import { Button } from "@/app/components/Buttons";
import UserProfile from "@/app/components/UserProfile";
import Code from "@/app/components/Code";
import Card from "@/app/components/Card";
import { signOut } from "next-auth/react";
import CardText from "../components/CardText";

function Dashboard({ session }) {
  return (
    <Card>
      <UserProfile session={session} />
      <CardText color="white" className="text-lg">
        This page is protected by Next.js middleware, as defined in{" "}
        <Code>middleware.ts</Code> and protected by <Code>withAuth.tsx</Code>.
        Only authenticated users can access this content.
      </CardText>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </Card>
  );
}

export default withAuth(Dashboard);
