import Image from "next/image";

export default function UserProfile({ session }) {
  return (
    <>
      <Image
        alt={session.user?.name!}
        src={session.user?.image!}
        height={50}
        width={50}
        className="rounded-full mb-4 mx-auto"
      />
      <h1 className="text-xl font-bold mb-2 text-center text-black">
        Welcome, {session.user?.name}!
      </h1>
      <p className="text-center mb-4 text-gray-600">
        Authenticated as {session.user?.email}
      </p>
    </>
  );
}
