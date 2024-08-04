"use client";
import { useSession } from "next-auth/react";
import redirect from "@/app/utils/redirect";
import Loader from "@/app/components/Loader";

export function withAuth(Component: React.ComponentType<any>) {
  return function AuthenticatedComponent(props: any) {
    const { data: session, status } = useSession();

    if (status === "loading") {
      return <Loader />;
    }

    if (status === "unauthenticated") {
      redirect("/auth/signin");
    }

    return <Component {...props} session={session} />;
  };
}
