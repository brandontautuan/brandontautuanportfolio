"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"

const codeContent = `// services.config.ts

interface ServiceConfig {
  name: string;
  description: string;
  stack: string[];
  availability: "open" | "limited" | "booked";
}

export const services: ServiceConfig[] = [
  {
    name: "Full-Stack Development",
    description: "End-to-end B2B SaaS product engineering",
    stack: ["Next.js", "TypeScript", "Go", "PostgreSQL"],
    availability: "open",
  },
  {
    name: "System Architecture",
    description: "Distributed systems design & optimization",
    stack: ["Kubernetes", "Terraform", "AWS", "Redis"],
    availability: "limited",
  },
  {
    name: "Technical Consulting",
    description: "Code reviews, audits & scaling strategy",
    stack: ["Performance", "Security", "DevOps"],
    availability: "open",
  },
];`

export function TerminalSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(codeContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="services" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Services
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What I deliver
          </h2>
        </div>

        {/* Terminal window */}
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
              </div>
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                services.config.ts
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-md px-2 py-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="Copy code"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span className="font-mono text-[11px]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span className="font-mono text-[11px]">Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Code content */}
          <div className="overflow-x-auto p-6">
            <pre className="font-mono text-sm leading-relaxed">
              <code>
                <Line n={1} content="// services.config.ts" cls="text-muted-foreground" />
                <Line n={2} content="" />
                <Line n={3}>
                  <span className="text-muted-foreground">{"interface "}</span>
                  <span className="text-foreground">{"ServiceConfig"}</span>
                  <span className="text-muted-foreground">{" {"}</span>
                </Line>
                <Line n={4}>
                  <span className="text-muted-foreground">{"  name"}</span>
                  <span className="text-muted-foreground/60">{": "}</span>
                  <span className="text-muted-foreground">{"string;"}</span>
                </Line>
                <Line n={5}>
                  <span className="text-muted-foreground">{"  description"}</span>
                  <span className="text-muted-foreground/60">{": "}</span>
                  <span className="text-muted-foreground">{"string;"}</span>
                </Line>
                <Line n={6}>
                  <span className="text-muted-foreground">{"  stack"}</span>
                  <span className="text-muted-foreground/60">{": "}</span>
                  <span className="text-muted-foreground">{"string[];"}</span>
                </Line>
                <Line n={7}>
                  <span className="text-muted-foreground">{"  availability"}</span>
                  <span className="text-muted-foreground/60">{": "}</span>
                  <span className="text-foreground/70">{'"open"'}</span>
                  <span className="text-muted-foreground">{" | "}</span>
                  <span className="text-foreground/70">{'"limited"'}</span>
                  <span className="text-muted-foreground">{" | "}</span>
                  <span className="text-foreground/70">{'"booked"'}</span>
                  <span className="text-muted-foreground">{";"}</span>
                </Line>
                <Line n={8} content="}" cls="text-muted-foreground" />
                <Line n={9} content="" />
                <Line n={10}>
                  <span className="text-muted-foreground">{"export const "}</span>
                  <span className="text-foreground">{"services"}</span>
                  <span className="text-muted-foreground">{": ServiceConfig[] = ["}</span>
                </Line>
                <Line n={11} content="  {" cls="text-muted-foreground" />
                <Line n={12}>
                  <span className="text-muted-foreground">{"    name: "}</span>
                  <span className="text-foreground/80">{'"Full-Stack Development"'}</span>
                  <span className="text-muted-foreground">{","}</span>
                </Line>
                <Line n={13}>
                  <span className="text-muted-foreground">{"    description: "}</span>
                  <span className="text-foreground/80">{'"End-to-end B2B SaaS product engineering"'}</span>
                  <span className="text-muted-foreground">{","}</span>
                </Line>
                <Line n={14}>
                  <span className="text-muted-foreground">{"    stack: ["}</span>
                  <span className="text-foreground/80">{'"Next.js"'}</span>
                  <span className="text-muted-foreground">{", "}</span>
                  <span className="text-foreground/80">{'"TypeScript"'}</span>
                  <span className="text-muted-foreground">{", "}</span>
                  <span className="text-foreground/80">{'"Go"'}</span>
                  <span className="text-muted-foreground">{", "}</span>
                  <span className="text-foreground/80">{'"PostgreSQL"'}</span>
                  <span className="text-muted-foreground">{"],"}</span>
                </Line>
                <Line n={15}>
                  <span className="text-muted-foreground">{"    availability: "}</span>
                  <span className="text-foreground/80">{'"open"'}</span>
                  <span className="text-muted-foreground">{","}</span>
                </Line>
                <Line n={16} content="  }," cls="text-muted-foreground" />
                <Line n={17} content="  {" cls="text-muted-foreground" />
                <Line n={18}>
                  <span className="text-muted-foreground">{"    name: "}</span>
                  <span className="text-foreground/80">{'"System Architecture"'}</span>
                  <span className="text-muted-foreground">{","}</span>
                </Line>
                <Line n={19}>
                  <span className="text-muted-foreground">{"    description: "}</span>
                  <span className="text-foreground/80">{'"Distributed systems design & optimization"'}</span>
                  <span className="text-muted-foreground">{","}</span>
                </Line>
                <Line n={20}>
                  <span className="text-muted-foreground">{"    stack: ["}</span>
                  <span className="text-foreground/80">{'"Kubernetes"'}</span>
                  <span className="text-muted-foreground">{", "}</span>
                  <span className="text-foreground/80">{'"Terraform"'}</span>
                  <span className="text-muted-foreground">{", "}</span>
                  <span className="text-foreground/80">{'"AWS"'}</span>
                  <span className="text-muted-foreground">{", "}</span>
                  <span className="text-foreground/80">{'"Redis"'}</span>
                  <span className="text-muted-foreground">{"],"}</span>
                </Line>
                <Line n={21}>
                  <span className="text-muted-foreground">{"    availability: "}</span>
                  <span className="text-foreground/80">{'"limited"'}</span>
                  <span className="text-muted-foreground">{","}</span>
                </Line>
                <Line n={22} content="  }," cls="text-muted-foreground" />
                <Line n={23} content="  {" cls="text-muted-foreground" />
                <Line n={24}>
                  <span className="text-muted-foreground">{"    name: "}</span>
                  <span className="text-foreground/80">{'"Technical Consulting"'}</span>
                  <span className="text-muted-foreground">{","}</span>
                </Line>
                <Line n={25}>
                  <span className="text-muted-foreground">{"    description: "}</span>
                  <span className="text-foreground/80">{'"Code reviews, audits & scaling strategy"'}</span>
                  <span className="text-muted-foreground">{","}</span>
                </Line>
                <Line n={26}>
                  <span className="text-muted-foreground">{"    stack: ["}</span>
                  <span className="text-foreground/80">{'"Performance"'}</span>
                  <span className="text-muted-foreground">{", "}</span>
                  <span className="text-foreground/80">{'"Security"'}</span>
                  <span className="text-muted-foreground">{", "}</span>
                  <span className="text-foreground/80">{'"DevOps"'}</span>
                  <span className="text-muted-foreground">{"],"}</span>
                </Line>
                <Line n={27}>
                  <span className="text-muted-foreground">{"    availability: "}</span>
                  <span className="text-foreground/80">{'"open"'}</span>
                  <span className="text-muted-foreground">{","}</span>
                </Line>
                <Line n={28} content="  }," cls="text-muted-foreground" />
                <Line n={29} content="];" cls="text-muted-foreground" />
                <Line n={30}>
                  <span className="animate-blink text-foreground">{"_"}</span>
                </Line>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

function Line({
  n,
  content,
  cls,
  children,
}: {
  n: number
  content?: string
  cls?: string
  children?: React.ReactNode
}) {
  return (
    <div className="flex">
      <span className="mr-6 inline-block w-6 select-none text-right text-muted-foreground/30">
        {n}
      </span>
      {children || <span className={cls}>{content}</span>}
    </div>
  )
}
