import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Task Tracker",
  description: " task-tracking application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="from-cyan-15 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 ">
        {children}
      </body>
    </html>
  );
}
