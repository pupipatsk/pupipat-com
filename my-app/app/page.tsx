import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-16 pb-12 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
            <div className="order-2 flex flex-col justify-center space-y-4 mx-auto lg:ml-16 lg:mx-0 lg:order-1">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pupipat Singkhorn
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Computer Engineering Student
                </p>
              </div>
              <p className="max-w-[600px] text-muted-foreground">
                I'm a Computer Engineering student at Chulalongkorn University
                with a passion for data science, machine learning, and financial
                technology. Currently focused on developing skills in risk
                management and quantitative analysis.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/resume">
                    View Resume <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/photography">
                    View Photography <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="order-1 aspect-square overflow-hidden rounded-full border border-border mx-auto lg:mr-16 lg:mx-0 lg:order-2">
              <Image
                src="/profile/profile-photo.png"
                width={450}
                height={450}
                alt="Portrait of Pupipat Singkhorn"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
