import { Badge } from "@/components/ui/badge";

const programmingLanguages = [
  "Python",
  "SQL",
  "C++",
  "C",
  "HTML",
  "CSS",
  "LaTeX",
  "MATLAB",
  "Markdown",
];

const librariesAndTools = [
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Plotly",
  "Streamlit",
];

const applications = [
  "Excel",
  "Power BI",
  "Tableau",
  "Git",
  "GitHub",
  "Bloomberg Terminal",
];

const languages = ["Thai (Native)", "English"];

const certifications = [
  {
    title: "LangChain Academy",
    issuer: "LangChain",
    date: "October 2025",
    details: [
      {
        title: "Project: Deep Research with LangGraph",
        date: "",
      },
      {
        title: "Foundation: Introduction to LangGraph",
        date: "",
      },
    ],
  },
  {
    title: "KAsset Investment Bootcamp Season 2",
    issuer: "Kasikorn Asset Management ",
    date: "September 2025",
  },
  {
    title: "Google Business Intelligence Specialization",
    issuer: "Google",
    date: "August 2025",
  },
  {
    title: "Risk Management Specialization",
    issuer: "New York Institute of Finance",
    date: "June 2025",
  },
  {
    title: "Financial Engineering and Risk Management Specialization",
    issuer: "Columbia University",
    date: "November 2024",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University",
    date: "August 2024",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "July 2023",
  },
];

export default function SkillsSection() {
  return (
    <section className="mb-8 space-y-6">
      <h2 className="text-2xl font-bold">Skills & Certifications</h2>

      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-bold text-xl">Technical Skills</h3>
          <SkillGroup
            title="Programming languages"
            items={programmingLanguages}
          />
          <SkillGroup title="Libraries & Tools" items={librariesAndTools} />
          <SkillGroup title="Applications" items={applications} />
          <SkillGroup title="Languages" items={languages} />
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-xl">Certifications</h3>
          <ul className="space-y-4">
            {certifications.map((cert) => (
              <li key={cert.title} className="space-y-1">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <div className="font-serif font-medium">{cert.title}</div>
                  <span className="text-sm text-muted-foreground">
                    {cert.date}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {cert.issuer}
                </div>
                {Array.isArray(cert.details) && cert.details.length > 0 && (
                  <ul className="ml-5 list-disc text-sm text-muted-foreground">
                    {cert.details.map((detail) => (
                      <li key={detail.title}>
                        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                          <span>{detail.title}</span>
                          {detail.date && (
                            <span className="whitespace-nowrap">
                              {detail.date}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-sans font-medium">{title}</h4>
      <div className="mt-0 flex flex-wrap gap-2">
        {items.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="rounded-full font-mono text-sm font-light text-muted-foreground"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
