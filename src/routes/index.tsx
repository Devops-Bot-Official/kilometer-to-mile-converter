import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { kilometresToMiles } from "@/lib/conversion";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kilometres to Miles — Distance Converter" },
      { name: "description", content: "Convert kilometres to miles instantly, with results to two decimal places." },
      { property: "og:title", content: "Kilometres to Miles — Distance Converter" },
      { property: "og:description", content: "A simple, precise kilometres to miles converter." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  const [kilometres, setKilometres] = useState("10");
  const miles = kilometresToMiles(kilometres);
  return (
    <div className="distance-page">
      <header className="distance-header">
        <div className="distance-brand"><span className="brand-symbol"><MoveUpRight size={20} strokeWidth={2.5} /></span> distance<span className="brand-dot">.</span></div>
        <span className="header-caption">A LITTLE LESS CALCULATION.</span>
      </header>
      <main className="converter">
        <div className="eyebrow"><span className="status-dot" /> THE DISTANCE CONVERTER</div>
        <h1>Kilometres <span>to miles<ArrowUpRight aria-hidden="true" /></span></h1>
        <div className="conversion-body">
          <div className="input-heading"><label htmlFor="kilometres">Kilometres</label><span className="unit-caption">METRIC</span></div>
          <div className="distance-input-wrap">
            <Input id="kilometres" type="number" step="any" inputMode="decimal" value={kilometres} onChange={(event) => setKilometres(event.target.value)} className="distance-input" />
            <span className="input-unit">km</span>
          </div>
          <div className="conversion-divider"><span><ArrowDown size={19} /></span><div /></div>
          <div className="result-heading"><span>Miles</span><span className="unit-caption">IMPERIAL</span></div>
          <output htmlFor="kilometres" aria-live="polite" className="distance-result">{miles ?? "—"}<span> miles</span></output>
          <div className="ruler" aria-hidden="true">{Array.from({ length: 51 }, (_, i) => <span key={i} className={i % 10 === 0 ? "major-tick" : i % 5 === 0 ? "medium-tick" : ""} />)}</div>
          <div className="ruler-labels" aria-hidden="true"><span>0</span><span>10</span><span>20</span><span>30</span><span>40</span><span>50</span></div>
        </div>
        <footer className="converter-footer"><span>1 km = 0.621371 miles</span><span>THERE & BACK.</span></footer>
      </main>
      <footer className="page-footer"><span>Different units. Same journey.</span><span>km <span className="footer-arrow">→</span> mi</span></footer>
    </div>
  );
}
