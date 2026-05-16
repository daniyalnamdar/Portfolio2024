import newProject from "./newProject.png";
import mentora from "./mentora.png";
import tercihbot from "./Tercihbot.png";
import baumentora from "./BauMentora.png";

const mywork_data = [
  {
    w_no: 1,
    w_name: "K-12 Language Learning LMS – MyMentora",
    w_desc:
      "Built the entire backend from scratch for a K-12 language learning platform that now serves over 10,000 users — 9,000 students and 1,000 teachers. Designed multi-role access control, a full content delivery pipeline, and async workflows using Symfony Messenger and Mercure that cut large file upload times from 3–4 minutes to under one minute. Secured media delivery by migrating from public S3 buckets to CloudFront signed URLs with time-based expiry. Also integrated Apple and Google in-app purchase APIs to enable subscription monetization across iOS and Android.",
    w_github: "https://github.com/daniyalnamdar",
    w_demo: "https://admin.mymentora.com/",
    w_img: mentora,
  },
  {
    w_no: 2,
    w_name: "University LMS – BAU MyMentora",
    w_desc:
      "Architected the backend for a university-level language learning platform serving 2,400+ users across student, teacher, and admin roles. Built real-time student-teacher messaging and classroom notifications using Mercure — no page refreshes, no delays. Hardened media delivery on Oracle Cloud Object Storage by routing all file access through an Nginx proxy, eliminating direct endpoint exposure. Established a 100+ test suite spanning unit, integration, functional, and smoke layers so the team could ship to a live academic platform with confidence.",
    w_github: "https://github.com/daniyalnamdar",
    w_demo: "https://baumentora.com/login",
    w_img: baumentora,
  },
  {
    w_no: 3,
    w_name: "Student Placement Platform – TercihBot",
    w_desc:
      "Developed the full backend for a placement platform that helps 1,100+ students generate ranked school preference lists from national LGS exam results. Integrated Google OAuth alongside email and SMS notification flows to reduce onboarding friction and re-engage users during high-traffic exam seasons. Tackled seasonal traffic spikes with targeted database indexing and a denormalized school summary table — keeping query performance stable exactly when it mattered most.",
    w_github: "https://github.com/daniyalnamdar",
    w_demo: "https://tercihbot.com/",
    w_img: tercihbot,
  },
  {
    w_no: 4,
    w_name: "Future Products",
    w_desc:
      "Application for Tracking your investments and assets (Coming Soon).",
    w_github: "https://github.com/daniyalnamdar",
    w_demo: "empty",
    w_img: newProject,
  },
];

export default mywork_data;
