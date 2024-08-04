"use client";
import { getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import { SignInButton } from "@/app/components/Buttons";
import Loader from "@/app/components/Loader";

type Provider = {
  id: string;
  name: string;
};

type SignInProps = {
  providers: Record<string, Provider>;
};

const SignUp = () => {
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
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="p-12 bg-black shadow-lg rounded-lg">
        {providers && Object.values(providers).length > 0 ? (
          Object.values(providers).map((provider) => (
            <div key={provider.name} className="mb-4">
              <SignInButton
                providerId={provider.id}
                providerName={provider.name}
              />
            </div>
          ))
        ) : (
          <div className="text-white">No sign-in providers available.</div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
