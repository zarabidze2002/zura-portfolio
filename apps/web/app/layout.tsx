import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
    title: "Zura Arabidze — Portfolio",
    description: "Front-End Engineer (React + TypeScript)"
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen">{children}</body>
        </html>
    );
}
