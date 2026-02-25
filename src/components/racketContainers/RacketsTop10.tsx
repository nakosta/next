import { getTop10Rackets } from "@/services/getTop10Rackets";
import { notFound } from "next/navigation";
import { Rackets } from "../Rackets/Rackets";

export const RacketsTop10 = async () => {
  const { isError, data } = await getTop10Rackets();

  if (isError) {
    return "Some error";
  }

  if (!data) {
    notFound();
  }

  return <Rackets rackets={data} variant="carousel" title="ТОП-10" />;
};
