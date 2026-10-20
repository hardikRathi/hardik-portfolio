import WorkCarousel from "./WorkCarousel.jsx";
import { profile, services, projects, experience, skills, education } from "./data.js";

const Section = ({ id, title, children }) => (
  <section id={id} className="section" aria-labelledby={`${id}-h`}>
    <h2 id={`${id}-h`}>{title}</h2>
    {children}
  </section>
);

export default function App() {
  const { links } = profile;
  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">{profile.name}</a>
        <nav aria-label="Main">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="btn small">Hire me</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="role">{profile.role}</p>
            <h1>{profile.headline}</h1>
            <p className="lead">{profile.intro}</p>
            <div className="actions">
              <a className="btn" href={`mailto:${profile.email}?subject=Project%20enquiry`}>Work with me</a>
              <a className="btn ghost" href="#work">See my work</a>
              {profile.resumeUrl && <a className="btn ghost" href={profile.resumeUrl} download>Download resume</a>}
            </div>
          </div>
          <div className="terminal" role="img" aria-label="Terminal summary of skills">
            <div className="bar"><i /><i /><i /></div>
            <pre>{`$ wp developer info

name        ${profile.name}
role        WordPress developer
experience  4 years
focus       WooCommerce, Core Web Vitals, plugins
payments    Stripe
data        REST API, GraphQL, HubSpot, ACF
status      open to roles and projects`}</pre>
          </div>
        </section>

        <Section id="services" title="What I can do for you">
          <div className="grid">
            {services.map((s) => (
              <article key={s.title} className="card">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="work" title="Selected work">
          <WorkCarousel projects={projects} />
        </Section>

        <Section id="experience" title="Experience">
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.company}>
                <div className="when">{e.period}</div>
                <div>
                  <h3>{e.role}, {e.company}</h3>
                  <p className="muted">{e.place}</p>
                  <ul>{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
          <p className="muted edu">{education}</p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="skills">
            {skills.map((g) => (
              <div key={g.group}>
                <h3>{g.group}</h3>
                <ul className="tags">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Let's talk">
          <p className="lead">Have a project, or a role that fits? Send a short note and I'll reply.</p>
          <div className="actions">
            <a className="btn" href={`mailto:${profile.email}`}>{profile.email}</a>
            {links.linkedin && <a className="btn ghost" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
            {links.github && <a className="btn ghost" href={links.github} target="_blank" rel="noreferrer">GitHub</a>}
            {links.wordpress && <a className="btn ghost" href={links.wordpress} target="_blank" rel="noreferrer">WordPress.org profile</a>}
          </div>
        </Section>
      </main>
      <footer className="footer">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}