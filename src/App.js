import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const Icon = ({
  name,
  className = "w-5 h-5 inline-block mr-2",
  gradient = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = `${className} transition-all duration-300 ${
    gradient
      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
      : ""
  }`;

  const map = {
    Email: (
      <motion.svg
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
        xmlns="http://www.w3.org/2000/svg"
        className={baseClasses}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </motion.svg>
    ),
    LinkedIn: (
      <motion.svg
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isHovered ? { scale: 1.1 } : {}}
        xmlns="http://www.w3.org/2000/svg"
        className={baseClasses}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </motion.svg>
    ),
    Phone: (
      <motion.svg
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isHovered ? { rotate: 15 } : {}}
        transition={{ type: "spring", stiffness: 300 }}
        xmlns="http://www.w3.org/2000/svg"
        className={baseClasses}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
      >
        <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 3 4.11 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75c.12.86.36 2.05.8 3.6a1 1 0 0 1-.24 1l-1.27 1.27a16 16 0 0 0 6.6 6.6l1.27-1.27a1 1 0 0 1 1-.24c1.55.44 2.74.68 3.6.8a1 1 0 0 1 .75 1z" />
      </motion.svg>
    ),
    Certificate: (
      <motion.svg
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isHovered ? { y: [0, -3, 0] } : {}}
        transition={{ duration: 0.5 }}
        xmlns="http://www.w3.org/2000/svg"
        className={baseClasses}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
      >
        <path d="M12 2v6" />
        <path d="M7 8v14l5-3 5 3V8" />
      </motion.svg>
    ),
    Education: (
      <motion.svg
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isHovered ? { rotateY: 180 } : {}}
        transition={{ duration: 0.6 }}
        xmlns="http://www.w3.org/2000/svg"
        className={baseClasses}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
      >
        <path d="M12 14v9" />
        <path d="M4 10v9" />
        <path d="M20 10v9" />
        <path d="M2 10h20v9H2z" />
        <path d="M12 3 2 10l10 7 10-7z" />
      </motion.svg>
    ),
    Skills: (
      <motion.svg
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.4 }}
        xmlns="http://www.w3.org/2000/svg"
        className={baseClasses}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
      </motion.svg>
    ),
    Experience: (
      <motion.svg
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isHovered ? { rotate: 180 } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        xmlns="http://www.w3.org/2000/svg"
        className={baseClasses}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </motion.svg>
    ),
    Projects: (
      <motion.svg
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isHovered ? { y: [0, -5, 0] } : {}}
        transition={{ duration: 0.5 }}
        xmlns="http://www.w3.org/2000/svg"
        className={baseClasses}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
      >
        <path d="M12 2 2 7l10 5 10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </motion.svg>
    ),
  };
  return map[name] || null;
};

// --- Enhanced Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// --- Data (unchanged) ---
const FULL_NAME = "Yousef Girgis";
const ROLE = "Backend Developer";
const PHONE = "01288898735";
const EMAIL = "yousefgirgis@yahoo.com";
const LINKEDIN = "https://www.linkedin.com/in/yousef-girgis-668293265/";

// Education
const education = {
  degree:
    "Bachelor's degree in Computers & Information Technology — Computer Science",
  school: "Future University in Egypt",
  gpa: "3.54 / 4.0",
  graduation: "October 2024",
};

// Certificates
const certificates = [
  {
    title:
      "Future University in Egypt (Affiliated with University of Cincinnati) — Bachelor of Computers and Information Technology, Major: Computer Science",
    year: "2024",
  },
  {
    title:
      "University of California, Santa Cruz – Programming Fundamentals (C for Everyone)",
    year: "2021",
  },
  {
    title: "Udemy – The Java Learning Guide",
    year: "2022",
  },
  {
    title: "Next Company – Mobile App Development (Flutter Framework)",
    year: "2022",
  },
  {
    title: "Udemy – Flutter & Dart: The Complete Guide",
    year: "2023",
  },
  {
    title: "Bee Interactive – Backend Development (Node.js, Nest.js & FastAPI)",
    year: "2023",
  },
  {
    title: "Udemy – Deployment with Docker & Kubernetes [2025]",
    year: "2025",
  },
];

