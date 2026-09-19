export default function Home() {
    return (
        <section className="flex h-[calc(100vh-100px)] flex-col items-center justify-center p-8 text-center">
            <h1 className="mb-4 text-4xl font-bold sm:text-7xl">Solvospace</h1>
            <p className="mb-8 max-w-150 text-foreground sm:text-base">
                A place where things are built, solved, and refactored.
            </p>
        </section>
    );
}
