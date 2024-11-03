"use client";
import { Button } from "@/app/components/Buttons";
import Card from "@/app/components/Card";
import CardText from "@/app/components/CardText";
import CardTitle from "@/app/components/CardTitle";
import redirect from "@/app/utils/redirect";
import { useSearchParams } from "next/navigation";

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <Card>
      <CardTitle>Authentication Error</CardTitle>
      <CardText>
        {error === "OAuthCallback"
          ? "App Configuration Error. Please check the contents of your .env file"
          : error ?? "An error occurred during authentication."}
      </CardText>
      <Button onClick={() => redirect("/")}>Login Page</Button>
    </Card>
  );
}
