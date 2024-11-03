"use client";
import { getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import { SignInButton } from "@/app/components/Buttons";
import Loader from "@/app/components/Loader";
import Card from "@/app/components/Card";
import CardTitle from "@/app/components/CardTitle";
import { withAuth } from "@/app/components/withAuth";

type Provider = {
  id: string;
  name: string;
};

type SignInProps = {
  providers: Record<string, Provider>;
};

const SignIn = () => {
  const [providers, setProviders] = useState<SignInProps["providers"] | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        setIsLoading(true);
        const res = await getProviders();
        if (!res) {
          throw new Error("No providers returned");
        }
        setProviders(res);
      } catch (_) {
        setError(
          "Please define the required environment variables inside .env.local"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProviders();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return error;
  }

  return (
    <Card>
      <CardTitle>Next 15 NextAuth Boilerplate</CardTitle>
      {providers && Object.values(providers).length > 0 ? (
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <SignInButton
              providerId={provider.id}
              providerName={provider.name}
            />
          </div>
        ))
      ) : (
        <div className="text-stone-300">No sign-in providers available.</div>
      )}
    </Card>
  );
};

export default withAuth(SignIn);
