import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@picocss/pico/css/pico.min.css";
import "./styles/_globals.scss";
import "./styles/_variables.scss";
import Footer from "@components/footer";
import TopMenu from "@components/top-menu";
import App from "@components/App";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App>
          <TopMenu></TopMenu>
          <main className="container main-content">{children}</main>
          <Footer></Footer>
        </App>
      </body>
    </html>
  );
}
