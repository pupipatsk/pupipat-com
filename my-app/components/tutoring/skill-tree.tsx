"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Calculator, Sigma, TrendingUp, Binary, Pi, BarChart } from "lucide-react"
import { cn } from "@/lib/utils"

interface SkillNode {
    id: string
    title: string
    icon: React.ReactNode
    description: string
    children?: SkillNode[]
}

const skillTreeData: SkillNode = {
    id: "math",
    title: "Mathematics",
    icon: <Calculator className="w-6 h-6" />,
    description: "The foundation of all sciences",
    children: [
        {
            id: "linear-algebra",
            title: "Linear Algebra",
            icon: <Binary className="w-6 h-6" />,
            description: "Vectors, Matrices, Spaces",
            children: [
                {
                    id: "ml-math",
                    title: "ML Math",
                    icon: <TrendingUp className="w-6 h-6" />,
                    description: "Optimization, Gradients",
                }
            ]
        },
        {
            id: "calculus",
            title: "Calculus",
            icon: <Pi className="w-6 h-6" />,
            description: "Limits, Derivatives, Integrals",
            children: [
                {
                    id: "diff-eq",
                    title: "Diff. Equations",
                    icon: <Sigma className="w-6 h-6" />,
                    description: "Modeling change",
                }
            ]
        },
        {
            id: "statistics",
            title: "Statistics",
            icon: <BarChart className="w-6 h-6" />,
            description: "Data analysis & Probability",
        }
    ]
}

const NodeCard = ({ node, isRoot = false }: { node: SkillNode; isRoot?: boolean }) => {
    return (
        <div className="flex flex-row items-center">
            <motion.div
                whileHover={{ scale: 1.05 }}
                className={cn(
                    "relative flex flex-col items-center justify-center w-48 h-32 p-4 border rounded-xl bg-card z-10 transition-colors duration-300 cursor-pointer",
                    isRoot ? "border-primary border-2 shadow-lg shadow-primary/20" : "border-border hover:border-primary/50"
                )}
            >
                <div className={cn("p-2 rounded-full mb-2", isRoot ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground")}>
                    {node.icon}
                </div>
                <h3 className="font-semibold text-sm text-center">{node.title}</h3>
                <p className="text-xs text-muted-foreground text-center mt-1 line-clamp-2">{node.description}</p>

                {/* Connector dot on the right */}
                {node.children && (
                    <div className="absolute -right-3 top-1/2 w-3 h-0.5 bg-border" />
                )}
                {/* Connector dot on the left (if not root) */}
                {!isRoot && (
                    <div className="absolute -left-3 top-1/2 w-3 h-0.5 bg-border" />
                )}
            </motion.div>

            {/* Children */}
            {node.children && (
                <div className="flex flex-col gap-8 ml-12 relative">
                    {/* Vertical line connecting children */}
                    {node.children.length > 1 && (
                        <div className="absolute -left-6 top-16 bottom-16 w-0.5 bg-border" />
                    )}

                    {node.children.map((child, index) => (
                        <div key={child.id} className="relative flex items-center">
                            {/* Horizontal line to child */}
                            <div className="absolute -left-6 w-6 h-0.5 bg-border" />
                            <NodeCard node={child} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export function SkillTree() {
    return (
        <div className="w-full overflow-x-auto py-12 px-4 scrollbar-hide">
            <div className="min-w-max flex items-center justify-center p-8">
                <NodeCard node={skillTreeData} isRoot />
            </div>
        </div>
    )
}
