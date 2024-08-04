import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import { GoogleSVG, GitHubSVG } from "@/app/components/SVGs";

type SignInButtonProps = {
  providerId: string;
  providerName: string;
};

export function SignInButton({ providerId, providerName }: SignInButtonProps) {
  const providerDetails = {
    google: {
      bgClass:
        "bg-gray-900 text-white hover:bg-gray-800 border border-gray-300",
      SVGComponent: GoogleSVG,
    },
    github: {
      bgClass: "bg-gray-800 hover:bg-gray-700",
      SVGComponent: GitHubSVG,
    },
  };
  const { bgClass, SVGComponent } = providerDetails[providerId] || {};

  return (
    <button
      onClick={() => signIn(providerId, { callbackUrl: "/dashboard" })}
      className={`flex items-center justify-center py-4 px-5 rounded text-white w-full ${bgClass}`}
    >
      {SVGComponent && <SVGComponent className="h-5 w-5 mr-2" />}
      Sign in with {providerName}
    </button>
  );
}

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
    >
      Sign out
    </button>
  );
}
