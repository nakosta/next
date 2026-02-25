import { Loader } from "@/components/Loader/Loader";
import { RacketsMain } from "@/components/racketContainers/RacketsMain";
import { RacketsTop10 } from "@/components/racketContainers/RacketsTop10";
import { Metadata } from "next";
import { Suspense } from "react";
import s from "./MainPage.module.css";

export const metadata: Metadata = {
  title: "Tennis racket store",
  description: "Tennis next js app",
};

const MainPage = async () => {
  return (
    <div className={s.root}>
      <Suspense fallback={<Loader />}>
        <RacketsMain />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <RacketsTop10 />
      </Suspense>
    </div>
  );
};
export default MainPage;
