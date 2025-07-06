import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "CoolGus",
  description: "En lille, hyggelig og familiedrevet Sauna Gus bygget fra bunden og selv-hostet af ejeren. Saunaen har plads til 8 personer og byder på smuk udsigt, to koldtvandskar hvoraf det ene nedkøles til 0 grader, samt æteriske duftoplevelser via håndplukkede dufte, hældt over de varme sten for en autentisk gusoplevelse.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}