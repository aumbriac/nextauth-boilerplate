"use client";

import redirect from "@/app/utils/redirect";
import { useSearchParams } from "next/navigation";

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg text-center shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center text-red-600">
          Authentication Error
        </h1>
        <p className="text-center mb-4">
          {error === "OAuthCallback"
            ? "App Configuration Error. Please check the contents of your .env file"
            : error
            ? error
            : "An error occurred during authentication."}
        </p>
        <button
          onClick={() => redirect("/")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Login Page
        </button>
      </div>
    </div>
  );
}
