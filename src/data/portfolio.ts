export interface SocialLink {
  platform: string
  url: string
  label: string
  iconName: 'github' | 'linkedin' | 'twitter' | 'mail' | 'website'
}

export interface ProfileData {
  name: string
  title: string
  location: string
  bio: string
  socials: SocialLink[]
}

export interface ExperienceData {
  id: string
  role: string
  company: string
  companyUrl?: string
  period: string
  location?: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface SkillCategoryData {
  category: string
  description: string
  skills: string[]
}

export type ProjectType = 'Website' | 'Mobile' | 'Desktop App'
export type ProjectScope = 'Personal' | 'Private' | 'Requirement' | 'Public'

export interface ProjectData {
  id: string
  title: string
  type: ProjectType
  scope: ProjectScope
  tags: string[]
  featured?: boolean
  highlights: string[]
  description?: string
  liveUrl?: string
  githubUrl?: string
}

export const portfolioData: {
  profile: ProfileData
  experiences: ExperienceData[]
  skillCategories: SkillCategoryData[]
  projects: ProjectData[]
} = {
  profile: {
    name: "Greg Gregorio",
    title: "Full-Stack Software Developer",
    location: "Metro Manila, Philippines",
    bio: "I'm a self-taught programmer who loves logic, algorithms, and cracking problems. I'm always eager to learn something new, and I like building tools that make life easier.",
    socials: [
      {
        platform: "GitHub",
        url: "https://github.com/SRNM21",
        label: "github.com/SRNM21",
        iconName: "github",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/gregorio-greg/",
        label: "linkedin.com/in/gregorio-greg",
        iconName: "linkedin",
      },
      {
        platform: "Email",
        url: "mailto:ninogregigregorio@gmail.com",
        label: "ninogregigregorio@gmail.com",
        iconName: "mail",
      },
    ],
  },

  experiences: [
    {
      id: "exp-1",
      role: "Full-Stack Software Developer",
      company: "Freelance",
      period: "January 2026 - Present",
      location: "Remote",
      description: "Architected and delivered custom software systems across web, mobile, desktop, and command-line interfaces.",
      achievements: [
        "Built more than 10+ end-to-end systems including web, mobile, desktop, and CLI applications.",
        "Engineered full-stack and cross-platform solutions leveraging Flutter, React, Laravel, Java, and Python.",
      ],
      technologies: ["Flutter", "React", "Laravel", "Java", "Python", "Full-Stack"],
    },
    {
      id: "exp-2",
      role: "Full-Stack Software Developer Intern",
      company: "MIA Ventures Services OPC",
      period: "February 2026 - May 2026",
      location: "Hybrid",
      description: "Engineered internal frameworks, employee management desktop applications, and high-volume data migration pipelines.",
      achievements: [
        "Built a custom PSR-4 compliant PHP framework modeled after Laravel with essential classes for localhost use, implementing role-based access control (RBAC) across two team leader offices and a real-time cloud database dashboard tracking admin-encoded client data.",
        "Developed a Java desktop application for employee management backed by a local database.",
        "Wrote an automated Python migration script that successfully transferred more than 70,000 rows of complex 2025 client data from Excel spreadsheets into a cloud database.",
      ],
      technologies: ["PHP", "PSR-4", "Laravel Architecture", "Java", "Python", "MariaDB / Cloud DB", "RBAC", "Data Migration"],
    },
  ],

  skillCategories: [
    {
      category: "Programming Languages",
      description: "Core languages for multi-platform, system, desktop, and web development.",
      skills: [
        "Python",
        "Java",
        "C++",
        "C#",
        "VB.NET",
        "JavaScript",
        "TypeScript",
        "PHP",
        "Dart",
        "HTML",
        "CSS",
      ],
    },
    {
      category: "Frameworks and Libraries",
      description: "Modern frameworks for web, mobile, and user interface development.",
      skills: [
        "Laravel",
        "React",
        "TanStack",
        "jQuery",
        "Flutter",
        "Tailwind CSS",
        "shadcn/ui",
      ],
    },
    {
      category: "Databases and Backend",
      description: "Relational persistence, cloud storage, and database management.",
      skills: [
        "MariaDB",
        "MySQL",
        "PostgreSQL",
        "Supabase",
        "JWT",
        "OAuth"
      ],
    },
    {
      category: "Tools and AI",
      description: "Development environments, UI/UX design tools, and AI workflows.",
      skills: [
        "Figma",
        "Android Studio",
        "Visual Studio",
        "VS Code",
        "Gemini",
        "Claude",
        "ChatGPT",
      ],
    },
    {
      category: "Concepts and Practices",
      description: "Software architecture patterns, engineering principles, and automation.",
      skills: [
        "MVC Pattern",
        "Object-Oriented Programming (OOP)",
        "Separation of Concerns",
        "Design Patterns",
        "SOLID Principles",
        "Automation",
        "Scripting",
      ],
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "Logic Gates Visualization",
      type: "Website",
      scope: "Personal",
      tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Zustand", "HTML5 Canvas"],
      highlights: [
        "Interactive digital circuit simulator built on HTML5 Canvas and backed by Zustand state management for responsive logic simulation.",
        "Modular visual components supporting inputs (constants, toggle switches, buttons), processes (BUFFER, AND, NAND, OR, NOR, XOR, XNOR), and outputs (bulbs, LEDs, 7-segment displays).",
        "Real-time signal propagation engine delivering instant visual updates and state evaluation across multi-gate wiring configurations.",
      ],
    },
    {
      id: "proj-2",
      title: "Tiktok Product Scraping App (TPSA)",
      type: "Mobile",
      scope: "Personal",
      tags: ["Flutter", "Dart", "Web Scraping", "Data Pipeline"],
      highlights: [
        "Mobile scraping utility developed in Flutter engineered for automated extraction of TikTok apparel and merchandise product data.",
        "Captures deep product intelligence including pricing, ratings, reviews, materials, variants, pair suggestions, sales volume, and merchant analytics.",
        "Seamlessly synchronizes scraped catalog payloads directly into a database connected to the TPMS web management system.",
      ],
    },
    {
      id: "proj-3",
      title: "Tiktok Product Management System (TPMS)",
      type: "Website",
      scope: "Personal",
      tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "TanStack", "Web Scraping"],
      highlights: [
        "Full-featured e-commerce catalog dashboard built with React, TanStack, and Supabase to inspect and organize scraped TikTok apparel via table and grid views.",
        "Dynamic outfit curation suite allowing users to pair tops, pants, shoes, and accessories into synchronized multi-piece ensembles (ternos).",
        "Integrated batch-scraping pipeline supporting high-throughput ingestion and automated database storage alongside TPSA.",
      ],
    },
    {
      id: "proj-4",
      title: "Keysi Notes",
      type: "Mobile",
      scope: "Personal",
      tags: ["Flutter", "Dart", "SQLite", "Data Encryption", "Hashing"],
      highlights: [
        "Secure mobile note and task management application developed in Flutter featuring end-to-end database and content encryption.",
        "Encrypted private vault providing secure, hidden storage for confidential personal notes, lists, and documents.",
        "Integrated calendar and event manager with hierarchical folder organization to streamline scheduling and deadline tracking.",
      ],
    },
    {
      id: "proj-5",
      title: "Communication Tool for the Deaf and Mute",
      type: "Mobile",
      scope: "Requirement",
      tags: ["Flutter", "Dart", "Accessibility", "Speech-to-Text", "Text-to-Speech", "SQLite", "Machine Learning", "Image Recognition"],
      highlights: [
        "Assistive capstone mobile application in Flutter empowering Deaf and Mute users to communicate via sign language gesture presets and text-to-speech synthesis.",
        "Bidirectional speech-to-text translation engine supporting natural voice replies in both English and Tagalog.",
        "Offline-first local database caching custom communication presets and personalized voice recordings contributed by family members.",
      ],
    },
    {
      id: "proj-6",
      title: "Barangay Information System of San Nicolas",
      type: "Website",
      scope: "Private",
      tags: ["PHP", "jQuery", "MariaDB", "HTML5/CSS3", "Admin Automation"],
      highlights: [
        "Administrative community web platform engineered using PHP, jQuery, and MariaDB to digitize resident records and automate public municipal services.",
        "Automated document processing engine generating standardized barangay clearances, residency certificates, and community permits.",
        "Centralized relational database architecture delivering fast resident indexing, demographic reporting, and administrative record keeping.",
      ],
    },
    {
      id: "proj-7",
      title: "GKB Pharmacy Point-of-Sale System",
      type: "Desktop App",
      scope: "Requirement",
      tags: ["VB.NET", "MariaDB", "POS System", "Desktop GUI", "RBAC"],
      highlights: [
        "Enterprise desktop POS system developed in VB.NET with comprehensive role-based access control (RBAC) for inventory, staff, and supplier management.",
        "Automated transaction checkout with real-time stock deductions, restock threshold alerts, and printable itemized invoice generation.",
        "Robust MariaDB relational database integration tracking daily sales audits and inventory movement with sub-second retrieval.",
      ],
    },
    {
      id: "proj-8",
      title: "Tower of Hanoi",
      type: "Desktop App",
      scope: "Public",
      tags: ["Java", "Java Swing", "Algorithms", "Desktop GUI"],
      highlights: [
        "Interactive mathematical puzzle game built with Java Swing implementing the classic recursive Tower of Hanoi algorithm.",
        "Keyboard-driven interaction model enabling intuitive disk selection and cross-peg transfer with real-time constraint enforcement.",
        "Dynamic move validation preventing illegal placements while logging movement efficiency toward the minimal recursive solution.",
      ],
    },
    {
      id: "proj-9",
      title: "Minesweeper",
      type: "Desktop App",
      scope: "Public",
      tags: ["Java", "Java Swing", "Game Logic", "Desktop GUI"],
      highlights: [
        "Desktop logic puzzle game created with Java Swing featuring dynamic grid generation and recursive empty-cell cascade algorithms.",
        "Configurable difficulty presets (Easy, Medium, Hard) that dynamically balance board dimensions with proportional mine counts.",
        "Precision gaming mechanics incorporating tactical flag-marking, elapsed time tracking, and instant win/loss condition evaluation.",
      ],
    },
    {
      id: "proj-10",
      title: "Sudoku Solver",
      type: "Desktop App",
      scope: "Public",
      tags: ["VB.NET", "Backtracking Algorithm", "Desktop GUI"],
      highlights: [
        "Algorithmic computational desktop application developed in VB.NET utilizing recursive backtracking to solve complex 9x9 Sudoku grids.",
        "Instant constraint verification checking row, column, and 3x3 sub-grid rules to validate input boards before execution.",
        "Interactive graphical grid allowing custom puzzle entry and visual step-by-step algorithmic resolution.",
      ],
    },
    {
      id: "proj-11",
      title: "Chimp Test",
      type: "Desktop App",
      scope: "Public",
      tags: ["Java", "JavaFX", "Cognitive Assessment", "Desktop GUI"],
      highlights: [
        "Primate-inspired cognitive spatial memory assessment tool engineered with JavaFX to evaluate working memory under timed conditions.",
        "Briefly flashes progressive numerical positions across a randomized grid before masking cells for sequential recall testing.",
        "Adaptive difficulty progression that analyzes memory span limits, mistake frequencies, and response latency across consecutive stages.",
      ],
    },
  ],
}
