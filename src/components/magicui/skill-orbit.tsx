import { DATA } from "@/data/resume";
import { Sparkles } from "lucide-react";

const orbitSkills = DATA.skills;

export default function SkillOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[22rem] overflow-hidden rounded-full border bg-card/60 shadow-inner">
      <div className="absolute inset-[10%] rounded-full border border-dashed border-border/80 [animation:spin_24s_linear_infinite]">
        {orbitSkills.map((skill, index) => {
          const Icon = "icon" in skill ? skill.icon : null;
          const angle = (360 / orbitSkills.length) * index;

          return (
            <div
              key={skill.name}
              className="absolute left-1/2 top-1/2 -ml-5 -mt-5 flex size-10 items-center justify-center rounded-full border bg-background/90 p-2 text-muted-foreground shadow-sm"
              style={{ transform: `rotate(${angle}deg) translateY(-8.5rem)` }}
              title={skill.name}
            >
              {Icon ? (
                <Icon className="size-full rounded object-contain" />
              ) : (
                <Sparkles className="size-full" />
              )}
            </div>
          );
        })}
      </div>
      <div className="absolute inset-[25%] flex flex-col items-center justify-center rounded-full border bg-background/90 text-center shadow-lg">
        <div className="text-3xl font-black tracking-tighter">{orbitSkills.length}+</div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          tools in orbit
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,hsl(var(--muted)/0.18),transparent_70%)]" />
    </div>
  );
}