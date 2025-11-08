import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "../components/navbar";

export const metadata = {
    title: "Zura Arabidze — Portfolio",
    description: "Front-End Engineer (React + TypeScript)",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        {children}
        </body>
        </html>
    );
}
