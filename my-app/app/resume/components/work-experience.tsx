import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Instagram } from "lucide-react";

export default function WorkExperienceSection() {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-2xl font-bold">Work Experience</h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold flex flex-wrap items-center gap-2">
              <span>Quantitative Research Intern — Soberin</span>
              <Link
                href="https://soberin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground underline-offset-4 hover:underline"
              >
                <span className="text-sm text-muted-foreground font-sans font-extralight">
                  soberin.com
                </span>
              </Link>
            </h3>
            <span className="text-sm text-muted-foreground">
              August 2025 - October 2025
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Market Microstructure
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Cryptocurrency
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Quantitative Research
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold flex flex-wrap items-center gap-2">
              <span>Risk Management Analyst Intern — SCBX</span>
              <Link
                href="https://www.scbx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground underline-offset-4 hover:underline"
              >
                <span className="text-sm text-muted-foreground font-sans font-extralight">
                  scbx.com
                </span>
              </Link>
            </h3>
            <span className="text-sm text-muted-foreground">
              May 2025 - July 2025
            </span>
          </div>
          <div className="space-y-2">
            <div>
              <h4 className="font-medium">Article on scbx.com</h4>
              <ul className="ml-5 my-1 list-disc text-sm text-muted-foreground">
                <li>
                  <Link
                    href="https://www.scbx.com/th/team-and-activity/life-at-scbx-internship/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-foreground underline-offset-4 hover:underline"
                  >
                    Life at SCBX Internship: Every Intern Leaves Something That
                    Matters.
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Enterprise Risk Management
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Business Process Improvement
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full font-mono text-sm font-light text-muted-foreground"
            >
              Operational Risk
            </Badge>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="font-bold flex flex-wrap items-center gap-2">
              <span>Data Scientist Intern — Kiatnakin Phatra Bank</span>
              <Link
                href="https://bank.kkpfg.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground underline-offset-4 hover:underline"
              >
                <span className="text-sm text-muted-foreground font-sans font-extralight">
                  kkpfg.com
                </span>
              </Link>
            </h3>
            <span className="text-sm text-muted-foreground">
              June 2024 - July 2024
            </span>
          </div>
          <div className="space-y-2">
            <div>
              <h4 className="font-medium">Used Car Price Forecasting</h4>
              <ul className="ml-5 list-disc text-sm text-muted-foreground">
                <li>
                  Developed ensemble machine learning models to forecast used
                  car prices, aiding strategic decisions for automotive loan
                  approvals.
                </li>
                <li>
                  Collected and cleaned real-world business data, incorporating
                  macro- and micro-economic factors.
                </li>
                <li>
                  Leveraged time-series analysis and Bayesian optimization
                  techniques for enhanced accuracy.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Loss On Sale Forecasting for NPLs</h4>
              <ul className="ml-5 list-disc text-sm text-muted-foreground">
                <li>
                  Built predictive models to estimate losses on Non-Performing
                  Loans (NPLs), improving the bank's credit risk management.
                </li>
                <li>
                  Applied techniques like coarse classing, binning, and memory
                  optimization to improve performance.
                </li>
              </ul>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="rounded-full font-mono text-sm font-light text-muted-foreground"
                >
                  Machine Learning
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full font-mono text-sm font-light text-muted-foreground"
                >
                  Time-Series
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full font-mono text-sm font-light text-muted-foreground"
                >
                  Credit Risk Analytics
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">Freelance</h3>
          <div className="space-y-2">
            <div>
              <h4 className="font-medium">Physics & Mathematics Tutor</h4>
              <div className="text-sm text-muted-foreground">
                Provided Physics and Mathematics lessons for Physics Olympiad
                camps, university admissions, and high school preparation.
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <Link
                  href="./tutoring"
                  className="rounded-full font-mono text-sm font-light text-muted-foreground"
                >
                  <Badge
                    variant="secondary"
                    className="rounded-full font-mono text-sm font-light text-muted-foreground"
                  >
                    Tutoring <ExternalLink className="ml-1 h-3 w-3" />
                  </Badge>
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-medium">Photographer</h4>
              <p className="text-sm text-muted-foreground">
                Photographed various events and private sessions.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Link
                  href="https://www.instagram.com/pupick.sk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge
                    variant="secondary"
                    className="rounded-full font-mono text-sm font-light text-muted-foreground hover:text-foreground"
                  >
                    <Instagram className="mr-1 h-3 w-3" /> pupick.sk
                  </Badge>
                </Link>
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
        </div>
      </div>
    </section>
  );
}
