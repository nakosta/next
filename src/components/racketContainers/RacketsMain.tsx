import { getRackets } from "@/services/getRackets";
import { Rackets } from "../Rackets/Rackets";

export const RacketsMain = async () => {
  const { isError, data } = await getRackets({ limit: 10 });

  if (isError) {
    return "isError";
  }

  if (!data) {
    return "not found";
  }

  return <Rackets rackets={data} showAllLink variant="carousel" />;
};
