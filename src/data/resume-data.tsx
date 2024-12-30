import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Cyrus Tse",
  initials: "CT",
  location: "Hong Kong",
  locationLink: "https://www.google.com/maps/place/Hong+Kong",
  about:
    "All round IT Expert across different industries",
  summary: (
    <>
    A Skillful IT Technical Expert in Enterprise, both on system and infrastructure design, 
    with excellent project management skills, good leadership and communications skills. 
    Experienced in working and communicating with foreigners. Demonstrate strong analytical thinking and detail-oriented personality. 
    High passion to override challenges.
    </>
  ),
  avatarUrl: "https://media.licdn.com/dms/image/v2/C5603AQFl2pXoOw916A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517449552525?e=1741219200&v=beta&t=ow7mYohzesI947rgtBpToa5dBZ8LzLV86FwUh5ej0KE",
  personalWebsiteUrl: "https://cyrustse.github.io",
  contact: {
    email: "tsechunhong@gmail.com",
    tel: "+8529xxxxxxx",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/cyrustse",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cyrustse/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/cyrustse",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "City University of Hong Kong",
      degree: "Msc Business Information System",
      start: "2008",
      end: "2010",
    },
    {
      school: "Victoria University",
      degree: "Bachelor of Business Management",
      start: "2006",
      end: "2018",
    },
  ],
  work: [
    {
      company: "HSBC",
      link: "https://www.hsbc.com.hk",
      badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"],
      title: "Solution Architect",
      logo: ConsultlyLogo,
      start: "2019",
      end: null,
      description: (
        <>
          End to end Architect for WholeSale Digital channel
          <ul className="list-inside list-disc">
            <li>
              Leading different work stream
            </li>
            <li>
              Accountable for defining solution design, in alignment with global technology strategy and roadmap, and articulating associated architectural risks, issues and technical debt
            </li>
            <li>
              Provide consistent end to end solution designs which will deliver expected Business Outcomes, satisfy all relevant regulatory requirements and mitigate identified operational risks
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Shangri-La Hotels and Resorts",
      link: "https://www.shangri-la.com",
      badges: [
        "Remote",
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Tailwind CSS",
      ],
      title: "Solution Architect",
      logo: ParabolLogo,
      start: "2018",
      end: "2019",
      description: (
        <>
          Lead the Architect design for the group
          <ul className="list-inside list-disc">
            <li>
              Performs hands-on solution architecture design work and actively participates in design and code reviews to ensure both delivery of desired business outcomes and alignment to enterprise standards
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "AS Watson Industries",
      link: "https://www.aswatson.com/brands/a-s-watson-industry/",
      badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
      title: "System Analyst",
      logo: ClevertechLogo,
      start: "2017",
      end: "2018",
      description: (
        <>
          Refine the design of the ERP and system architecture
          <ul className="list-inside list-disc">
            <li>
              Redesign and restructuring the automation of company’s operational processes
            </li>
            <li>
              Lead cross functional departments during the project and line up resources to meet delivery schedules
            </li>
            <li>
              Review data analytics methodologies, design and implement the ways of information collection, transformation and star schema establishment
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "NTT Com Asia",
      link: "https://www.ntt.com.hk/",
      badges: ["On Site", "Android", "Java", "Kotlin"],
      title: "System Analyst",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description: (
        <>
          Define the design of application and system architecture
          <ul className="list-inside list-disc">
            <li>
              Design and deliver the key strategic on enterprise cloud solution
            </li>
            <li>System flow, logical design and coding review for the new and existing development.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Trinity Management Limited (Li & Fung Group)",
      link: "",
      badges: ["On Site", "C/C++", "LTE", "Agile"],
      title: "Analyst Programmer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description:
        "Design and enhance internal ERP, POS and CRM system",
    },
    {
      company: "Winnitex Ltd",
      link: "",
      badges: ["On Site", "C/C++", "LTE", "Agile"],
      title: "System Analyst",
      logo: NSNLogo,
      start: "2014",
      end: "2009",
      description:
        "Design and enhance internal ERP and CRM system",
    },
    {
      company: "Hunter Douglas Hong Kong",
      link: "",
      badges: ["On Site", "C/C++", "LTE", "Agile"],
      title: "System Administrator",
      logo: NSNLogo,
      start: "2008",
      end: "2009",
      description:
        "Server Development and In-house software development",
    },
  ],
  skills: [
    "React/Next.js/Remix",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "Relay",
    "System Architecture",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "GBA Lending Project",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      logo: MonitoLogo,
      link: {
        label: "GBA Lending Project",
        href: "http://www.aastocks.com/tc/stocks/news/aafn-con/IC4375684/latest-news/INFOCAST",
      },
    },
    {
      title: "IADS",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling",
      logo: ConsultlyLogo,
      link: {
        label: "IADS",
        href: "https://inews.hket.com/article/3713489",
      },
    },
    {
      title: "Remote Cheque Deposit",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "Remote Cheque Deposit enables SMEs to deposit cheques via HSBC HK Business Express Mobile App whenever and wherever needed.",
      logo: MonitoLogo,
      link: {
        label: "Remote Cheque Deposit",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:6911948399172870144/",
      },
    },
    {
      title: "Remote Account Opening",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "The remote account opening system will allow small businesses to open an account without face-to-face meetings at a branch or submitting physical documents or signatures. SMEs will be able to obtain a bank account number immediately and verify their identity using the bank’s mobile app.",
      logo: MonitoLogo,
      link: {
        label: "Remote Account Opening",
        href: "https://www.scmp.com/business/banking-finance/article/3090026/hsbc-debuts-digital-account-sign-process-small-business",
      },
    },    
  ],
} as const;
