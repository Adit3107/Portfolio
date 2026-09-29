import BlurFade from "@/components/magicui/blur-fade";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import {
  Boxes,
  Cpu,
  Database,
  Network,
  type LucideIcon,
} from "lucide-react";

const subjects: {
  code: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  concepts: string[];
  accent: string;
}[] = [
  {
    code: "01",
    name: "Object-oriented design",
    icon: Boxes,
    summary: "Shape complexity with clear boundaries and reusable behavior.",
    concepts: ["Abstraction", "Polymorphism", "SOLID"],
    accent: "text-amber-600 dark:text-amber-300",
  },
  {
    code: "02",
    name: "Database systems",
    icon: Database,
    summary: "Make data durable, queryable, and fast under real workloads.",
    concepts: ["Indexes", "Transactions", "Normalization"],
    accent: "text-sky-600 dark:text-sky-300",
  },
  {
    code: "03",
    name: "Operating systems",
    icon: Cpu,
    summary: "Understand the machine underneath every API and process.",
    concepts: ["Processes", "Memory", "Scheduling"],
    accent: "text-rose-600 dark:text-rose-300",
  },
  {
    code: "04",
    name: "Computer networks",
    icon: Network,
    summary: "Move bytes with intent, from packets to resilient services.",
    concepts: ["TCP/IP", "HTTP", "Congestion"],
    accent: "text-indigo-600 dark:text-indigo-300",
  },
];

const BLUR_FADE_DELAY = 0.04;

export default function CoreSubjectsSection() {
  return (
    <section id="core-systems" className="relative overflow-hidden">
      <FlickeringGrid
        className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
        squareSize={2}
        gridGap={5}
        flickerChance={0.08}
        maxOpacity={0.16}
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      />
      <div className="relative flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              The mental model
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Core systems I think in
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              The fundamentals behind the products I build, shown as the ideas
              I reach for when a problem gets interesting.
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-3 md:grid-cols-2">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;

            return (
              <BlurFade
                key={subject.name}
                delay={BLUR_FADE_DELAY * (10 + index * 0.5)}
              >
                <article className="group relative h-full overflow-hidden rounded-2xl border bg-card/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="absolute right-4 top-3 text-5xl font-black tracking-tighter text-foreground/[0.05] transition-transform duration-300 group-hover:scale-110">
                    {subject.code}
                  </div>
                  <div className="relative flex h-full flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div className={`rounded-xl border bg-background p-2.5 ${subject.accent}`}>
                        <Icon className="size-5" />
                      </div>
                      <div className="flex items-end gap-1" aria-hidden="true">
                        {["h-2", "h-4", "h-3", "h-6", "h-5"].map((height, barIndex) => (
                          <span
                            key={barIndex}
                            className={`w-1 rounded-full bg-current opacity-40 transition-all duration-300 group-hover:opacity-80 ${height} ${subject.accent}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold tracking-tight">{subject.name}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{subject.summary}</p>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {subject.concepts.map((concept) => (
                        <span
                          key={concept}
                          className="rounded-full border bg-background/70 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                        >
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}