// Experience
const experiences = [
  {
    company: "Next Company",
    role: "Flutter Developer Trainee",
    period: "2022",
    bullets: [
      "Developed cross-platform mobile apps with Flutter & Dart",
      "Integrated apps with RESTful APIs and Firebase services",
      "Implemented state management and responsive UI components",
    ],
  },
  {
    company: "L'Oréal — Brandstorm",
    role: "Technical Participant / Workshop",
    period: "2022",
    bullets: [
      "Collaborated in innovation workshops for digital transformation",
      "Contributed technical insights for customer engagement platforms",
    ],
  },

  {
    company: "Bee Interactive Group",
    role: "Backend Developer Trainee",
    period: "2023",
    bullets: [
      "Built RESTful APIs with Node.js, NestJS, and FastAPI",
      "Containerized applications with Docker and orchestrated with Kubernetes",
      "Implemented JWT, OAuth 2.0 authentication and Role-Based Access Control",
      "Optimized MongoDB/SQL databases, improving performance by 40%",
      "Developed real-time systems with WebSocket for chat and notifications",
      "Architected CRM with lead management and multi-role permissions",
    ],
  },
  {
    company: "Frontend Development",
    role: "React.js Independent Study",
    period: "2024",
    bullets: [
      "Learned React.js for building modern web applications",
      "Mastered component-based architecture and state management",
      "Practiced with React Hooks, Context API, and React Router",
      "Built responsive UIs with Tailwind CSS and styled-components",
      "Integrated React applications with RESTful APIs",
      "Explored Next.js for server-side rendering and full-stack development",
    ],
  },
  {
    company: "DevOps Skills",
    role: "Independent Study",
    period: "2025",
    bullets: [
      "Learning Docker for containerization and application deployment",
      "Studying Kubernetes for container orchestration and scaling",
      "Exploring CI/CD pipelines and cloud infrastructure management",
    ],
  },
];

// Skill categories
const skillCategories = [
  {
    category: "Backend Development",
    skills: [
      "Node.js",
      "NestJS",
      "FastAPI (Python)",
      "RESTful APIs",
      "GraphQL",
      "WebSocket",
      "API Design",
      "Server Architecture",
    ],
  },
  {
    category: "Authentication & Security",
    skills: [
      "JWT Tokens",
      "OAuth 2.0",
      "RBAC",
      "API Security",
      "Data Encryption",
      "Input Validation",
      "Rate Limiting",
      "CORS",
    ],
  },
  {
    category: "Database Management",
    skills: [
      "MongoDB",
      "SQL Databases",
      "Database Design",
      "Query Optimization",
      "Data Modeling",
      "Indexing",
      "Aggregation Pipelines",
    ],
  },
  {
    category: "Development Tools & Practices",
    skills: [
      "Git / GitHub / GitLab",
      "Postman",
      "Swagger/OpenAPI",
      "Docker",
      "Kubernetes",
      "Containerization",
      "Orchestration",
      "CI/CD",
      "API Documentation",
      "Testing",
      "Debugging",
      "Agile Methodology",
    ],
  },
  {
    category: "Frontend & Mobile Integration",
    skills: [
      "React.js",
      "Next.js",
      "Flutter",
      "Dart",
      "HTML/CSS/JavaScript",
      "API Integration",
      "State Management",
    ],
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "Container Orchestration",
      "CI/CD Pipelines",
      "Monitoring & Logging",
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      "Java (OOP)",
      "Python",
      "JavaScript/TypeScript",
      "C++",
      "C#",
      "Dart",
      "SQL",
    ],
  },
];

