export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
            <div className="mx-auto max-w-5xl px-6 text-sm text-gray-500 dark:text-gray-400 flex items-center justify-between">
                <span>© {new Date().getFullYear()} Zura Arabidze</span>
                <a
                    href="https://github.com/zarabidze2002"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary-500"
                >
                    GitHub ↗
                </a>
            </div>
        </footer>
    );
}
