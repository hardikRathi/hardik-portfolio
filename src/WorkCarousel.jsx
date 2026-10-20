import { useRef, useState } from "react";

function Shot({ project }) {
  const [broken, setBroken] = useState(!project.image);
  return (
    <div className="frame">
      <div className="bar"><i /><i /><i /><span className="addr">{new URL(project.url).host}</span></div>
      {broken ? (
        <div className="shot fallback">{project.title}</div>
      ) : (
        <img className="shot" src={project.image} alt={`Screenshot of ${project.title}`} onError={() => setBroken(true)} />
      )}
    </div>
  );
}

const Chevron = ({ dir }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
  </svg>
);

export default function WorkCarousel({ projects }) {
  const [i, setI] = useState(0);
  const startX = useRef(null);
  const n = projects.length;
  const go = (k) => setI((k + n) % n);
  const p = projects[i];

  return (
    <div
      className="carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label="Selected projects"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(i + 1);
        if (e.key === "ArrowLeft") go(i - 1);
      }}
      onTouchStart={(e) => { startX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (startX.current === null) return;
        const d = e.changedTouches[0].clientX - startX.current;
        if (Math.abs(d) > 50) go(i + (d < 0 ? 1 : -1));
        startX.current = null;
      }}
    >
      <div aria-live="polite">
        <article key={p.title} className="slide" aria-roledescription="slide" aria-label={`${i + 1} of ${n}`}>
          <Shot project={p} />
          <div className="slide-copy">
            <p className="kind">{p.kind}</p>
            <h3>{p.title}</h3>
            <p className="summary">{p.summary}</p>
            <p className="did"><strong>What I did</strong>{p.contribution}</p>
            <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            <a className="btn ghost small" href={p.url} target="_blank" rel="noreferrer">Visit site</a>
          </div>
        </article>
      </div>

      <div className="controls">
        <button className="icon-btn" onClick={() => go(i - 1)} aria-label="Previous project"><Chevron dir="left" /></button>
        <div className="dots">
          {projects.map((q, k) => (
            <button key={q.title} className={k === i ? "dot on" : "dot"} onClick={() => go(k)} aria-label={`Show ${q.title}`} aria-current={k === i} />
          ))}
        </div>
        <span className="count">{String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
        <button className="icon-btn" onClick={() => go(i + 1)} aria-label="Next project"><Chevron dir="right" /></button>
      </div>
    </div>
  );
}
