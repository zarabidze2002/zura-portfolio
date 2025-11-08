type Props = {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
};

export default function Section({ id, title, children, className = "" }: Props) {
    return (
        <section id={id} className={`scroll-mt-28 py-16 md:py-24 ${className}`}>
            <div className="mx-auto w-full max-w-5xl px-6">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
                <div className="mt-6">{children}</div>
            </div>
        </section>
    );
}

