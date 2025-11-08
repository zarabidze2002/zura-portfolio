import Footer from "../components/footer";
import Section from "../components/section";
import Card from "../components/card";
import Button from "../components/button";

import { about } from "@/data/about";
import { projects } from "@/data/projects";
import { contact } from "@/data/contact";
import { meta } from "@/data/meta";
import { socials } from "@/data/socials";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { skills } from "@/data/skills";

import Hero from "@/components/sections/Hero";

export const metadata = {
    title: meta.title,
    description: meta.description,
};

export default function Page() {
    return (
        <>
            {/* HERO */}
            <Hero />

            {/* ABOUT */}
            {about.highlights?.length ? (
                <Section
                    id="about"
                    title="About"
                    align="left"
                    subtitle="A few things I focus on when building products."
                >
                    <ul className="grid gap-3 md:grid-cols-3">
                        {about.highlights.map((h: string) => (
                            <li
                                key={h}
                                className="rounded-2xl border bg-white/60 p-4 text-sm text-gray-700 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-gray-300"
                            >
                                {h}
                            </li>
                        ))}
                    </ul>
                </Section>
            ) : null}

            {/* SKILLS */}
            {skills?.length ? (
                <Section
                    id="skills"
                    title="Skills"
                    align="left"
                    subtitle="Core technologies and tools I use day-to-day."
                >
                    <ul className="grid gap-4 md:grid-cols-3">
                        {skills.map((g: any) => (
                            <li
                                key={g.group}
                                className="rounded-2xl border bg-white/50 p-4 dark:border-neutral-800 dark:bg-neutral-900/50"
                            >
                                <h3 className="text-sm font-semibold">{g.group}</h3>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {g.items.map((it: string) => (
                                        <span
                                            key={it}
                                            className="rounded-md bg-gray-100 px-2 py-1 text-xs dark:bg-neutral-800"
                                        >
                      {it}
                    </span>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </Section>
            ) : null}

            {/* PROJECTS */}
            <Section
                id="projects"
                title="Projects"
                align="left"
                subtitle="Selected work: workflow tooling, reusable UI systems, and this site."
            >
                <ul className="grid gap-6 md:grid-cols-3">
                    {projects.map((p: any) => (
                        <li key={p.title} className="h-full">
                            <Card
                                className="flex h-full flex-col rounded-2xl"
                                title={p.title}
                            >
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {p.description}
                                </p>

                                {p.tech?.length ? (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {p.tech.map((t: string) => (
                                            <span
                                                key={t}
                                                className="rounded-md bg-gray-100 px-2 py-1 text-xs dark:bg-neutral-800"
                                            >
                        {t}
                      </span>
                                        ))}
                                    </div>
                                ) : null}

                                <div className="mt-4 flex gap-2">
                                    {p.github && (
                                        <a href={p.github} target="_blank" rel="noreferrer">
                                            <Button variant="outline">GitHub</Button>
                                        </a>
                                    )}
                                    {p.live && (
                                        <a href={p.live} target="_blank" rel="noreferrer">
                                            <Button variant="subtle">Live</Button>
                                        </a>
                                    )}
                                </div>
                            </Card>
                        </li>
                    ))}
                </ul>
            </Section>

            {/* EXPERIENCE */}
            {experience?.length ? (
                <Section
                    id="experience"
                    title="Experience"
                    align="left"
                    subtitle="Work history and impact highlights."
                >
                    <ul className="space-y-6">
                        {experience.map((job: any) => (
                            <li
                                key={`${job.company}-${job.period}`}
                                className="rounded-2xl border bg-white/60 p-5 dark:border-neutral-800 dark:bg-neutral-900/60"
                            >
                                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                                    <h3 className="text-lg font-semibold">
                                        {job.title} — {job.company}
                                    </h3>
                                    <span className="text-sm text-gray-500">{job.period}</span>
                                </div>

                                {job.stack?.length ? (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {job.stack.map((t: string) => (
                                            <span
                                                key={t}
                                                className="rounded-md bg-gray-100 px-2 py-1 text-xs dark:bg-neutral-800"
                                            >
                        {t}
                      </span>
                                        ))}
                                    </div>
                                ) : null}

                                {job.bullets?.length ? (
                                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
                                        {job.bullets.map((b: string, i: number) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </Section>
            ) : null}

            {/* EDUCATION */}
            {education?.length ? (
                <Section
                    id="education"
                    title="Education"
                    align="left"
                    subtitle="Degrees and certifications."
                >
                    <ul className="grid gap-4 md:grid-cols-2">
                        {education.map((e: any) => (
                            <li
                                key={`${e.school}-${e.period}`}
                                className="rounded-2xl border bg-white/60 p-5 dark:border-neutral-800 dark:bg-neutral-900/60"
                            >
                                <h3 className="text-base font-semibold">{e.school}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {e.degree}
                                </p>
                                <p className="text-xs text-gray-500">{e.period}</p>
                            </li>
                        ))}
                    </ul>
                </Section>
            ) : null}

            {/* CONTACT */}
            <Section
                id="contact"
                title="Contact"
                align="left"
                subtitle="Open to roles and collaborations."
            >
                <p className="text-gray-600 dark:text-gray-300">
                    {contact.note}{" "}
                    <a
                        href={`mailto:${contact.email}`}
                        className="text-primary-600 underline dark:text-primary-400"
                    >
                        {contact.email}
                    </a>
                    .
                </p>

                <div className="mt-6 flex gap-4 text-sm">
                    {socials?.github && (
                        <a
                            className="underline"
                            href={socials.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    )}
                    {socials?.linkedin && (
                        <a
                            className="underline"
                            href={socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    )}
                </div>
            </Section>

            <Footer />
        </>
    );
}
