import { signIn } from "next-auth/react";
import { GoogleSVG, GitHubSVG } from "@/app/components/SVGs";

type SignInButtonProps = {
  providerId: string;
  providerName: string;
};

export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-stone-800 text-black px-6 py-2 rounded-full font-bold bg-transparent hover:bg-stone-800 hover:text-white dark:text-neutral-200 transition duration-200"
    >
      {children}
    </button>
  );
}

export function SignInButton({ providerId, providerName }: SignInButtonProps) {
  const providerDetails = {
    google: {
      bgClass: "bg-stone-900 hover:bg-stone-800",
      SVGComponent: GoogleSVG,
    },
    github: {
      bgClass: "bg-stone-800 hover:bg-stone-700",
      SVGComponent: GitHubSVG,
    },
  };
  const { bgClass, SVGComponent } = providerDetails[providerId] || {};

  return (
    <button
      onClick={() => signIn(providerId, { callbackUrl: "/dashboard" })}
      className={`rounded-full flex items-center justify-center py-4 px-5 rounded text-white w-full ${bgClass}`}
    >
      {SVGComponent && <SVGComponent className="h-5 w-5 mr-2" />}
      Sign in with {providerName}
    </button>
  );
}
