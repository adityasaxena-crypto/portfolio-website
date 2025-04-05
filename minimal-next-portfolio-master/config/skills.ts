import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: string;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Apache Spark",
    description: "Big data processing framework optimized for large-scale analytics.",
    rating: 4,
    icon: "spark.svg",
  },
  {
    name: "Spring Boot",
    description: "Rapidly build production-ready Spring applications with minimal configuration.",
    rating: 4,
    icon: "spring.svg",
  },
  {
    name: "Flask",
    description: "Lightweight Python web framework for building scalable applications quickly.",
    rating: 4,
    icon: "flask.svg",
  },
  {
    name: "SQL",
    description: "Query and manipulate relational databases using structured query language.",
    rating: 4,
    icon: "sql.svg",
  },
  {
    name: "Python",
    description: "Versatile programming language used in AI, ML, and backend development.",
    rating: 5,
    icon: "python.svg",
  },
  {
    name: "C/C++",
    description: "Low-level programming languages used for high-performance applications and system programming.",
    rating: 4,
    icon: "cplusplus.svg",
  },
  {
    name: "Java",
    description: "High-performance object-oriented programming language used in enterprise applications.",
    rating: 5,
    icon: "java.svg",
  },
  {
    name: "Apache Kafka",
    description: "Distributed event streaming platform used for high-performance data pipelines.",
    rating: 4,
    icon: "kafka.svg",
  },
  {
    name: "JIRA",
    description: "Agile project management tool used for tracking and organizing software development tasks.",
    rating: 4,
    icon: "jira.svg",
  },
  {
    name: "Apache Oozie",
    description: "Workflow scheduling system for automating big data jobs.",
    rating: 4,
    icon: "oozie.svg",
  },
  {
    name: "Mockito",
    description: "Java framework for writing unit tests with mock objects.",
    rating: 4,
    icon: "mockito.svg",
  },
  {
    name: "Junit",
    description: "Unit testing framework for Java applications.",
    rating: 4,
    icon: "junit.svg",
  },
  {
    name: "Bitbucket",
    description: "Git-based repository management solution for software development teams.",
    rating: 4,
    icon: "bitbucket.svg",
  },
  {
    name: "GitHub",
    description: "Cloud-based hosting service for managing Git repositories.",
    rating: 5,
    icon: "github.svg",
  },
  {
    name: "Azure",
    description: "Cloud computing platform for deploying and managing applications.",
    rating: 3,
    icon: "azure.svg",
  },
  {
    name: "Git",
    description: "Version control system for tracking and managing code changes.",
    rating: 5,
    icon: "git.svg",
  },
  {
    name: "Docker",
    description: "Platform for developing, shipping, and running applications in containers.",
    rating: 4,
    icon: "docker.svg",
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
