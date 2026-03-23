import { Badge } from "@/components/ui/badge";

export default function InterestsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">Interests</h2>
      <div className="flex flex-wrap gap-2">
        {[
          "Business",
          "Economics",
          "Politics",
          "Books",
          "History",
          "Philosophy",
        ].map((interest) => (
          <Badge
            key={interest}
            variant="secondary"
            className="rounded-full font-mono text-sm font-light text-muted-foreground"
          >
            {interest}
          </Badge>
        ))}
      </div>
    </section>
  );
}
