"use client";
import { withAuth } from "@/app/components/withAuth";
import { SignOutButton } from "@/app/components/Buttons";
import UserProfile from "../components/UserProfile";
import Code from "../components/Code";

function Dashboard({ session }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-indigo-700">
          Protected Dashboard
        </h1>
        <UserProfile session={session} />
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Welcome to your secure dashboard! This page is protected by Next.js
          middleware, as defined in <Code>middleware.ts</Code>
          and protected by <Code>withAuth.tsx</Code>. Only authenticated users
          can access this content.
        </p>
        <div className="mt-8">
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}

export default withAuth(Dashboard);
