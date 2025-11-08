type Props = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Card({ title, children, className = "" }: Props) {
    return (
        <div
            className={`rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg/40 focus-within:-translate-y-1 ${className}`}
            tabIndex={0}
        >
            {title ? <h3 className="mb-2 text-lg font-semibold">{title}</h3> : null}
            {children}
        </div>
    );
}

