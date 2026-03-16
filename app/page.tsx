"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Custom Cursor Component
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? "hover" : ""}`}
      style={{
        left: position.x - 10,
        top: position.y - 10,
      }}
    />
  );
}

// Hero Section Component
function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 pt-20">
      {/* Floating Shapes */}
      <motion.div
        style={{ y: y1 }}
        className="floating-shape floating-shape-1"
      />
      <motion.div
        style={{ y: y2 }}
        className="floating-shape floating-shape-2"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10"
      >
        <motion.p variants={itemVariants} className="text-accent font-body text-sm tracking-[0.3em] mb-6">
          WEB ENGINEER
        </motion.p>
        
        <motion.h1
          variants={itemVariants}
          className="font-heading text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.9] tracking-tight mb-6"
        >
          <span className="block">SYU</span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-muted font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          エンジニアリングの力で、美しくインタラクティブな
          <br className="hidden md:block" />
          プロダクト体験を創り出す。
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12">
          <a href="#philosophy" className="btn-primary">
            View More
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-muted rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Philosophy Marquee Component
function PhilosophyMarquee() {
  const philosophies = [
    "デザインの意図を深く理解する",
    "ピクセルパーフェクトな実装",
    "滑らかなインタラクション",
    "チームを越えたコミュニケーション",
    "パフォーマンスの最適化",
    "より良いユーザー体験",
  ];

  return (
    <section id="philosophy" className="py-24 overflow-hidden relative">
      <div className="mb-12 px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold">
          <span className="gradient-text">PHILOSOPHY</span>
        </h2>
      </div>

      {/* Marquee Row 1 */}
      <div className="marquee-container mb-4">
        <div className="marquee-content">
          {[...philosophies, ...philosophies].map((item, index) => (
            <div
              key={index}
              className="spotlight-card mx-4 px-8 py-6 flex-shrink-0 min-w-[300px]"
            >
              <p className="font-body text-lg text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="marquee-container">
        <div className="marquee-content-reverse">
          {[...philosophies, ...philosophies].reverse().map((item, index) => (
            <div
              key={index}
              className="spotlight-card mx-4 px-8 py-6 flex-shrink-0 min-w-[300px]"
            >
              <p className="font-body text-lg text-muted">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Project Card Component
interface Project {
  title: string;
  description: string;
  tech: string[];
  color: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "フルスタックECサイト。Next.js + Stripe + Supabase",
    tech: ["Next.js", "TypeScript", "Stripe", "Supabase"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Dashboard",
    description: "リアルタイムデータ可視化ダッシュボード",
    tech: ["React", "D3.js", "Python", "FastAPI"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Mobile App",
    description: "React Native クロスプラットフォームアプリ",
    tech: ["React Native", "Redux", "Firebase"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Design System",
    description: "エンタープライズ向けデザインシステム",
    tech: ["Storybook", "TypeScript", "Tailwind"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Real-time Chat",
    description: "WebSocket を使用したチャットアプリ",
    tech: ["Socket.io", "Node.js", "Redis"],
    color: "from-indigo-500 to-blue-500",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`spotlight-card p-6 flex flex-col justify-between group cursor-pointer ${
        index === 0 ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div>
        <div
          className={`h-2 w-12 bg-gradient-to-r ${project.color} rounded-full mb-4`}
        />
        <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-muted font-body text-sm">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-body bg-white/5 border border-white/10 rounded-full text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// Projects Section Component
function ProjectsSection() {
  return (
    <section className="py-24 px-6">
      <div className="mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">PROJECTS</span>
        </h2>
        <p className="text-muted font-body">
          技術とデザインのかけ合わせで、
          <br className="md:hidden" />
          価値を創出します。
        </p>
      </div>

      <div className="bento-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

// Skills Section Component
function SkillsSection() {
  const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "GraphQL",
    "Figma",
    "UI/UX",
  ];

  return (
    <section className="py-24 px-6">
      <div className="mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold">
          <span className="gradient-text">SKILLS</span>
        </h2>
      </div>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="px-6 py-3 font-body text-lg bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com" },
    { name: "Wantedly", url: "https://www.wantedly.com" },
    { name: "Email", url: "mailto:hello@syu.dev" },
  ];

  return (
    <footer className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="font-heading text-[clamp(2rem,8vw,6rem)] font-bold leading-tight">
            LET&apos;S
            <br />
            <span className="gradient-text">CREATE</span>
            <br />
            TOGETHER
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xl text-muted hover:text-accent transition-colors link-hover"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-muted font-body text-sm">
            <p>© 2024 Syu. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Background Effects */}
      <div className="mesh-gradient" />
      <div className="noise-overlay" />
      
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <PhilosophyMarquee />
        <ProjectsSection />
        <SkillsSection />
        <Footer />
      </main>
    </>
  );
}
