import { projects } from "@/data/projects";
import Card from "../card";
import Button from "../button";

export default function ProjectsSection() {
    return (
        <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-12 scroll-mt-28">
            <h2 className="mb-6 text-3xl font-semibold">Projects</h2>
            <ul className="grid gap-6 md:grid-cols-3">
                {projects.map((p) => (
                    <li key={p.title}>
                        <Card className="flex h-full flex-col rounded-2xl">
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">{p.title}</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
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
                            </div>

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
        </section>
    );
}
