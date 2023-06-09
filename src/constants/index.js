import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  datum,
  iplex,
  panacloud,
  carrent,
  jobit,
  tripguide,
  itfiers,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "DatumSquare IT Services",
    icon: datum,
    iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Node.js, SQL, NO SQL databases and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "iplex",
    icon: iplex,
    iconBg: "#E6DEDD",
    date: "March 2022 - Feb 2023",
    points: [
      "Implemented scalable, performant, and user experience-focused features using React best practices.",
      "Integrated Gitlab's CI/CD pipelines for rapid release cycles and multiple environments.",
      "Led the transition from a legacy JavaScript codebase to TypeScript, including porting and refactoring.",
      "Modernized the PDF and CSV report export section using the latest technologies.",
      "Collaborated with support and content teams to address bug reports and feature requests, continuously improving current solutions.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "ITfiers",
    icon: itfiers,
    iconBg: "#383E56",
    date: "April 2021 - March 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related Built a robust project management application with features like project creation, task management, team collaboration, and real-time updates.",
      "Achieved fast initial page loads and improved search engine optimization through server-side rendering with Next.js.",
      "Implemented secure and easy-to-use authentication using Firebase.",
      "Ensured high performance, responsiveness, and scalability of the application using AWS Lambda, EC2, and efficient database queries with Prisma.",
    ],
  },
  {
    title: "JAM Stack developer",
    company_name: "Panacloud",
    icon: panacloud,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Apr 2021",
    points: [
      "Explored Jamstack serverless development and gained hands-on experience with AWS CDK during a software development internship.",
      "Built modern web applications using technologies such as React, Gatsby JS, Material UI, and Tailwind.",
      "Promoted to the position of software developer and contributed to an open-source project by integrating it with various AWS services.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hifz got a great sense of humor, A strong and goal-oriented team player with good problem-solving skills. Hifz is an asset to any company. Overall joy to work with.",
    name: "Farhan Ullah",
    designation: "Tech Lead",
    company: "iplex (linkedin)",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
