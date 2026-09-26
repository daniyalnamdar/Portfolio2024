import mentora from "./mentora.png";
import tercihbot from "./Tercihbot.png";
import baumentora from "./BauMentora.png";
import yadoInvest from "./yadoInvest.png";
import metodbox from "./metodbox-login.png";
import documentAnalyze from "./document-analyze-login.png";

const mywork_data = [
  {
    w_no: 1,
    w_name: "Metodbox",
    w_type: "Multi-tenant education platform",
    w_role: "Contributing Backend Developer",
    w_summary:
      "Contributed admin tooling, reporting, and production fixes to an established platform serving 100,000 students and teachers.",
    w_challenge:
      "Extend a live, multi-tenant microservices platform safely while keeping user administration, reporting, and recurring production issues manageable across service boundaries.",
    w_solution:
      "Built admin dashboards for two microservices, integrated user creation and management with the IAM microservice, added reporting functionality, and resolved recurring Sentry issues involving null values, deprecated services, and missing error messages.",
    w_impact: [
      "Platform serving 100,000 students and teachers",
      "Admin dashboards for two microservices",
      "Sentry-led fixes for recurring production issues",
    ],
    w_stack: ["PHP 8", "Symfony 5.4", "Microservices", "IAM", "Sentry"],
    w_code_note: "Commercial product — source code is private.",
    w_demo: "https://web.metodbox.com/login",
    w_img: metodbox,
  },
  {
    w_no: 2,
    w_name: "Document Analyze",
    w_type: "AI-powered educational book review platform",
    w_role: "Full-Stack Developer at Bk Mobil",
    w_summary:
      "Collaborated with an AI developer to turn page-by-page book review into a reliable, permission-aware workflow for publishers and education teams.",
    w_challenge:
      "Coordinate long-running text and visual analysis across entire PDF books while preserving tenant isolation, criteria versions, earlier findings, and clear recovery paths when individual stages fail.",
    w_solution:
      "Contributed across React, Symfony, and Python services to analysis dashboards, version comparison, multi-tenant APIs, permissions, retries, cancellation, stage-level diagnostics, model configuration, AWS storage, and PDF/DOCX report workflows.",
    w_impact: [
      "Page-level findings with version history",
      "Targeted retries, cancellation, and stage-level diagnostics",
      "Review feedback and downloadable PDF/DOCX reports",
    ],
    w_stack: [
      "React",
      "TypeScript",
      "Symfony 7",
      "PHP",
      "Python",
      "FastAPI",
      "MySQL",
      "Messenger",
      "AWS",
      "Docker",
    ],
    w_code_note: "Commercial product — source code and application access are private.",
    w_demo: "empty",
    w_img: documentAnalyze,
  },
  {
    w_no: 3,
    w_name: "MyMentora",
    w_type: "K–12 language-learning platform",
    w_role: "Backend owner — architecture through deployment",
    w_summary: "Built and scaled the complete backend for 10,000+ students and teachers.",
    w_challenge:
      "Support multiple user roles, protected learning content, large interactive files, and mobile subscriptions without making the platform difficult to operate.",
    w_solution:
      "Designed the APIs and access model, moved heavy file work into Symfony Messenger, added real-time Mercure notifications, and replaced public S3 delivery with expiring CloudFront signed URLs.",
    w_impact: [
      "Scaled from zero to 10,000+ users",
      "Reduced 3–4 minute file processing to under one minute",
      "Enabled Apple and Google subscription purchases",
    ],
    w_stack: ["PHP 8", "Symfony", "API Platform", "Docker", "AWS", "Mercure"],
    w_code_note: "Commercial product — source code is private.",
    w_demo: "https://admin.mymentora.com/",
    w_img: mentora,
  },
  {
    w_no: 4,
    w_name: "BAU MyMentora",
    w_type: "University learning-management platform",
    w_role: "Backend architect and developer",
    w_summary: "Architected a reliable LMS backend for 2,400+ university users.",
    w_challenge:
      "Deliver courses, assignments, messaging, and protected media to students and instructors on a live academic platform where regressions directly disrupt teaching.",
    w_solution:
      "Built the domain and API workflows, implemented real-time communication with Mercure, protected Oracle Cloud media behind Nginx, and established automated coverage across multiple test layers.",
    w_impact: [
      "Serves 2,000 students and 400 instructors",
      "Real-time messaging without page refreshes",
      "Suite of 100+ automated tests",
    ],
    w_stack: ["PHP 8.2", "Symfony 7", "MySQL", "Docker", "Oracle Cloud", "Nginx"],
    w_code_note: "Commercial product — source code is private.",
    w_demo: "https://bau.mymentora.com/login",
    w_img: baumentora,
  },
  {
    w_no: 5,
    w_name: "TercihBot",
    w_type: "Student placement platform",
    w_role: "Backend developer",
    w_summary: "Built a data-heavy placement backend used by 1,100+ students.",
    w_challenge:
      "Turn national LGS examination data into responsive ranked preference lists while handling sharp seasonal traffic and time-sensitive user communication.",
    w_solution:
      "Implemented preference-generation APIs, Google OAuth, email and SMS journeys, then optimized critical reads with database indexes and denormalized summary tables.",
    w_impact: [
      "Used by 1,100+ students",
      "Stable read performance during exam-season peaks",
      "Lower-friction onboarding and re-engagement",
    ],
    w_stack: ["PHP 8.2", "Symfony 7", "MySQL", "Docker", "AWS", "Google OAuth"],
    w_code_note: "Commercial product — source code is private.",
    w_demo: "https://tercihbot.com/",
    w_img: tercihbot,
  },
  {
    w_no: 6,
    w_name: "Yado Invest",
    w_type: "Mobile-first fintech platform",
    w_role: "Backend architect and developer",
    w_summary: "Designed the backend and delivery infrastructure for an iOS and Android investment product.",
    w_challenge:
      "Coordinate portfolio analytics, market-data synchronization, subscriptions, notifications, and production operations across a mobile-first experience.",
    w_solution:
      "Built the Symfony and PostgreSQL backend, containerized delivery, integrated Firebase services, and implemented CI/CD, monitoring, backups, and infrastructure security.",
    w_impact: [
      "Production product on iOS and Android",
      "Automated delivery and operational safeguards",
      "Integrated subscriptions and push notifications",
    ],
    w_stack: ["PHP", "Symfony", "PostgreSQL", "Docker", "Firebase", "Cloudflare"],
    w_code_note: "Commercial product — source code is private.",
    w_demo: "https://yadoinvest.com/",
    w_img: yadoInvest,
  },
];

export default mywork_data;
