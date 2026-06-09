"use server";
import { revalidateTag } from "next/cache";

export async function revalidateComments() {
  revalidateTag("comments");
}

// AI hjalp med at lave revalidateTag
