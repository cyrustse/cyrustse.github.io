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
  about: "Enterprise Solution Architect & Digital Transformation Leader",
  summary: ({ years }: { years: number }) => (
    <>
      An enterprise-level Solution Architect and Technical Lead with over {years} years of 
      experience spearheading digital transformation across Financial, Hospitality, Retail, 
      Manufacturing, and Telecommunications sectors. Proven track record in designing scalable, 
      secure, cloud-native microservices architectures. Exceptional cross-functional leader 
      skilled in aligning regional technical roadmaps with global business strategies in 
      multicultural environments.
    </>
  ),
  avatarUrl: "/images/cv-pic.jpeg",
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
              Architecting secure, scalable solution designs for core digital products and features, 
              aligning long-term technology roadmaps with global banking standards.
            </li>
            <li>
              Governing architectural integrity and cost-efficiency across the Agile development 
              lifecycle, unblocking complex design bottlenecks dynamically.
            </li>
            <li>
              Providing technical leadership within engineering pods to steer high-fidelity execution 
              of target state designs.
            </li>
            <li>
              Collaborating with Platform and Portfolio Architects to innovate enterprise architecture 
              patterns and accelerate cloud adoption.
            </li>
            <li>
              Ensuring all architectural deliverables strictly comply with rigorous risk, governance, 
              and control frameworks.
            </li>
            <li>
              Defining the regional cloud-native roadmap for digital channels, ensuring containerized 
              footprints match global corporate compliance.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Shangri-La (SLIM)",
      link: "https://www.shangri-la.com",
      badges: ["React", "TypeScript", "Node.js", "GraphQL", ".NetCore"],
      title: "Solution Architect",
      logo: ParabolLogo,
      start: "2018",
      end: "2019",
      description: (
        <>
          Led enterprise architecture design for the global hospitality group
          <ul className="list-inside list-disc">
            <li>
              Defined and drove strategic functional direction for regional Technology Platforms, 
              API strategies, and integration roadmaps.
            </li>
            <li>
              Identified and engineered technical solutions and process optimizations to support 
              high-growth global hospitality initiatives.
            </li>
            <li>
              Owned ultimate accountability for platform integration performance, infrastructure 
              efficiency, and system alignment with complex business requirements.
            </li>
            <li>
              Delivered hands-on architecture blueprints and established rigorous code and design 
              review frameworks to maintain exceptional engineering standards.
            </li>
            <li>
              Coached and mentored cross-functional engineering teams, fostering a culture of 
              architectural excellence.
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
          Optimized global ERP architecture and enterprise systems
          <ul className="list-inside list-disc">
            <li>
              Redesigned and re-engineered core automated workflows for global supply chain and 
              operational processes to eliminate technical debt.
            </li>
            <li>
              Steered cross-functional departments through complex project phases, optimizing resource 
              allocation to hit aggressive market delivery schedules.
            </li>
            <li>
              Overhauled data analytics methodologies, designing scalable ETL pipelines and high-performance 
              star schema data models.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "NTT",
      link: "https://www.ntt.com.hk/",
      badges: ["VMware", "Java", "System Architecture"],
      title: "System Analyst",
      logo: JojoMobileLogo,
      start: "2015",
      end: "2016",
      description: (
        <>
          Defined target application topologies and system architecture
          <ul className="list-inside list-disc">
            <li>
              Designed and deployed business-critical architectures for enterprise cloud-native solutions.
            </li>
            <li>
              Directed end-to-end system flows, logical schemas, and exhaustive code audits for 
              both greenfield and legacy product portfolios.
            </li>
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
      start: "2014",
      end: "2015",
      description: "Designed, integrated, and enhanced internal enterprise ERP, POS, and CRM architectures.",
    },
    {
      company: "Winnitex",
      link: "",
      badges: ["C#", "ASP", "Agile"],
      title: "System Analyst",
      logo: NSNLogo,
      start: "2009",
      end: "2014",
      description: "Engineered and optimized large-scale internal manufacturing ERP and corporate CRM software ecosystem.",
    },
    {
      company: "Hunter Douglas",
      link: "",
      badges: ["MS Server", "Linux"],
      title: "System Administrator",
      logo: NSNLogo,
      start: "2008",
      end: "2009",
      description: "Managed complex server infrastructure deployment and drove in-house application engineering.",
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
        "Architected and delivered a cloud-native commercial lending engine for NTB clients, streamlining end-to-end digital lending applications and drawdown workflows.",
      logo: MonitoLogo,
      link: {
        label: "GBA Lending Project",
        href: "http://www.aastocks.com/tc/stocks/news/aafn-con/IC4375684/latest-news/INFOCAST",
      },
    },
    {
      title: "IADS",
      techStack: ["TypeScript", "Next.js", "PostgreSQL", "Redis"],
      description:
        "Designed and engineered a high-availability Open Banking platform on Cloud, securely unifying commercial (CMB) and retail (WPB) banking APIs across HSBC and Hang Seng Bank.",
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
        "Architected the secure remote cheque clearing infrastructure integrated into the HSBC HK Business Express Mobile App, driving cross-region digital check deposits for corporate SMEs.",
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
        "Spearheaded the secure, compliant architectural design for HSBC’s flagship instant digital SME onboarding platform, utilizing mobile identity verification (IDV) to remove physical branch friction.",
      logo: MonitoLogo,
      link: {
        label: "Remote Account Opening",
        href: "https://www.scmp.com/business/banking-finance/article/3090026/hsbc-debuts-digital-account-sign-process-small-business",
      },
    },
    {
      title: "Tranaction Data signing design",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description: "Engineered robust Mobile Security Key (MSK) integration to support bulletproof transaction payload signing and high-value mobile payments.",
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
        "Orchestrated the strategic architectural overhaul of legacy monolithic banking architectures into distributed, resilient cloud-native microservices.",
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
        "Designed and implemented an enterprise-grade corporate signing framework allowing unified, secure digital authorization access for banking and ecosystem partners.",
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
        "Designed high-concurrency channel architectures for premier wealth management suites, covering equities (HK/US Stocks), bonds, and Certificate of Deposit (CD) systems.",
      logo: MonitoLogo,
      link: {
        label: "Investment products solution",
        href: "",
      },
    },
  ],
} as const;
