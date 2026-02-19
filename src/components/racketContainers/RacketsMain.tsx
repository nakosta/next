import { getRackets } from "@/services/getRackets";
import { notFound } from "next/navigation";
import { Rackets } from "../Rackets/Rackets";

export const RacketsMain = async () => {
  const { isError, data } = await getRackets({ limit: 10 });

  if (isError) {
    return "Some error";
  }

  if (!data) {
    notFound();
  }

  return <Rackets rackets={data} showAllLink variant="carousel" />;
};
