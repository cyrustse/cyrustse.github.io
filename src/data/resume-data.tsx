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
      A Skillful IT Architect who has over 17 years as an Architect and Technical Lead in Financial, Hotel, Manufacturing, Retail and Telecommunication.
      Good leadership and communications skills. Experienced in working and communicating with foreigners. Demonstrate strong analytical thinking and detail-oriented personality. High passion to override challenges.
    </>
  ),
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQEOQn91gIeeVA/profile-displayphoto-shrink_800_800/B56ZQiF7bTH0Ac-/0/1735738767475?e=1741219200&v=beta&t=_x_ukW9m_Et0cgpNB6ogwV-IUJGMAHzR3y34SFle4v4",
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
        url: "https://x.com/tsechunhong",
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
      end: "2008",
    },
  ],
  work: [
    {
      company: "HSBC",
      link: "https://www.hsbc.com.hk",
      badges: ["React", "Next.js", "APIs", "Java"],
      title: "Solution Architect",
      logo: ConsultlyLogo,
      start: "2019",
      end: null,
      description: (
        <>
          End to end Architect for WholeSale Digital channel
          <ul className="list-inside list-disc">
            <li>
              Creating solution designs for products and features which support the execution of the technology strategy and roadmap, align to standards and policies and meet the business needs
            </li>
            <li>
              Ensuring solution designs are cost effective and maintained through the agile development lifecycle, resolving design reated issues in a timely manner
            </li>
            <li>
              Providing leadership in the pod to steer the execution of the defined solution design
            </li>
            <li>
              Collaborating with the Platform and Portfolio Architects to evolve the architectural strategy and roadmap
            </li>
            <li>
              Ensuring architectural deliverables in governance and control frameworks are completed
            </li>
            <li>
              Defining cloud roadmap for channel business and ensuring footprint is aligned with global and corporate standards
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Shangri-La (SLIM)",
      link: "https://www.shangri-la.com",
      badges: [
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
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
              Provides input and functional direction to the Technology Platforms, API strategy and implementation roadmap
            </li>
            <li>
              Identifies technical solutions and business process improvements in support of the business and IT strategic direction
            </li>
            <li>
              Ensures the engineered environment meets the specification in terms of business requirements, application design and infrastructure requirements, i.e. accountable for the platform integration performance and efficiency
            </li>
            <li>
              Performs hands-on solution architecture design work and actively participates in design and code reviews to ensure both delivery of desired business outcomes and alignment to enterprise standards
            </li>
            <li>
              Responsible for coaching and mentoring resources on solution architecture, providing advice, guidance and assistance to less experienced colleagues as required
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "AS Watson",
      link: "https://www.aswatson.com/brands/a-s-watson-industry/",
      badges: ["Java", "Python", "AS400"],
      title: "System Analyst",
      logo: ClevertechLogo,
      start: "2017",
      end: "2018",
      description: (
        <>
          Refine the design of the ERP and system architecture
          <ul className="list-inside list-disc">
            <li>
              Redesign and restructuring the automation of company&apos;s operational processes
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
      company: "NTT",
      link: "https://www.ntt.com.hk/",
      badges: ["Android", "Java", "Kotlin"],
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
      company: "Li & Fung Trinity Limited",
      link: "",
      badges: ["C#", ".Net", "MSSQL", "Agile"],
      title: "Analyst Programmer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description:
        "Design and enhance internal ERP, POS and CRM system",
    },
    {
      company: "Winnitex",
      link: "",
      badges: ["C#", "ASP", "Agile"],
      title: "System Analyst",
      logo: NSNLogo,
      start: "2009",
      end: "2014",
      description:
        "Design and enhance internal ERP and CRM system",
    },
    {
      company: "Hunter Douglas",
      link: "",
      badges: ["MS Server", "Linux"],
      title: "System Administrator",
      logo: NSNLogo,
      start: "2008",
      end: "2009",
      description:
        "Server Development and In-house software development",
    },
  ],
  skills: [
    "Angular/React/Next.js",
    "JavaScript/TypeScript",
    "Swift",
    "C#",
    "ASP/ASP.net",
    "SQL",
    "Java",
    "SpringBoot/SpringSecurity",
    "RUST",
    "Python",
    "Postgres",
    "Redis/Hazelcast",
    "Security Architecture Design",
    "System Architecture",
    "Application Architecture",
  ],
  projects: [
    {
      title: "GBA Lending Project",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Design & Develop a new Lending application for NTB customer to submit lending application & drawdown request",
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
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Design & Develop an open banking solution on Cloud to support both HSBC & HASE&apos;s CMB and WPB",
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
    {
      title: "Tranaction Data signing design",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "Enable the capability for secure mobile payment using MSK",
      logo: MonitoLogo,
      link: {
        label: "Tranaction Data signing design",
        href: "",
      },
    },
    {
      title: "Digital Business Banking Replatforming",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "Replatform the existing banking system and transforming from monolith to microservices",
      logo: MonitoLogo,
      link: {
        label: "Digital Business Banking Replatforming",
        href: "",
      }, 
    },       
    {
      title: "Digital Authorization Service",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "Design & Develop a system that allows both banking and non banking customers to perform an authorization and signing request.",
      logo: MonitoLogo,
      link: {
        label: "DAS",
        href: "",
      }, 
    },        
    {
      title: "Investment products solution",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "Channel Investment product solution design for such as HK, US Stock trading and Bond & CD products",
      logo: MonitoLogo,
      link: {
        label: "Investment products solution",
        href: "",
      }, 
    },      
  ],
} as const;
