import { getRacketTop10 } from "@/services/getRacketTop10";
import { Rackets } from "../Rackets/Rackets";

export const RacketsTop10 = async () => {
  const { isError, data } = await getRacketTop10();

  if (isError) {
    return "isError";
  }

  if (!data) {
    return "not found";
  }

  return <Rackets rackets={data} variant="carousel" title="ТОП-10" />;
};
