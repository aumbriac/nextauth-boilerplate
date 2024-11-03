import Image from "next/image";
import CardText from "@/app/components/CardText";
import CardTitle from "@/app/components/CardTitle";

export default function UserProfile({ session }) {
  return (
    <>
      <CardTitle>Welcome, {session.user?.name}!</CardTitle>
      <Image
        alt={session.user?.name!}
        src={session.user?.image!}
        height={80}
        width={80}
        className="rounded-lg mx-auto border-2 border-stone-800 shadow-md mb-4"
      />
      <CardText>You are authenticated as {session.user?.email}.</CardText>
    </>
  );
}
