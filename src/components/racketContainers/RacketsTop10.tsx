import { getRacketTop10 } from "@/services/getRacketTop10";
import { notFound } from "next/navigation";
import { Rackets } from "../Rackets/Rackets";

export const RacketsTop10 = async () => {
  const { isError, data } = await getRacketTop10();

  if (isError) {
    return "Some error";
  }

  if (!data) {
    notFound();
  }

  return <Rackets rackets={data} variant="carousel" title="ТОП-10" />;
};
