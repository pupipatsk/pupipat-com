import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-2xl font-bold">Education</h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">Chulalongkorn University</h3>
            <span className="text-sm text-muted-foreground">2022 - 2026</span>
          </div>
          <p className="font-medium">
            Bachelor of Engineering — Computer Engineering Major
          </p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
            <li>
              <span>
                <span className="font-serif text-base not-italic text-foreground">
                  Teaching Assistant
                </span>{" "}
                - Programming Methodology course
              </span>
            </li>
            <li>
              <span>
                <span className="font-serif text-base not-italic text-foreground">
                  CU Finance Club
                </span>{" "}
                - Academic Team
              </span>
            </li>
          </ul>
          <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
            {[
              "Financial Engineering",
              "Thai Economy",
              "Law",
              "European Union Integration",
              "Pattern Recognition (Deep Learning)",
              "Natural Language Processing Systems (NLP)",
              "Algorithm & Data Structures",
              "Database Systems",
              "Optimization",
              "Statistics",
              "Linear Algebra",
              "Software Engineering",
            ].map((course) => (
              <Badge
                key={course}
                variant="outline"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                {course}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold">Triam Udom Suksa School</h3>
            <span className="text-sm text-muted-foreground">2019 - 2022</span>
          </div>
          <p className="font-medium">Science-Mathematics Major</p>
          <p className="text-muted-foreground">GPA: 3.85</p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
            <li>
              <span>
                <span className="font-serif text-base not-italic text-foreground">
                  Thailand Physics Olympiad (TPhO)
                </span>{" "}
                - Bronze Medal (19th TPhO), Participated (18th TPhO)
              </span>
            </li>
            <li>
              <span>
                <span className="font-serif text-base not-italic text-foreground">
                  Triam Udom Photo Club
                </span>{" "}
                - Staff and Member
              </span>
            </li>
          </ul>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Physics Olympiad
            </Badge>
            <Link
              href="./photography"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              <Badge
                variant="secondary"
                className="rounded-full font-mono text-sm font-light text-muted-foreground"
              >
                Photography <ExternalLink className="ml-1 h-3 w-3" />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