// Projects
const backendProjects = [
  {
    id: "social-media",
    title: "Social Media Application",
    tagline: "Feature-rich social networking backend",
    description:
      "Developed the backend for a complete social media platform including posts, comments, likes, relationships, and activity feeds.",
    tech: "Node.js, MongoDB, Redis, WebSocket, Cloud Storage",
    features: [
      "Feed Algorithm",
      "Real-time Notifications",
      "Media Upload",
      "User Relationships",
    ],
    link: "#",
  },
  {
    id: "book-rental-node",
    title: "Book Rental System (Node.js)",
    tagline: "Library system for renting and managing books",
    description:
      "Designed APIs for user management, inventory tracking, and book borrowing workflows with automated reminders.",
    tech: "Node.js, Express, MongoDB, JWT, Nodemailer",
    features: ["Inventory Management", "Borrowing Logic", "Email Reminders"],
    link: "#",
  },
  {
    id: "online-courses",
    title: "Online Courses Platform",
    tagline: "E-learning backend powering course management",
    description:
      "Created backend services for course creation, enrollment, lessons, quizzes, and progress tracking.",
    tech: "Node.js, MongoDB, Cloud Storage, JWT",
    features: [
      "Course Management",
      "Student Enrollment",
      "Video Hosting Support",
      "Progress Tracking",
    ],
    link: "#",
  },
  {
    id: "book-rental-fastapi",
    title: "Book Rental System (FastAPI)",
    tagline: "Python-based book lending platform",
    description:
      "Implemented a FastAPI service handling inventory, booking, and user management logic.",
    tech: "FastAPI, Python, SQL, Pydantic",
    features: ["Inventory Management", "Reservation System", "Audit Logging"],
    link: "#",
  },
  {
    id: "medical-report",
    title: "Medical Report System",
    tagline: "Secure healthcare reporting backend",
    description:
      "Developed a HIPAA-compliant backend for storing medical reports, ensuring encrypted data handling and audit trails.",
    tech: "FastAPI, Python, SQL, Encryption, Pydantic",
    features: ["Data Encryption", "Audit Logs", "HIPAA Compliance"],
    link: "#",
  },
  {
    id: "realtime-chat",
    title: "Realtime Chat App",
    tagline: "High-performance messaging backend",
    description:
      "Built real-time messaging and notifications using NestJS with WebSockets and Redis for load handling.",
    tech: "NestJS, WebSocket, Redis, MongoDB, JWT",
    features: [
      "Realtime Messaging",
      "Online Presence",
      "File Sharing",
      "Message History",
    ],
    link: "#",
  },
  {
    id: "food-africa",
    title: "Food Africa Marketplace",
    tagline: "Ordering and vendor management backend",
    description:
      "Developed vendor onboarding, menu management, order processing, and payment workflows.",
    tech: "Node.js, Express, MongoDB, JWT, React",
    features: [
      "Vendor System",
      "Orders Processing",
      "Payments",
      "Live Tracking",
    ],
    link: "#",
  },
  {
    id: "crm",
    title: "Enterprise CRM System",
    tagline: "Full-stack CRM for managing clients and teams",
    description:
      "Engineered a multi-tenant CRM solution with RBAC, analytics, notifications, and customer pipelines.",
    tech: "NestJS, Node.js, MongoDB, JWT, ReactJS",
    features: [
      "RBAC Access Control",
      "Analytics Dashboard",
      "Customer Pipelines",
      "Notifications",
    ],
    link: "#",
  },
  {
    id: "real-estate-imkan",
    title: "Imkan Real Estate",
    tagline: "Real estate management platform backend",
    description:
      "Backend developer for a large real estate project providing property listings, bookings, payments, and user management.",
    tech: "Node.js, Express, MongoDB, Cloud Storage",
    features: [
      "Property Listings",
      "Booking System",
      "Payment Integration",
      "User Management",
    ],
    link: "#",
  },
];

const SectionTitle = ({ iconName, title, subtitle = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeInUp}
    className="mb-12"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-xl opacity-20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl">
          <Icon name={iconName} className="w-6 h-6 text-cyan-400" />
        </div>
      </div>
      <div>
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-gray-400 mt-2 font-light tracking-wide">
            {subtitle}
          </p>
        )}
      </div>
    </div>
    <motion.div
      className="h-0.5 w-32 bg-gradient-to-r from-blue-500/0 via-cyan-500 to-blue-500/0 rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: 128 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
    />
  </motion.div>
);

