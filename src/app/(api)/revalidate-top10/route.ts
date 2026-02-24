import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  revalidateTag("getTop10Rackets", "max");

  return NextResponse.json({ text: "ok" });
}
