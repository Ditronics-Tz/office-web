import { insights } from "@/content/site";
import { CardCarousel, type CarouselCard } from "@/components/ui/card-carousel";

const cards: CarouselCard[] = insights.map((n) => ({
  tag: n.tag,
  meta: `${n.date} · ${n.readTime}`,
  title: n.title,
  summary: n.summary,
  href: n.href,
  figureLabel: `${n.tag} — note`,
  figureSrc: n.image,
}));

/** "Our latest insights" — Worley wp-related-news, fed by the insights feed. */
export function LatestInsights() {
  return (
    <CardCarousel
      title="Our latest insights"
      cards={cards}
      tone="paper"
      cta={{ label: "More from the studio", href: "/about" }}
    />
  );
}
