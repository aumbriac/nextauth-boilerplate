"use server";
import { redirect as nextRedirect } from "next/navigation";

export default async function redirect(path: string) {
  nextRedirect(path);
}
