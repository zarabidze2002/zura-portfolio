type Props = {
    id: string;
    title?: string;
    children: React.ReactNode;
    className?: string;

    // new (all optional, fully backward-compatible)
    eyebrow?: string;
    subtitle?: string;
    align?: "left" | "center";
    actions?: React.ReactNode;
    containerClassName?: string;
    titleClassName?: string;
};

export default function Section({
                                    id,
                                    title,
                                    children,
                                    className = "",
                                    eyebrow,
                                    subtitle,
                                    align = "left",
                                    actions,
                                    containerClassName = "",
                                    titleClassName = "",
                                }: Props) {
    const titleId = `${id}-title`;

    return (
        <section
            id={id}
            aria-labelledby={title ? titleId : undefined}
            className={`scroll-mt-28 py-16 md:py-24 ${className}`}
        >
            <div className={`mx-auto w-full max-w-5xl px-6 ${containerClassName}`}>
                {(eyebrow || title || subtitle || actions) && (
                    <div className={align === "center" ? "text-center" : ""}>
                        {eyebrow ? (
                            <p className="text-sm font-medium text-primary-600">{eyebrow}</p>
                        ) : null}

                        {title ? (
                            <h2
                                id={titleId}
                                className={`text-2xl md:text-3xl font-semibold tracking-tight ${titleClassName}`}
                            >
                                {title}
                            </h2>
                        ) : null}

                        {subtitle ? (
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{subtitle}</p>
                        ) : null}

                        {actions ? (
                            <div
                                className={`mt-6 flex gap-2 ${
                                    align === "center" ? "justify-center" : ""
                                }`}
                            >
                                {actions}
                            </div>
                        ) : null}
                    </div>
                )}

                <div className={`${title || subtitle || eyebrow || actions ? "mt-6" : ""}`}>
                    {children}
                </div>
            </div>
        </section>
    );
}
