"use client";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const { theme, toggle } = useTheme();
    const [open, setOpen] = useState(false);

    const links = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
                <Link href="/" className="font-semibold text-xl text-primary-600 dark:text-primary-400">
                    Zura<span className="text-gray-700 dark:text-gray-300">.dev</span>
                </Link>

                <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

                <ul
                    className={`${
                        open ? "block" : "hidden"
                    } md:flex space-y-3 md:space-y-0 md:space-x-6 text-gray-700 dark:text-gray-200 font-medium`}
                >
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="hover:text-primary-500">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={toggle}
                            className="ml-3 text-sm px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
