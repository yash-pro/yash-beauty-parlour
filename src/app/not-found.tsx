import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl font-serif font-bold text-gold mb-4">Page Not Found</h2>
            <p className="text-foreground/70 mb-8">Could not find requested resource</p>
            <Link
                href="/"
                className="px-8 py-3 bg-foreground text-white rounded-full font-medium hover:bg-foreground/90 transition-all"
            >
                Return Home
            </Link>
        </div>
    );
}
