import React from "react";
import { motion } from "motion/react";

// ── Styles (injected once, matching the HTML reference) ──────────────────────
const marqueeStyles = `
  @keyframes scroll-left {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes scroll-right {
    0%   { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .ts-row {
    display: flex;
    width: 100%;
    overflow: hidden;
    margin-bottom: 12px;
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
    mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  }
  .ts-track {
    display: flex;
    gap: 12px;
    will-change: transform;
    flex-shrink: 0;
  }
  .ts-track--left  { animation: scroll-left  30s linear infinite; }
  .ts-track--right { animation: scroll-right 30s linear infinite; }
  .ts-row:hover .ts-track { animation-play-state: paused; }
  .ts-badge {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #111;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 14px 26px;
    font-size: 16px;
    font-weight: 500;
    color: #d1d5db;
    white-space: nowrap;
    flex-shrink: 0;
    transition: border-color 0.25s, background 0.25s;
    cursor: default;
    font-family: 'Inter', sans-serif;
  }
  .ts-badge:hover { border-color: #555; background: #1a1a1a; }
  .ts-badge img { width: 28px; height: 28px; object-fit: contain; }
`;

// ── Data ─────────────────────────────────────────────────────────────────────
interface Tech {
  name: string;
  icon: string;
  invert?: boolean;
}

const row1: Tech[] = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    invert: true,
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "ViteJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    invert: true,
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
];

const row2: Tech[] = [
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "ViteJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    invert: true,
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    invert: true,
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
];

// ── Badge ─────────────────────────────────────────────────────────────────────
const Badge = ({ tech }: { tech: Tech }) => (
  <div className="ts-badge">
    <img
      src={tech.icon}
      alt={tech.name}
      style={tech.invert ? { filter: "invert(1)" } : undefined}
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
    {tech.name}
  </div>
);

// ── Marquee row ───────────────────────────────────────────────────────────────
const MarqueeRow = ({
  items,
  direction,
}: {
  items: Tech[];
  direction: "left" | "right";
}) => {
  const doubled = [...items, ...items];
  return (
    <div className="ts-row">
      <div className={`ts-track ts-track--${direction}`}>
        {doubled.map((tech, i) => (
          <Badge key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
};

// ── Section ───────────────────────────────────────────────────────────────────
export const TechStack = () => (
  <section
    className="py-32 relative bg-neutral-950 border-t border-white/5"
    style={{ overflow: "hidden" }}
  >
    <style>{marqueeStyles}</style>

    {/* Background grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

    {/* Header */}
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8"
      >
        <div>
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-baseline gap-3">
              <span className="font-serif italic text-lg text-white">02</span>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">
                / Tech Stack
              </span>
            </div>
            <div className="h-px w-32 bg-gradient-to-r from-white/30 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-8xl font-medium tracking-tighter leading-[0.9]">
            Tools & <br />
            <span className="italic font-serif text-neutral-500">
              Technologies
            </span>
          </h2>
        </div>
      </motion.div>
    </div>

    {/* Marquee */}
    <div
      style={{
        position: "relative",
        zIndex: 10,
        overflow: "hidden",
        margin: "40px 0",
      }}
    >
      <MarqueeRow items={row1} direction="left" />
      <MarqueeRow items={row2} direction="right" />
    </div>

    {/* Note */}
    <p
      style={{
        marginTop: "20px",
        textAlign: "center",
        fontSize: "16px",
        color: "#b8b9bbff",
        padding: "0 20px",
        lineHeight: "1.7",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      ⓘ These are the technologies and tools I have worked with and explored,
      but my strongest expertise is in{" "}
      {/* <span style={{ color: "oklch(52.551% 0.25676 316.622)" }}> */}
      <span style={{ color: "white" }}>
        Python, Java, HTML, CSS, JavaScript, MySQL, Laravel, Django, and React
      </span>
      .
    </p>
  </section>
);
