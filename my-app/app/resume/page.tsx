import { Separator } from "@/components/ui/separator";
import ResumeHeader from "./components/header";
import EducationSection from "./components/education";
import WorkExperienceSection from "./components/work-experience";
import AchievementsSection from "./components/achievements";
import SkillsSection from "./components/skills";
import InterestsSection from "./components/interests";

export default function ResumePage() {
  return (
    <div className="container max-w-4xl py-12">
      <ResumeHeader />

      <Separator className="my-8" />

      <EducationSection />

      <Separator className="my-8" />

      <WorkExperienceSection />

      <Separator className="my-8" />

      <AchievementsSection />

      <Separator className="my-8" />

      <SkillsSection />

      <InterestsSection />
    </div>
  );
}