// --- Enhanced Card Component ---
const Card = ({ children, className = "", hoverable = true, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={
      hoverable
        ? {
            y: -8,
            scale: 1.02,
            transition: { duration: 0.2 },
          }
        : {}
    }
    className={`rounded-2xl p-6 border border-gray-800/50 bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-xl 
      ${hoverable ? "hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-900/20" : ""}
      transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

// --- Tech Badge Component ---
const TechBadge = ({ children }) => (
  <motion.span
    whileHover={{ scale: 1.1, y: -2 }}
    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
               bg-gradient-to-r from-gray-900/80 to-black/80 border border-gray-700/50 
               hover:border-cyan-500/50 hover:bg-gray-900 transition-all duration-300
               backdrop-blur-sm"
  >
    {children}
  </motion.span>
);

// --- Mobile Menu Component ---
const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30 }}
            className="fixed inset-y-0 right-0 w-64 bg-gradient-to-b from-gray-900 to-black border-l border-gray-800/50 z-50 p-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <button
                onClick={onClose}
                className="self-end text-gray-400 hover:text-white p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {[
                "About",
                "Education",
                "Skills",
                "Experience",
                "Projects",
                "Certificates",
                "Contact",
              ].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  whileHover={{ x: 10 }}
                  className="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-gray-800/50"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-800/30 hover:border-cyan-500 transition-all mt-4"
              >
                <span className="flex items-center gap-2 justify-center">
                  <Icon name="LinkedIn" className="w-5 h-5" />
                  LinkedIn
                </span>
              </motion.a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- Main Component ---
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans antialiased overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-gray-900/20 to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Enhanced Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/90 backdrop-blur-xl border-b border-gray-800/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-md opacity-30 rounded-full" />
              <img
                src="https://cdn.dribbble.com/userupload/27196974/file/original-f56a973233512a58a31a807a5b2c7e20.jpg"
                alt="Logo"
                className="relative w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
              />
            </div>

            <div className="hidden md:block text-sm bg-gradient-to-r from-cyan-400/80 to-blue-400/80 bg-clip-text text-transparent font-medium">
              {ROLE}
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {[
              "About",
              "Education",
              "Skills",
              "Experience",
              "Projects",
              "Certificates",
              "Contact",
            ].map((s, i) => (
              <motion.a
                key={s}
                href={`#${s.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  color: "#22d3ee",
                }}
                className="text-gray-300 hover:text-cyan-400 transition-all relative group"
              >
                {s}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-800/30 hover:border-cyan-500 transition-all"
            >
              <span className="flex items-center gap-2">
                <Icon name="LinkedIn" className="w-4 h-4" />
                LinkedIn
              </span>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-lg bg-gray-900/50 border border-gray-700/50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24">
        {/* HERO */}
        <section id="home" className="py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={slideInFromLeft}
              className="text-center lg:text-left"
            >
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl opacity-30 rounded-full"></div>
                <div className="relative rounded-full w-40 h-40 md:w-52 md:h-52 p-2 mx-auto lg:mx-0 mb-6 bg-gradient-to-br from-cyan-600 via-blue-500 to-purple-600 shadow-2xl">
                  <img
                    src="https://avatars.githubusercontent.com/u/88988767?v=4"
                    alt={FULL_NAME}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400">
                  {FULL_NAME}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8">
                {ROLE} •{" "}
                <span className="text-cyan-300">Computer Science Graduate</span>
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
                <motion.a
                  href={`mailto:${EMAIL}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-800/30 hover:border-cyan-500/50 transition-all"
                >
                  <FaEnvelope className="w-5 h-5" />
                  <span className="truncate text-sm md:text-base">{EMAIL}</span>
                </motion.a>

                <motion.a
                  href={LINKEDIN}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-800/30 hover:border-cyan-500/50 transition-all"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="w-5 h-5" />
                  <span className="text-sm md:text-base">LinkedIn</span>
                </motion.a>

                <motion.a
                  href={`tel:${PHONE}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-800/30 hover:border-cyan-500/50 transition-all"
                >
                  <FaPhone className="w-5 h-5" />
                  <span className="text-sm md:text-base">{PHONE}</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={slideInFromRight}
            >
              <Card hoverable={false} delay={0.2}>
                <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  Professional Snapshot
                </h4>

                <p className="text-gray-300 leading-relaxed mb-6">
                  I am a{" "}
                  <span className="text-cyan-300 font-semibold">
                    Backend Developer
                  </span>{" "}
                  with expertise in building scalable, secure, and
                  high-performance backend systems using modern technologies.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    <span className="text-gray-300">
                      <strong className="text-white">
                        Backend Specialization:
                      </strong>{" "}
                      Node.js, NestJS, FastAPI, MongoDB
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    <span className="text-gray-300">
                      <strong className="text-white">Frontend Skills:</strong>{" "}
                      React.js, Next.js, Tailwind CSS
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    <span className="text-gray-300">
                      <strong className="text-white">DevOps Focus:</strong>{" "}
                      Docker, Kubernetes, Containerization
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    <span className="text-gray-300">
                      <strong className="text-white">
                        Architecture Focus:
                      </strong>{" "}
                      RESTful APIs, Real-time Systems, Scalable Backends
                    </span>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-800/30">
                    <div className="text-2xl font-bold text-cyan-300">
                      {education.gpa}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">GPA</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-800/30">
                    <div className="text-2xl font-bold text-purple-300">2+</div>
                    <div className="text-xs text-gray-400 mt-1">Years Exp</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-800/30">
                    <div className="text-2xl font-bold text-cyan-300">10+</div>
                    <div className="text-xs text-gray-400 mt-1">Projects</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-16">
          <SectionTitle
            iconName="Certificate"
            title="About Me"
            subtitle="Passionate Backend Developer & Computer Science Graduate"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Card delay={0.1}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-white">
                    Background
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    I'm{" "}
                    <span className="text-cyan-300 font-medium">
                      {FULL_NAME}
                    </span>
                    , a Computer Science graduate from{" "}
                    <span className="text-purple-300 font-medium">
                      {education.school}
                    </span>
                    . With a passion for backend engineering, I specialize in
                    creating robust APIs, designing scalable architectures, and
                    implementing secure authentication systems.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-white">
                    Philosophy
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    I believe in writing clean, maintainable code and following
                    best practices. My approach combines analytical thinking
                    with creative problem-solving to deliver efficient and
                    reliable backend solutions that power exceptional user
                    experiences.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-16">
          <SectionTitle iconName="Education" title="Education" />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <Card delay={0.1}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                      <Icon name="Education" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">
                        {education.school}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1">
                        {education.degree}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-800/30">
                    <div className="text-cyan-300 font-bold text-lg">
                      {education.gpa}
                    </div>
                    <div className="text-gray-400 text-sm">Cumulative GPA</div>
                  </div>
                  <div className="text-purple-300 font-semibold mt-2">
                    {education.graduation}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-16">
          <SectionTitle
            iconName="Skills"
            title="Technical Skills"
            subtitle="Technologies & Tools I Work With"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((group, index) => (
              <motion.div key={group.category} variants={fadeInUp}>
                <Card delay={index * 0.1}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                      <Icon name="Skills" className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      {group.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <TechBadge key={skill}>{skill}</TechBadge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-16">
          <SectionTitle
            iconName="Experience"
            title="Experience"
            subtitle="Professional Journey"
          />

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 via-blue-500/20 to-cyan-500/20 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`relative ${idx % 2 === 0 ? "md:pr-1/2 md:pl-12" : "md:pl-1/2 md:pr-12"}`}
                >
                  <div
                    className={`absolute top-6 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg
                    ${idx % 2 === 0 ? "left-6 md:left-1/2 md:-translate-x-1/2" : "left-6 md:left-1/2 md:-translate-x-1/2"}`}
                  ></div>

                  <div className="ml-10 md:ml-0">
                    <Card delay={idx * 0.1}>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">
                            {exp.role}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-cyan-300 font-medium">
                              {exp.company}
                            </span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400 text-sm">
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16">
          <SectionTitle
            iconName="Projects"
            title="Featured Projects"
            subtitle="Backend Systems I've Built"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {backendProjects.map((project, index) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <Card delay={index * 0.1}>
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-bold text-white">
                        {project.title}
                      </h4>
                      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                        <Icon name="Projects" className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-sm text-cyan-300 mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.split(", ").map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded bg-blue-900/20 border border-blue-800/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 mb-2">
                      Key Features
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-2 py-1 rounded bg-cyan-900/20 border border-cyan-800/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="py-16">
          <SectionTitle
            iconName="Certificate"
            title="Certificates"
            subtitle="Professional Development"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4"
          >
            {certificates.map((cert, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <Card delay={idx * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="Certificate" className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {cert.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">
                          {cert.year}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-cyan-900/30 border border-cyan-800/30">
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              iconName="Email"
              title="Get In Touch"
              subtitle="Let's build something amazing together"
            />

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={scaleIn}
              className="mt-12"
            >
              <Card hoverable={false} delay={0.2}>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  I'm always open to discussing new opportunities, interesting
                  projects, or just chatting about technology and innovation.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <motion.a
                    href={`mailto:${EMAIL}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group p-4 rounded-xl bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-800/30 hover:border-cyan-500 transition-all"
                  >
                    <Icon
                      name="Email"
                      className="w-8 h-8 mb-3 mx-auto text-cyan-400 group-hover:scale-110 transition-transform"
                    />
                    <div className="text-sm font-medium text-white mb-1">
                      Email
                    </div>
                    <div className="text-xs text-gray-400 break-all">
                      {EMAIL}
                    </div>
                  </motion.a>

                  <motion.a
                    href={`tel:${PHONE}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group p-4 rounded-xl bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-800/30 hover:border-purple-500 transition-all"
                  >
                    <Icon
                      name="Phone"
                      className="w-8 h-8 mb-3 mx-auto text-purple-400 group-hover:scale-110 transition-transform"
                    />
                    <div className="text-sm font-medium text-white mb-1">
                      Phone
                    </div>
                    <div className="text-xs text-gray-400">{PHONE}</div>
                  </motion.a>

                  <motion.a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group p-4 rounded-xl bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-800/30 hover:border-cyan-500 transition-all"
                  >
                    <Icon
                      name="LinkedIn"
                      className="w-8 h-8 mb-3 mx-auto text-blue-300 group-hover:scale-110 transition-transform"
                    />
                    <div className="text-sm font-medium text-white mb-1">
                      LinkedIn
                    </div>
                    <div className="text-xs text-gray-400">Connect with me</div>
                  </motion.a>

                  <motion.a
                    href={`https://wa.me/20${PHONE}`}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group p-4 rounded-xl bg-gradient-to-b from-green-900/20 to-transparent border border-green-800/30 hover:border-green-500 transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 mb-3 mx-auto text-green-400 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.72 13.07a1 1 0 0 0-1.38-.31l-.69.42a4.35 4.35 0 0 1-2.06-.82a4.09 4.09 0 0 1-1.43-1.77l.42-.69a1 1 0 0 0-.31-1.38l-1.57-.9a1 1 0 0 0-1.38.31a5.75 5.75 0 0 0 .68 6.84a7.43 7.43 0 0 0 5.18 2.67a5.75 5.75 0 0 0 3.38-.99a1 1 0 0 0 .31-1.38l-.9-1.57z" />
                      <path d="M21 11.5A9.5 9.5 0 1 1 11.5 2A9.5 9.5 0 0 1 21 11.5z" />
                    </svg>
                    <div className="text-sm font-medium text-white mb-1">
                      WhatsApp
                    </div>
                    <div className="text-xs text-gray-400">Chat instantly</div>
                  </motion.a>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800/50">
                  <p className="text-gray-400 text-sm">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/50 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="text-lg font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                {FULL_NAME}
              </div>
              <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} • Backend Developer & Computer
                Science Graduate
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-400">
                <span className="text-green-400">●</span> Exempt from military
                service
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-red-400">●</span> Egyptian Nationality
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
