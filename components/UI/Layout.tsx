import Heading from "@/components/UI/Heading";
import { Nunito_Sans } from "next/font/google";

type Props = {
  children: JSX.Element;
};

const nunito = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Layout({ children }: Props) {
  return (
    <>
      <Heading font={nunito} />
      <main
        className={`${nunito.variable} font-sans bg-neutral-500 dark:bg-neutral-200 min-h-[calc(100vh-5rem)] max-h-[90rem]`}
      >
        {children}
      </main>
    </>
  );
}
