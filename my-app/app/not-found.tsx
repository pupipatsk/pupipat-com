import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container max-w-2xl py-16">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        The link you followed may be broken, or the page may have moved.
      </p>

      <div className="mt-6">
        <Link
          href="/"
          className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted/50"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}

