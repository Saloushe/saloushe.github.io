export const siteConfig = {
  name: "Jonathan Zhao",
  title: "Software Engineer · Backend, Full-Stack & Applied AI",
  description:
    "Portfolio of Jonathan Zhao — MIT Computer Science & Engineering '26. Backend, full-stack, and applied-AI engineer.",
  accentColor: "#2563eb",
  social: {
    email: "jonnnny80@gmail.com",
    linkedin: "https://linkedin.com/in/joezhao888",
    twitter: "",
    github: "https://github.com/saloushe",
    resume: "/JonathanZhaoJul2026.pdf",
  },
  aboutMe:
    "I'm a Computer Science & Engineering new grad from MIT (June 2026) who likes building systems from the ground up — databases, ML internals, and full-stack products — where the hard part is the engineering, not the wrapper. I built a relational database engine in Go (GoDB) with 2PL transactions and a cost-based query optimizer, dug into model internals through BERT fine-tuning and sparse-autoencoder interpretability, and shipped production Python at the Simons Electron Microscopy Center and Duet. Right now I'm rebuilding WaitLess on a production stack (Postgres/PostGIS + Redis) to go deeper on the infrastructure. I'm looking for new-grad software engineering roles — open to NYC and remote, and happy to relocate for the right team.",
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "Go",
    "C",
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Redis",
    "MongoDB",
    "PyTorch",
    "AWS",
    "SQL",
    "Docker",
  ],
  projects: [
    {
      name: "GoDB — Relational Database Engine (Go)",
      description:
        "A relational database engine built from scratch: heap-file storage, buffer-pool management, and a full operator suite (filter, join, aggregation). Implements strict 2PL transactions with page-level locking and deadlock detection, plus a Selinger-style cost-based query optimizer using histogram selectivity for join ordering.",
      link: "",
      skills: ["Go", "Databases", "Query Optimization", "Concurrency"],
    },
    {
      name: "Why Transformers Miss Toxicity — NLP Interpretability",
      description:
        "Fine-tuned BERT on 300K+ examples across three toxicity corpora, then used sparse autoencoders to decompose residual-stream activations into 256 interpretable features, and TransformerLens to trace failure modes via attention-head ablation and activation patching.",
      link: "",
      skills: ["Python", "PyTorch", "BERT", "Interpretability"],
    },
    {
      name: "WaitLess — Real-Time Nightlife Crowdsourcing",
      description:
        "Full-stack venue crowdsourcing platform with Socket.io real-time updates and configurable alerts on wait-time and crowd conditions. Geospatial indexing for location-aware queries and background snapshots for peak-time forecasting. Currently being rebuilt on Postgres/PostGIS + Redis.",
      link: "https://github.com/saloushe/waitless",
      skills: ["React", "Node.js", "MongoDB", "Socket.io"],
    },
  ],
  experience: [
    {
      company: "Simons Electron Microscopy Center",
      title: "Software Engineering Intern",
      dateRange: "May 2025 – Aug 2025",
      bullets: [
        "Designed Cryo-Insight, a Python library enabling Leginon users to convert cryo-EM datasets into the EMinsight schema for downstream analysis workflows.",
        "Extended EMinsight with additional data-aggregation, reporting, and visualization features.",
      ],
    },
    {
      company: "Duet",
      title: "Backend Engineer",
      dateRange: "Nov 2024 – Feb 2025",
      bullets: [
        "Built a MusicXML parser and musical-signature identifier in Python (music21) — the core data pipeline for an AI sheet-music-writing copilot.",
      ],
    },
    {
      company: "MIT Media Lab — MIT Game Lab",
      title: "Undergraduate Researcher",
      dateRange: "Oct 2022 – June 2023",
      bullets: [
        "Designed player-facing ARG puzzles teaching DEI principles to high-school students, blending physical puzzle mechanics with a virtual presentation layer.",
      ],
    },
  ],
  education: [
    {
      school: "Massachusetts Institute of Technology (MIT)",
      degree: "B.S. in Computer Science and Engineering",
      dateRange: "2022 – 2026",
      achievements: [
        "GPA: 3.8",
        "Coursework: Operating Systems Engineering, Database Systems, Natural Language Processing, Design & Analysis of Algorithms, Computer Systems Engineering, Software Design",
      ],
    },
  ],
};