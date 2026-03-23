"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

import Image from "next/image"

// Mock data for schools/universities
const SCHOOLS_DATA = [
    { name: "Chulalongkorn University", logo: "CU", image: "/logo/chula.svg" },
    { name: "Chula Engineering", logo: "CU ENG", image: "/logo/chula-engineering.png" },
    { name: "Chula Communication Arts", logo: "CU COMMARTS", image: "/logo/cu-commarts.png" },
    { name: "Chula International School of Engineering", logo: "CU ISE", image: "/logo/cu-ise.png" },
    { name: "Triam Udom Suksa School", logo: "TU", image: "/logo/triamudom.svg" },
    { name: "Suankularb Wittayalai School", logo: "SK", image: "/logo/sk.png" },
]

const SCHOOLS = [...SCHOOLS_DATA, ...SCHOOLS_DATA, ...SCHOOLS_DATA, ...SCHOOLS_DATA]

export function TrustedCarousel() {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, dragFree: true },
        [
            AutoScroll({
                playOnInit: true,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                speed: 1,
            }),
        ]
    )

    return (
        <div className="w-full py-12 bg-background">
            <div className="container mx-auto px-4 mb-8">
                <h2 className="text-2xl font-sans font-light text-center text-muted-foreground italic">
                    <span className="font-serif text-primary not-italic">Trusted</span> by students who come <span className="text-green-600">from</span> and <span className="text-green-600">accepted</span> to these institutions
                </h2>
            </div>

            <div className="border-y border-border bg-background">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex touch-pan-y">
                        {SCHOOLS.map((school, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_250px] min-w-0"
                            >
                                <Card className="h-40 flex items-center justify-center rounded-none border-0 border-r border-border shadow-none bg-transparent hover:bg-secondary/50 transition-colors duration-600 group">
                                    <CardContent className="flex flex-col items-center justify-center p-6 text-center w-full h-full relative">
                                        {school.image ? (
                                            <div className="relative w-20 h-20 transition-all duration-300 opacity-70 group-hover:opacity-100">
                                                <Image
                                                    src={school.image}
                                                    alt={school.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                                {school.logo}
                                            </div>
                                        )}
                                        <span className="text-xs mt-2 text-muted-foreground/70 group-hover:text-foreground transition-colors duration-300 absolute bottom-4">
                                            {school.name}
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
