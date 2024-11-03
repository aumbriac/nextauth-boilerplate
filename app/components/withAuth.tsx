import { useSession } from "next-auth/react";
import Loader from "@/app/components/Loader";
import { useSearchParams, useRouter } from "next/navigation";
import { ComponentType, useEffect } from "react";

export function withAuth(Component: ComponentType<any>) {
  return function AuthenticatedComponent(props: any) {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
      if (status === "authenticated" && callbackUrl) {
        router.push(callbackUrl);
      } else if (status === "unauthenticated") {
        router.push("/api/auth/signin");
      }
    }, [status, callbackUrl, router]);

    if (status === "loading") {
      return <Loader />;
    }

    return <Component {...props} session={session} />;
  };
}
