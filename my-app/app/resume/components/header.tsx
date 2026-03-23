import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ResumeHeader() {
  return (
    <>
      <div className="mb-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Pupipat Singkhorn</h1>
          <div className="mt-2 flex flex-col space-y-1 text-muted-foreground sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <span>📧 pupipat.sk@gmail.com</span>
            <span>📍 Bangkok, Thailand</span>
          </div>
        </div>
        <Button variant="outline" className="shrink-0" asChild>
          <Link href="/files/resume.pdf" download>
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Link>
        </Button>
      </div>
      {/* TODO: about text */}
      <p className="text-sm text-muted-foreground leading-relaxed text-justify">
        I am a Computer Engineering student at Chulalongkorn University. My
        academic and extracurricular journey has shaped my analytical thinking
        and fueled my passion for artificial intelligence, machine learning, and
        data science. I am driven to explore innovative solutions that integrate
        technology with real-world applications, particularly at the
        intersection of business, economics, technology, and investment. Outside
        my technical pursuits, I enjoy photography and engaging in discussions
        about philosophy, history, and politics, to broaden my perspective and
        inspire creative problem-solving.
      </p>
    </>
  );
}
