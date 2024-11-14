import { Metadata } from "next";
import Naviation from "../components/navigation";
import "../styles/global.css";
import setupLocatorUI from "@locator/runtime";

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "Movie recommendation using Next.js 14!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Naviation />
        {children}
      </body>
    </html>
  );
}
