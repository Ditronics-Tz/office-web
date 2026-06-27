import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

/** Editorial section header: mono kicker, large serif title, optional lede. */
export function SectionHeader({
  kicker,
  title,
  intro,
  align = "left",
  className,
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "wide";
  className?: string;
}) {
  return (
    <Reveal className={cn(align === "left" && "max-w-3xl", className)}>
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-6 text-balance text-3xl sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {intro && <p className="lede mt-6 max-w-2xl">{intro}</p>}
    </Reveal>
  );
}
