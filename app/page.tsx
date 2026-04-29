"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const NAV = [
  { id: "about",       label: "About"       },
  { id: "experience",  label: "Experience"  },
  { id: "work",        label: "Work"        },
  { id: "skills",      label: "Skills"      },
  { id: "credentials", label: "Credentials" },
  { id: "contact",     label: "Contact"     },
];

export default function Home() {
  const [active, setActive] = useState("about");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const els = NAV.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -80% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ─── Nav ──────────────────────────────────────────────── */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          {NAV.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${styles.navLink} ${active === id ? styles.navLinkActive : ""}`}
            >
              {label}
            </a>
          ))}
          <button
            className={styles.themeToggle}
            onClick={() => setTheme(t => t === "light" ? "dark" : "light")}
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </nav>

      <main>
        {/* ─── Hero / About ─────────────────────────────────── */}
        <section id="about" className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroTop}>
              <div className={styles.heroNames}>
                <h1 className={styles.name}>Patrick Aurelio</h1>
                <p className={styles.role}>Product Leadership | Product Design | 4x TEC Award-Winning Products </p>
                <p className={styles.summary}>
              Innovative product professional with 12+ years shaping
              award-winning software and hardware products. Expert in end-to-end product lifecycle
              leadership, from strategy, roadmap planning, and backlog orchestration to hands-on UX
              design leadership and technical collaboration with DSP / algorithm engineers. Known for
              driving industry-recognized launches and delivering user-centric workflows validated through rigorous user
              research. Adept at balancing feature innovation with technical debt and platform
              stability while influencing cross-functional stakeholders across design, engineering,
              and GTM teams.
            </p>
              </div>
              <Image
                src="/images/headshot_11-2026.jpeg"
                alt="Patrick Aurelio"
                width={120}
                height={120}
                className={styles.headshot}
                priority
              />
            </div>
            
          </div>
                 {/* ─── Selected Work ────────────────────────────────── */}
        <section id="work" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Selected Work</h2>
            <hr className={styles.rule} />

            <div className={styles.workItems}>

              <div className={styles.workItemFeatured}>
                <h3 className={styles.workTitle}>Opal Morphing Synthesizer</h3>
                <p className={styles.workMeta}>Universal Audio · TEC Award 2023 · Musical Instrument Software</p>
                <div className={styles.videoWrap}>
                  <iframe
                    src="https://www.youtube.com/embed/Jx7lQ7N9jYk"
                    title="Opal Morphing Synthesizer Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className={styles.workItem}>
                <div className={styles.workImageWrap}>
                  <Image
                    src="/images/products/apollo-twin.png"
                    alt="Apollo Twin"
                    width={140}
                    height={100}
                    className={styles.workImage}
                  />
                </div>
                <div className={styles.workInfo}>
                  <h3 className={styles.workTitle}>Apollo Twin</h3>
                  <p className={styles.workMeta}>Universal Audio · TEC Awards 2015 &amp; 2017 · Computer Audio Hardware</p>
                  <p className={styles.workDescription}>
                    Expansion of the Apollo line to the high-TAM prosumer segment. Two consecutive
                    TEC Awards for Computer Audio Hardware.
                  </p>
                </div>
              </div>

              <div className={styles.workItem}>
                <div className={styles.workImageWrap}>
                  <Image
                    src="/images/products/apollo-16.png"
                    alt="Apollo 16"
                    width={140}
                    height={100}
                    className={styles.workImage}
                  />
                </div>
                <div className={styles.workInfo}>
                  <h3 className={styles.workTitle}>Apollo 16</h3>
                  <p className={styles.workMeta}>Universal Audio · TEC Award 2014 · Computer Audio Hardware</p>
                  <p className={styles.workDescription}>
                    Flagship audio ecosystem scaling to 64-channel high-end B2B solutions.
                  </p>
                </div>
              </div>

            </div>

            <div className={styles.awardsBlock}>
              <p className={styles.awardsLabel}>Industry Awards</p>
              <div className={styles.awardsList}>
                <div className={styles.awardRow}>
                  <span className={styles.awardYear}>2023</span>
                  <span>TEC Award — Opal Morphing Synthesizer · Musical Instrument Software</span>
                </div>
                <div className={styles.awardRow}>
                  <span className={styles.awardYear}>2017</span>
                  <span>TEC Award — Apollo Twin USB · Computer Audio Hardware</span>
                </div>
                <div className={styles.awardRow}>
                  <span className={styles.awardYear}>2015</span>
                  <span>TEC Award — Apollo Twin · Computer Audio Hardware</span>
                </div>
                <div className={styles.awardRow}>
                  <span className={styles.awardYear}>2014</span>
                  <span>TEC Award — Apollo 16 · Computer Audio Hardware</span>
                </div>
              </div>
            </div>

          </div>
        </section>
        </section>

        {/* ─── Experience ───────────────────────────────────── */}
        <section id="experience" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Experience</h2>
            <hr className={styles.rule} />
            <div className={styles.arcItems}>

              <div className={styles.arcItem}>
                <span className={styles.arcRole}>Senior Product Designer, Platform &amp; Console Application</span>
                <span className={styles.arcOrg}>Universal Audio · Scotts Valley, CA (Remote) · 2025</span>
                <p className={styles.arcDescription}>
                  Navigated competing platform priorities across a portfolio spanning multiple market
                  segments. Owned design direction and roadmap for UA&apos;s Console application — the
                  primary interface through which users manage Apollo hardware, DSP routing, and
                  plugin chains in real-time studio and live contexts. Made and owned the
                  platform-level tradeoff decisions: influencing stakeholders across multiple
                  departments, balancing roadmap commitments against technical debt to preserve
                  trust and maximize customer delight.
                </p>
              </div>

              <div className={styles.arcItem}>
                <span className={styles.arcRole}>Senior Product Designer, Software Instruments</span>
                <span className={styles.arcOrg}>Universal Audio · Scotts Valley, CA (Remote) · 2020–2025</span>
                <p className={styles.arcDescription}>
                  Shipped award-winning virtual instruments including Opal Morphing Synthesizer:
                  TEC Award for Outstanding Technical Achievement in Musical Instrument Technology
                  (2023). Translated user research and product vision into feature priorities across
                  DSP engineering, GUI design, and marketing. Conducted sustained user research with
                  musicians and producers to validate design decisions and uncover workflow pain points.
                </p>
              </div>

              <div className={styles.arcItem}>
                <span className={styles.arcRole}>Product Manager, Software Instruments &amp; Platform</span>
                <span className={styles.arcOrg}>Universal Audio · Scotts Valley, CA (Remote) · 2016–2020</span>
                <p className={styles.arcDescription}>
                  Owned platform incubation work that made future instruments faster to ship,
                  identifying reusable architecture, defining requirements, and holding the
                  engineering investment against short-term feature pressure. Shipped Minimoog
                  Model D, establishing a new benchmark for analog emulation accuracy. Shipped
                  Ravel Grand Piano: a hybrid instrument combining deep multisampling with physical
                  modeling of sympathetic resonance behavior.
                </p>
              </div>

              <div className={styles.arcItem}>
                <span className={styles.arcRole}>Product Manager, Hardware (Audio Interfaces)</span>
                <span className={styles.arcOrg}>Universal Audio · Scotts Valley, CA · 2012–2016</span>
                <p className={styles.arcDescription}>
                  Drove upmarket and downmarket expansion of the Apollo interface line: managing
                  end-to-end product launch across physical product development, market positioning,
                  and platform coherence across segments with different customer models, price
                  points, and competitive contexts. Apollo 16: TEC Award 2014. Apollo Twin /
                  Apollo Twin USB: TEC Awards 2015 &amp; 2017.
                </p>
              </div>

              <div className={styles.arcItem}>
                <span className={styles.arcRole}>Product Designer, Keyboards &amp; MIDI Controllers</span>
                <span className={styles.arcOrg}>Avid / M-Audio · Irwindale, CA · 2011–2012</span>
                <p className={styles.arcDescription}>
                  Held product ownership across M-Audio&apos;s full MIDI controller line, coordinating
                  with international development teams across hardware development cycles. Defined
                  initial specifications for the Axiom AIR series.
                </p>
              </div>

              <div className={styles.arcItem}>
                <span className={styles.arcRole}>Creative Professional: Music</span>
                <span className={styles.arcOrg}>Patrick Scott</span>
                <p className={styles.arcDescription}>
                  Built and maintained a full-time professional DJ and production career lasting
                  more than a decade, navigating quickly shifting music trends. Authored and
                  produced original compositions licensed by premier global labels, achieving
                  A-list support from world-renowned artists. Diversified revenue across production,
                  copywriting for radio advertising, and editing/composing for stage productions.
                </p>
              </div>

            </div>
          </div>
        </section>

 

        {/* ─── Skills ───────────────────────────────────────── */}
        <section id="skills" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Skills</h2>
            <hr className={styles.rule} />
            <div className={styles.skillsItems}>

              <div className={styles.skillRow}>
                <span className={styles.skillCategory}>Product Management</span>
                <span className={styles.skillList}>Cross-Functional Leadership, AI-assisted Productivity, Product Positioning, Sprint Planning, UX Design Leadership, Agile/Scrum, PRDs</span>
              </div>

              <div className={styles.skillRow}>
                <span className={styles.skillCategory}>Tools</span>
                <span className={styles.skillList}>JIRA, Confluence, Figma, Notion, AI (primarily Anthropic)</span>
              </div>

              <div className={styles.skillRow}>
                <span className={styles.skillCategory}>Research &amp; Discovery</span>
                <span className={styles.skillList}>User Interviews, Product Analytics, Competitive Analysis</span>
              </div>

              <div className={styles.skillRow}>
                <span className={styles.skillCategory}>Audio &amp; Music Software</span>
                <span className={styles.skillList}>Music Production Workflows, DSP Concepts, MIDI, Audio Engineering</span>
              </div>

            </div>
          </div>
        </section>

        {/* ─── Credentials ──────────────────────────────────── */}
        <section id="credentials" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Credentials</h2>
            <hr className={styles.rule} />
            <div className={styles.credentialItems}>

              <div className={styles.credentialRow}>
                <span className={styles.credentialName}>AI Leadership &amp; Strategy</span>
                <span className={styles.credentialOrg}>Vanderbilt University / Coursera · 2026</span>
              </div>

              <div className={styles.credentialRow}>
                <span className={styles.credentialName}>Interaction Design Certification</span>
                <span className={styles.credentialOrg}>Cooper Professional Education (Cooper U)</span>
              </div>

              <div className={styles.credentialRow}>
                <span className={styles.credentialName}>Certified Scrum Master (CSM)</span>
                <span className={styles.credentialOrg}>Scrum Alliance</span>
              </div>

              <div className={styles.credentialRow}>
                <span className={styles.credentialName}>BFA</span>
                <span className={styles.credentialOrg}>School of the Art Institute of Chicago</span>
              </div>

            </div>
          </div>
        </section>

        {/* ─── Contact ──────────────────────────────────────── */}
        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionHeader}>Contact</h2>
            <hr className={styles.rule} />
            <p className={styles.contactIntro}>
              Open to conversations about the right opportunity.
            </p>
            <div className={styles.contactLinks}>
              <a href="mailto:psaurelio@icloud.com" className={styles.contactLink}>
                psaurelio@icloud.com
              </a>
              <a
                href="https://linkedin.com/in/patrickaurelio"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                linkedin.com/in/patrickaurelio
              </a>
              <a
                href="/docs/resume-04-2026.docx"
                download
                className={styles.contactLink}
              >
                Download Résumé
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ───────────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          Patrick Aurelio · Pittsburgh, PA
        </div>
      </footer>
    </>
  );
}
