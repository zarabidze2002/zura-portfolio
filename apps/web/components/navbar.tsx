"use client";
import { useTheme } from "../hooks/useTheme";
import { useActiveSection } from "../hooks/useActiveSection";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const { theme, toggle } = useTheme();
    const [open, setOpen] = useState(false);
    const active = useActiveSection();

    const links = [
        { href: "#about", id: "about", label: "About" },
        { href: "#projects", id: "projects", label: "Projects" },
        { href: "#contact", id: "contact", label: "Contact" },
    ] as const;

    return (
        <header className="sticky top-0 z-50 border-b border-gray-100/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
                <Link href="/" className="font-semibold text-xl text-primary-600 dark:text-primary-400">
                    Zura{' '}<span className="text-gray-700 dark:text-gray-300">Arabidze</span>
                </Link>

                {/* Mobile toggle */}
                <button
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

                {/* Links */}
                <ul
                    className={`${
                        open ? "absolute left-0 right-0 top-full mx-4 mt-2 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-soft md:static md:m-0 md:flex md:space-x-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none" : "hidden md:flex md:space-x-6"
                    } text-gray-700 dark:text-gray-200 font-medium`}
                    onClick={() => setOpen(false)}
                >
                    {links.map((link) => {
                        const isActive = active === link.id;
                        return (
                            <li key={link.href} className="relative">
                                <Link
                                    href={link.href}
                                    className={`block rounded-lg px-3 py-2 hover:text-primary-500 transition-colors ${
                                        isActive ? "text-primary-600 dark:text-primary-400" : ""
                                    }`}
                                >
                                    {link.label}
                                    {/* underline animation */}
                                    <span
                                        className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-0.5 rounded bg-primary-500 transition-all ${
                                            isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                                        }`}
                                        style={{ transformOrigin: "left" }}
                                    />
                                </Link>
                            </li>
                        );
                    })}
                    <li className="md:pl-2">
                        <button
                            onClick={toggle}
                            className="ml-0 md:ml-3 text-sm px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
