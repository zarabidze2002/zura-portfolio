type Props = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Card({ title, children, className = "" }: Props) {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-soft ${className}`}>
      {title ? <h3 className="mb-2 text-lg font-semibold">{title}</h3> : null}
      {children}
    </div>
  );
}
