import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Challenge {
  title: string;
  description: string;
  solution: string;
}

interface DetailedExperience {
  period: string;
  company: string;
  logo: string;
  role: string;
  companyUrl: string;
  description: string[];
  responsibilities: string[];
  challenges: Challenge[];
  achievements: string[];
  technologies: string[];
}

const experiences: DetailedExperience[] = [
  {
    period: "December 2024 — Aug 2025",
    company: "Ausis Accommodation Services",
    logo: "/images/experiences/ausis.png",
    role: "Freelance Full Stack Software Engineer (Contructual)",
    companyUrl: "https://www.airpaz.com/en/hotel/ausis-accommodation-services.5377238",
    description: [
      "Shipping new features for their main website and  automating manual task that <b>reduced manual work by 90%</b>.",
      "Responsible for implementing enhancements and fixes while maintaining codebase consistency and optimizing queries for large data.",
      "Techinical support to their existing products and clients.",
    ],
    responsibilities: [
      "Developed new and maintained features of the main and existing software and tools",
      "Optimized database queries and improved application performance",
      "Enhanced system monitoring, automated manual task and give technical support to their client for smooth operation",
    ],
    challenges: [
      {
        title: "New features delivery on time",
        description:
          "As this is their main website, they need each feature as soon as possible based on priority",
        solution:
          "Use LLM tools to deliver features faster",
      },
    ],
    achievements: [
      "Able to deliver features on time",
      "Successfully deployed on cloud platform",
    ],
    technologies: ["Python", "PHP", "Laravel", "Vue.js", "Mysql", "AWS"]
  },
  {
    period: "February 2023 — June 2024",
    company: "Hogarth",
    logo: "/images/experiences/hogarth.png",
    role: "Software Engineer",
    companyUrl: "https://www.hogarth.com/",
    description: [
      "Engineered scalable software solutions for a marketing tool used by clients like Dell, Ford, Nestlé, and Colgate, improving workflow efficiency by 20%.",
      "Responsible for implementing enhancements and fixes while maintaining codebase consistency and optimizing queries for large production data.",
    ],
    responsibilities: [
      "Developed and maintained features of the marketing automation platform",
      "Optimized database queries and improved application performance",
      "Removed session based authentication system and intruduced JWT based authentication system and improved system scalability and performance by 60%",
      "Redesign entire dashboard system and removed all the premium packages to reduced the cost by 95%",
      "Built CI/CI pipeline for new tenant setup, reducing setup times by 80%.",
      "Collaborated with cross-functional teams to implement new features",
      "Lead the entire team for requirement analysis, technical analysis and task creation and distribution",
      "Conducted code reviews and maintained coding standards",
    ],
    challenges: [
    ],
    achievements: [
      "Removed session based authentication system and intruduced JWT based authentication",
      "Redesign entire dashboard system and removed all the premium packages",
      "Built CI/CI pipeline for new tenant setup",
      "Successfully migrated more than 3 major legacy components to modern architecture",
    ],
    technologies: [
      "C#",
      "Dot Net",
      "NodeJs",
      "Web API",
      "MS SQL",
      "Redis",
      "Angular JS",
      "Angular",
      "AWS",
      "Jenkins",
      "Jira",
      "Git & GitHub"
    ],
  },
  {
    period: "Febraury 2022 — March 2023",
    company: "Streams Tech Ltd",
    logo: "/images/experiences/streamstech.png",
    role: "Associate Software Engineer",
    companyUrl: "https://www.ait.inc/",
    description: [
      "Led client communication and requirements analysis for key projects, managing project timelines, and mentoring junior developers, resulting in a 25% reduction in feature delivery time.",
      "Designed and maintained a finance and project delivery tool, it's help to identify, unlock, and capitalize on profit levers across your running and upcoming projects for USA marketplace. ",
      "Conducted research and R&D on various technological topics, preparing detailed reports for clients and the team."
    ],
    responsibilities: [
      "Led development teams and managed project timelines",
      "Architected and implemented complex software solutions",
      "Mentored junior developers and conducted technical training sessions",
      "Managed client communications and requirement analysis",
      "Implemented and optimized queries for large datasets for relational and non-relation DB",
      "Applied software design patterns and architectural practices",
      "Conducted R&D on complex libraries and frameworks",
      "Managed version control and code quality standards",
    ],
    challenges: [
      {
        title: "Huge Data Processing",
        description:
          "Processing large volumes of finalcial data in dashboard area of this project.",
        solution:
          "Use stored proceduce and write optimized query to load data faster and in frontend use AG Grid  Library for high performance",
      },
      {
        title: "Faster Authencation",
        description:
          "Initially, we do not have enough time to develop authencation and authorization system from scratch",
        solution:
          "We used AUTH0 for faster authencation integration and this is free for a certain level",
      },
    ],
    achievements: [
      "Using Auth0 reduced authencation feature delivery time by 95%",
      "Improved operational efficiency by 40%",
      "Successfully processed over huge chunk of data for show forcasting summary",
      "Enhanced system performance through DB query optimization",
      "Successfully mentored multiple junior and intern developers",
      "Streamlined client communication and project delivery processes",
    ],
    technologies: [
      "C#",
      "",
      "NET Core",
      ".NET Core Web API",
      "Redis",
      "PostgreSQL",
      "Angular",
      "AG Grid",
      "Auth0",
      "AWS",
      "Trello",
      "Git & Github",
    ],
  },
  {
    period: "May 2021 — September 2021",
    company: "AIT",
    logo: "/images/experiences/ait.jpg",
    role: "Software Engineer - II",
    companyUrl: "https://www.ait.inc/",
    description: [
      "Designed and developed an ecommerce app for a leading company in Bangladesh using Flutter & Dart.",
      "Conducted research and implemented new features to enhance user experience.",
      "Improved UI by utilizing proper libraries and components, resulting in enhanced code quality.",
    ],
    responsibilities: [
      "Design the App UI from the scratch",
      "Integrate API for real data",
      "Implement new features and improve existing features"
    ],
    challenges: [
      {
        title: "Huge Product Data Processing in HomePage",
        description:
          "Processing large volumes of homepage product data",
        solution:
          "Implemented caching machanism, use asynchronous call to multiple services apis, improverd loading time by more than 60% ",
      },
      {
        title: "UI Issues",
        description:
          "E-commerce platform faced scalability challenges during high-traffic campaigns.",
        solution:
          "Use proper UI components & libraries, caching mechanism and appropriate data structure",
      },
    ],
    achievements: [
      "Faster app data loading",
      "Design full UI for this app and integrate different API's with the app ",
    ],
    technologies: [
      "Flutter",
      "Dart",
      ".NET Web API",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Jira",
      "Bitbucket",
    ],
  },
  {
    period: "February 2021 — April 2022",
    company: "AIT",
    logo: "/images/experiences/ait.jpg",
    role: "Software Engineer - I",
    companyUrl: "https://www.ait.inc/",
    description: [
      "Worked as a full-time software engineer focusing on enterprise application development and maintenance.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions while ensuring smooth operations.",
    ],
    responsibilities: [
      "Implemented new features and bug fixes in ASP.NET MVC applications",
      "Participated in daily status meetings and team communications",
      "Performed root cause analysis and debugging of production issues",
      "Managed source control and project tracking using industry-standard tools",
      "Collaborated with team members across different time zones",
      "Implemented and optimized SQL queries for large datasets",
      "Applied software design patterns and architectural practices",
    ],
    challenges: [
      {
        title: "System Enhancement",
        description:
          "Needed to implement new features while maintaining existing functionality and ensuring backward compatibility.",
        solution:
          "Developed a systematic approach to feature implementation with comprehensive testing and documentation.",
      },
      {
        title: "Issue Resolution",
        description:
          "Faced complex production issues requiring quick resolution while maintaining system stability.",
        solution:
          "Implemented robust debugging processes and root cause analysis methodologies to ensure efficient problem resolution.",
      },
    ],
    achievements: [
      "Successfully delivered multiple feature enhancements to production",
      "Improved system stability through effective bug fixing and testing",
      "Streamlined development workflow using Treelo and Github",
      "Enhanced team collaboration through effective communication channels",
      "Maintained high code quality standards through peer reviews",
      "Optimized database queries for improved performance",
    ],
    technologies: [
      "C#",
      "ASP.NET MVC",
      "ASP.NET Core",
      ".NET Web API",
      "MS SQL",
      "Jira",
      "Bitbucket",
    ],
  },
  {
    period: "April 2021 — May 2021",
    company: "DevSkill",
    logo: "/images/experiences/devskill.jpeg",
    role: "Software Engineer Intern (Remote - Part Time)",
    companyUrl: "https://devskill.com/",
    description: [
      "Collaborated with the development team to enhance DevSkill-v2 platform, focusing on user experience improvements and performance optimization.",
      "Gained valuable experience in enterprise software development practices and agile methodologies.",
    ],
    responsibilities: [
      "Collaborated with development team on DevSkill-v2 platform enhancement",
      "Participated in code reviews and quality assurance processes",
      "Implemented performance optimizations and bug fixes",
      "Wrote and maintained unit tests for code reliability",
      "Followed agile methodologies and SDLC best practices",
    ],
    challenges: [
      {
        title: "Performance Optimization",
        description:
          "Identified performance bottlenecks affecting application responsiveness and user experience.",
        solution:
          "Implemented optimization techniques and best practices to improve application speed and responsiveness.",
      },
      {
        title: "Code Quality Improvement",
        description:
          "Needed to ensure consistent code quality across the platform while learning enterprise coding standards.",
        solution:
          "Actively participated in code reviews, implemented feedback, and integrated industry best practices into development workflow.",
      },
    ],
    achievements: [
      "Successfully enhanced overall user experience of DevSkill-v2 platform",
      "Improved application performance through optimization techniques",
      "Contributed to maintaining high code quality standards",
      "Developed proficiency in ASP.NET 5 and MSSQL",
      "Gained practical experience in enterprise software development lifecycle",
    ],
    technologies: [
      "C#",
      ".NET Core 3.1",
      "ASP.NET Core",
      "MS SQL",
      "Unit Testing",
      "Git",
    ],
  },
  {
    period: "December 2020 — January 2021",
    company: "AIT",
    logo: "/images/experiences/ait.jpg",
    role: "Software Engineer Intern (Bootcamp)",
    companyUrl: "https://www.ait.inc/",
    description: [
      "Participated in an intensive bootcamp program focusing on modern web development technologies and best practices.",
      "Gained hands-on experience with full-stack development through practical projects and team collaboration.",
    ],
    responsibilities: [
      "Collaborated with development team on feature implementations",
      "Managed code versions using Git for team projects",
      "Developed full-stack applications using various frameworks",
      "Participated in daily stand-ups and team meetings",
      "Worked on both individual and team projects",
    ],
    challenges: [
      {
        title: "Full-Stack Integration",
        description:
          "Needed to integrate React frontend with .NET backend in a pet project while learning both technologies.",
        solution:
          "Successfully implemented end-to-end features by following best practices and leveraging team knowledge.",
      },
      {
        title: "Multi-Framework Development",
        description:
          "Required to work with both React and Angular frameworks simultaneously while maintaining code quality.",
        solution:
          "Created structured learning approach and successfully delivered projects in both frameworks.",
      },
    ],
    achievements: [
      "Built e-commerce and social media applications using React and Angular",
      "Successfully integrated React with .NET backend in pet projects",
      "Developed proficiency in C# and .NET Core 3.1",
      "Mastered Git workflow and team collaboration practices",
      "Gained practical experience with MSSQL in real-world projects",
    ],
    technologies: [
      "C#",
      "ASP.NET Core 3.1",
      "MS SQL",
      "React",
      "Angular",
      "Git",
      "StackBlitz",
    ],
  },
];

const ExperienceDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Detailed Experience | Md Rakibul Islam</title>
        <meta
          name="description"
          content="Detailed professional experience and achievements"
        />
      </Head>

      <main className="relative mx-auto min-h-screen max-w-screen-xl px-4 py-8 font-sans md:px-12 md:py-20 lg:px-24 lg:py-24">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <button
            type="button"
            title="mobileNav"
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="fixed top-4 right-4 z-50 rounded-lg bg-slate-800 p-2 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-teal-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div
            className={`fixed w-full bg-slate-900/95 backdrop-blur-sm
  left-0 inset-y-0 p-5
  lg:w-1/4 lg:inset-auto lg:left-auto lg:p-0
  transform transition-transform duration-300 ease-in-out
  lg:bg-transparent lg:backdrop-blur-none
            ${isNavOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
          `}
          >
            <Link
              className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Md Keiuom Miah
            </Link>

            <nav className="sticky top-8 mt-12" aria-label="Company navigation">
              <div className="border-l border-slate-800">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTab(index);
                      setIsNavOpen(false);
                    }}
                    className={`
                        w-full flex items-center gap-3 py-3 pl-4 -ml-px
                        border-l-2 transition-all duration-200
                        ${activeTab === index
                        ? "border-teal-300 text-teal-300"
                        : "border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-400"
                      }
                      `}
                  >
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={40}
                      height={40}
                      className="rounded"
                    />
                    <div className="text-left">
                      <div className="text-sm font-medium">{exp.company}</div>
                      <div className="text-xs opacity-80">{exp.period}</div>
                    </div>
                  </button>
                ))}
              </div>
            </nav>
          </div>

          <div className="lg:ml-[25%]">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`${activeTab === index ? "block" : "hidden"}`}
              >
                <div className="space-y-6 lg:space-y-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl lg:text-2xl font-medium text-slate-200">
                      {exp.role}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-200 hover:text-teal-300"
                    >
                      Visit Company →
                    </a>
                  </div>

                  <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200 mb-4">
                        Key Responsibilities
                      </h4>
                      <ul className="list-disc pl-6 space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-sm leading-normal">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-200 mb-4">
                        Key Achievements
                      </h4>
                      <ul className="list-disc pl-6 space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm leading-normal">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {exp.challenges.length > 0 &&
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200 mb-4">
                        Challenges & Solutions
                      </h4>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {exp.challenges.map((challenge, i) => (
                          <div key={i} className="rounded-lg bg-slate-800/50 p-4">
                            <h5 className="font-medium text-slate-200">
                              {challenge.title}
                            </h5>
                            <p className="mt-2 text-sm">
                              Challenge: {challenge.description}
                            </p>
                            <p className="mt-2 text-sm text-teal-300">
                              Solution: {challenge.solution}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200 mb-4">
                      Technologies Used
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <li
                          key={i}
                          className="rounded-full bg-teal-400/10 px-3 py-1"
                        >
                          <span className="text-xs font-medium text-teal-300">
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ExperienceDetails;
