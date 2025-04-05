import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: string;  // ✅ ADDED missing `type` field
  companyName: string;
  category: string[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: string; // ✅ Changed `any` → `string`
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "caastle-software-engineer",
    type: "Professional",
    companyName: "CaaStle Technology",
    companyLogoImg: "/caastle-logo.png",
    startDate: new Date("2023-08-01"),
    endDate: new Date(),
    category: ["Software Engineer"],
    shortDescription: "Developed automation workflows and integrated marketing APIs.",
    techStack: ["Java", "Spring Boot", "Oozie", "Kafka", "Apache Spark", "MySQL", "AWS"],
    descriptionDetails: {
      paragraphs: [
        "Led the development of a new workflow for Purchase Orders related to Borrow Orders and E-commerce Orders.",
        "Automated business logic using Oozie Jobs, RESTlet APIs, and Spring Boot, improving efficiency.",
        "Integrated RESTful APIs with Meta and Google Conversion APIs, optimizing data-driven insights.",
      ],
      bullets: [
        "Reduced memory usage by 40% and improved processing time by 30% using advanced system design techniques.",
        "Developed an AI classification project using Java-based microservices, leading to a 10% increase in orders.",
        "Utilized Apache Kafka and Apache Spark for real-time data processing and large-scale transformations.",
      ],
    },
    githubLink: "https://github.com/adityasaxena-crypto",
    websiteLink: "https://caastle.com",
    pagesInfoArr: [
      {
        title: "Order Lifecycle Automation",
        description: "Implemented automation for order lifecycle using Java-based microservices.",
        imgArr: ["/images/order-lifecycle.png"],
      },
      {
        title: "Marketing API Integration",
        description: "Integrated Google and Meta conversion tracking APIs for improved analytics.",
        imgArr: ["/images/api-integration.png"],
      },
    ],
  },
  {
    id: "caastle-software-intern-2022",
    type: "Internship",
    companyName: "CaaStle Technology",
    companyLogoImg: "/caastle-logo.png",
    startDate: new Date("2022-06-01"),
    endDate: new Date("2022-08-01"),
    category: ["Software Engineer Intern"],
    shortDescription: "Developed internal tools and automated workflows using REST APIs.",
    techStack: ["Java", "Spring Boot", "RESTlet APIs", "Oozie", "MySQL"],
    descriptionDetails: {
      paragraphs: [
        "Developed and maintained internal tools while working extensively with RESTlet APIs.",
        "Optimized existing APIs to reduce NetSuite dependency, improving scalability.",
        "Automated Oozie workflows, reducing manual efforts and improving efficiency.",
      ],
      bullets: [
        "Enhanced system capabilities with optimized RESTful APIs.",
        "Implemented workflow automation, streamlining operational processes.",
      ],
    },
    pagesInfoArr: [],
  },
  {
    id: "caastle-software-intern-2021",
    type: "Internship",
    companyName: "CaaStle Technology",
    companyLogoImg: "/caastle-logo.png",
    startDate: new Date("2021-08-01"),
    endDate: new Date("2021-11-01"),
    category: ["Software Engineer Intern"],
    shortDescription: "Developed a Java-based Jira automation tool and optimized Python scripts.",
    techStack: ["Java", "Python", "JQL", "Atlassian BitBucket", "Bamboo", "JIRA"],
    descriptionDetails: {
      paragraphs: [
        "Developed a Java-based application for Atlassian Jira enabling bulk changes to Jira tickets.",
        "Optimized a Python script to resolve Daylight Savings Time issues in supply chain processes.",
        "Worked on business projects across multiple technology stacks, engaging in full SDLC processes.",
      ],
      bullets: [
        "Designed and deployed an automated ticketing system for Jira.",
        "Resolved time zone issues affecting supply chain workflows using Python scripts.",
      ],
    },
    pagesInfoArr: [],
  },
];


export const featuredExperiences = Experiences.slice(0, 3);