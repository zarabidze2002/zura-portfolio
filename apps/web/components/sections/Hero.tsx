import Image from "next/image";
import Link from "next/link";
import { about } from "@/data/about";

export default function Hero() {
    return (
        <header className="relative mx-auto w-full max-w-5xl px-6 pt-16 pb-14 text-center">
            {/* Avatar with soft ring */}
            <div className="mx-auto mb-6 h-40 w-40">
                <div className="relative h-full w-full overflow-hidden rounded-full ring-8 ring-primary-500/10 shadow-md">
                    <Image
                        src="/images/profile.jpg"
                        alt={`${about.name} — profile`}
                        fill
                        sizes="160px"
                        priority
                        className="object-cover"
                    />
                </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Hello, I’m {about.name} <span className="inline-block">👋</span>
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                {about.role} — {about.location}
            </p>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-700 dark:text-gray-300">
                {about.summary}
            </p>

            {/* CTA row: primary green first, secondary white second */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-medium shadow-soft bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                    View Projects
                </Link>
                <a
                    href="/Zura_Arabidze_React_Developer.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-medium shadow-soft border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                >
                    Download CV
                </a>
            </div>
        </header>
    );
}
