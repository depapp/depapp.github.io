import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Depa Panjie Purnama",
  initials: "DPP",
  location: "Cianjur, West Java, Indonesia",
  locationLink: "https://www.google.com/maps/place/Cianjur",
  about:
    "Software Quality Assurance Engineer with more than 7 years experiences both in Manual Testing and Automation Testing.",
  summary:
    "As a proactive QA Engineer with extensive experience in manual and automated testing, I contribute to high-impact projects, including open-source automation tools and community-driven applications. Adept at defect management and detail-oriented, I have a proven track record of collaborating with cross-functional teams, improving project efficiency, and driving product excellence.",
  avatarUrl: "https://avatars.githubusercontent.com/u/6134774?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "depapanjiep@gmail.com",
    tel: "+6285759419694",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/depapp",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/depapp",
        icon: LinkedInIcon,
      },
      {
        name: "Twitter/X",
        url: "https://x.com/depapp",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Telkom University",
      degree: "Bachelor's Degree in Computer Engineering",
      start: "2012",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Evermos",
      link: "https://evermos.com",
      badges: ["Hybrid"],
      title: "Quality Engineer",
      logo: "",
      start: "May, 2020",
      end: "Jul, 2024",
      description:
        "Technologies: Appium (JavaScript & TypeScript), Selenium (JavaScript & TypeScript), Maestro, Playwright, K6, TestCaseLab, Git, Jenkins.",
    },
    {
      company: "HOOQ",
      link: "https://hooq.tv",
      badges: [],
      title: "Quality Engineer",
      logo: "",
      start: "Jan, 2019",
      end: "May, 2020",
      description:
        "Technologies: Appium (Java & Python), TestRail, Git, Jenkins, Jira.",
    },
    {
      company: "Cartenz Technology Indonesia",
      link: "https://cartenz.co.id",
      badges: [],
      title: "Software Quality Assurance",
      logo: "",
      start: "Dec, 2017",
      end: "Dec, 2018",
      description:
        "Technologies: Robot Framework, Cypress, Jira.",
    },
    {
      company: "LAPI Divusi",
      link: "https://divusi.co.id",
      badges: [],
      title: "Software Quality Assurance",
      logo: "",
      start: "Jan, 2017",
      end: "Dec, 2017",
      description:
        "Technologies: PHP, Git, Trello.",
    },
  ],
  skills: [
    "Appium",
    "Selenium",
    "Playwright",
    "Cypress",
    "Maestro",
    "Robot Framework",
    "K6",
    "Git",
    "Jenkins"
  ],
  projects: [
    {
      title: "pusakatest",
      techStack: [
        "API Automation Testing Tool",
        "JavaScript",
        "Gherkin",
        "Node.js",
      ],
      description:
        "pusakatest is an API automation testing tool based on pactumjs using bdd (cucumber) style with localization.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/depapp/pusakatest",
      },
    },
    {
      title: "#PamerAjaDulu",
      techStack: [
        "Next.js",
        "JavaScript",
        "Firebase",
        "Node.js",
        "Tailwind CSS",
      ],
      description:
        "#PamerAjaDulu is a web to showcase your project/product.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://pamerajadulu.com/",
      },
    },
    {
      title: "my open-source contributions",
      techStack: [
        "Next.js",
        "JavaScript",
        "GraphQL",
        "Node.js",
        "Tailwind CSS",
      ],
      description:
        "Showcase Your Open-Source Contributions with Ease!.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/depapp/pusakatest",
      },
    },
  ],
} as const;
