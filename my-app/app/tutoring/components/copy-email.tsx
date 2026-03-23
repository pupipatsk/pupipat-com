"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

interface CopyEmailProps {
    email?: string
    className?: string
}

export function CopyEmail({ email = "pupipatsk@gmail.com", className }: CopyEmailProps) {
    const [copied, setCopied] = React.useState(false)

    const onCopy = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        toast.success("Email copied to clipboard!")
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className={cn("flex items-center justify-center pt-0", className)}>
            <div className="relative flex items-center w-full max-w-xs sm:max-w-xs">
                <Input
                    readOnly
                    value={email}
                    className="pr-12 h-11 bg-secondary/30 border-border/50 font-mono text-sm text-center text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 h-9 w-9 hover:bg-background/50 transition-colors"
                    onClick={onCopy}
                >
                    {copied ? (
                        <Check className="h-4 w-4 text-green-500" />
                    ) : (
                        <Copy className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="sr-only">Copy email</span>
                </Button>
            </div>
        </div>
    )
}
