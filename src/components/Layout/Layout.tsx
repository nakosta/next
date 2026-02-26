import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { UserProvider } from "@/providers/UserProvider";
import { getUser } from "@/services/getUser";
import s from "./Layout.module.css";

export const Layout = async ({ children }: { children: React.ReactNode }) => {
  const { data } = await getUser();

  console.log(data);

  return (
    <UserProvider user={data}>
      <div className={s.root}>
        <Header />
        <main className={s.main}>{children}</main>
        <Footer />
      </div>
    </UserProvider>
  );
};
