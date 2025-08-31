import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "AI Exam App (Dev)",
  description: "Next.js 15 + Tailwind baseline",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
