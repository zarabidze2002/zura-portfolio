import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "subtle";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-medium transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-soft";

const variants: Record<Variant, string> = {
  primary: "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500",
  outline: "border border-gray-300 text-gray-900 bg-white hover:bg-gray-50 focus:ring-gray-300",
  subtle: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300",
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
