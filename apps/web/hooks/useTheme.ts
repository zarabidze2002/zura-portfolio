"use client";
import { useEffect, useState } from "react";

export function useTheme() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const system = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        setTheme(stored ? (stored as "light" | "dark") : system);
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === "light" ? "dark" : "light");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return { theme, toggle: () => setTheme(theme === "light" ? "dark" : "light") };
}
