import { Metadata } from "next"
import Naviation from "../components/navigation"

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies"
  },
  description: 'Movie recommendation using Next.js 14!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Naviation />{children}</body>
    </html>
  )
}
