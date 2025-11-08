import Container from "../components/container";
import Button from "../components/button";
import Card from "../components/card";
import Section from "../components/section";
import Footer from "../components/footer";

const projects = [
    {
        title: "UI Components Kit",
        desc: "Reusable React + Tailwind components built for speed.",
        github: "https://github.com/zarabidze2002",
        live: "#"
    },
    {
        title: "Portfolio (this site)",
        desc: "Next.js 15, Turborepo, Tailwind, dark mode.",
        github: "https://github.com/zarabidze2002/zura-portfolio",
        live: "#"
    },
    {
        title: "Form Builder",
        desc: "Dynamic forms with schema + validation.",
        github: "https://github.com/zarabidze2002",
        live: "#"
    }
];

export default function Page() {
    return (
        <>
            {/* Hero */}
            <Container className="py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Hello, I’m Zura 👋</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Front-End Engineer — React + TypeScript Developer
                </p>
                <a href="#projects">
                    <Button className="mt-8">View Projects</Button>
                </a>
            </Container>

            {/* About */}
            <Section id="about" title="About">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I build clean, accessible interfaces with React + TypeScript. I care about performance,
                    DX, and creating UI systems that scale. Currently crafting my portfolio and open-source components.
                </p>
            </Section>

            {/* Projects */}
            <Section id="projects" title="Projects">
                <div className="grid gap-6 md:grid-cols-3">
                    {projects.map((p) => (
                        <Card key={p.title} title={p.title}>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
                            <div className="mt-4 flex gap-2">
                                <a href={p.github} target="_blank" rel="noreferrer">
                                    <Button variant="outline">GitHub</Button>
                                </a>
                                <a href={p.live} target="_blank" rel="noreferrer">
                                    <Button variant="subtle">Live</Button>
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Contact */}
            <Section id="contact" title="Contact">
                <p className="text-gray-600 dark:text-gray-300">
                    Open to roles and collaborations. Reach me at{" "}
                    <a href="mailto:zura.arabidze.2020@gmail.com" className="text-primary-600 dark:text-primary-400 underline">
                        zura.arabidze.2020@gmail.com
                    </a>.
                </p>
            </Section>

            <Footer />
        </>
    );
}
