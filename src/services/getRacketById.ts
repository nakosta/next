import { BASE_API_URL } from "@/constants/services";
import { IRacket } from "@/types/racket";
import { Response } from "@/types/request";

export const getRacketById = async (id: string): Response<IRacket> => {
  const result = await fetch(`${BASE_API_URL}/product/${id}`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const { product } = await result.json();

  return { isError: false, data: product };
};
