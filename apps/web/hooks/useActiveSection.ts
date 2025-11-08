"use client";
import { useEffect, useState } from "react";

const SECTION_IDS = ["about", "projects", "contact"] as const;
export type SectionId = typeof SECTION_IDS[number];

export function useActiveSection() {
    const [active, setActive] = useState<SectionId | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio - a.intersectionRatio))[0];
                if (visible?.target?.id) {
                    setActive(visible.target.id as SectionId);
                }
            },
            { rootMargin: "-20% 0px -60% 0px", threshold: [0.2, 0.6, 1] }
        );

        SECTION_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return active;
}
