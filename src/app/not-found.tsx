import { Button } from "@/components/ui/button";
import { Kicker } from "@/components/ui/kicker";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col justify-center py-24">
      <Kicker>Error 404</Kicker>
      <h1 className="mt-6 text-5xl sm:text-6xl">This page has moved on.</h1>
      <p className="lede mt-6 max-w-md">
        The page you were looking for is not here. Let&apos;s get you back to
        something useful.
      </p>
      <div className="mt-10">
        <Button href="/" withArrow>
          Back to home
        </Button>
      </div>
    </section>
  );
}
