import { BASE_API_URL } from "@/constants/services";
import { IRacket } from "@/types/racket";
import { Response } from "@/types/response";
import { cookies } from "next/headers";

type Params = {
  page?: number;
  limit?: number;
};

export const getRackets = async ({
  page = 1,
  limit = 10,
}: Params): Response<IRacket[]> => {
  const cookieStore = await cookies();

  const result = await fetch(
    `${BASE_API_URL}/products?page=${page}&limit=${limit}`,
    {
      next: {
        revalidate: 20,
      },
      credentials: "include",
      headers: {
        Cookie: cookieStore.toString(),
      },
    },
  );

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const products = await result.json();

  return { isError: false, data: products };
};
