import Link from "next/link";

export function Footer() {
    return (
        <footer className="flex h-[50px] w-full flex-wrap items-center justify-center gap-4 border-t border-[var(--border-color)] px-5 text-sm text-foreground sm:justify-between">
            <p className="items-center">
                &copy; {new Date().getFullYear()}{" "}
                <Link
                    aria-label={"Solvospace"}
                    className="font-semibold"
                    href={"https://solvospace.com"}
                    title={"Solvospace"}
                >
                    Solvospace
                </Link>
                .
            </p>
        </footer>
    );
}
