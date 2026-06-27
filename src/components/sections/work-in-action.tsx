import { projects } from "@/content/site";
import { CardCarousel, type CarouselCard } from "@/components/ui/card-carousel";

const cards: CarouselCard[] = projects.map((p) => ({
  tag: p.sector.split("·")[0].trim(),
  meta: `${p.year} · Case study`,
  title: p.name,
  summary: p.summary,
  href: `/projects#${p.slug}`,
  figureLabel: `${p.name} — screen`,
  figureSrc: p.image,
}));

/** "Our work in action" — Worley wp-related-news, fed by projects. */
export function WorkInAction() {
  return <CardCarousel title="Our work in action" cards={cards} cta={{ label: "View all projects", href: "/projects" }} />;
}
