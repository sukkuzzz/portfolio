export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Natours - A Tour Management app",
    desc: "This project is a tour management app built using Node.js and Express.js for the backend, with Pug as the templating engine to render views. I employed MongoDB for database management and integrated Stripe for payment processing. ",
    subdesc:
      "For email services, I used Brevo (formerly Sendinblue) and SendGrid, and integrated Nodemailer to send emails within the application. I utilized Mapbox for mapping and geolocation features. To ensure secure authentication, I implemented JWT tokens, allowing users to access protected routes in a seamless and secure manner",
    href: "https://github.com/sukkuzzz/natours",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/nodejs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "mongoDB",
        path: "/assets/mongodb.png",
      },
      {
        id: 4,
        name: "Stripe",
        path: "/assets/stripe.png",
      },
    ],
  },
  {
    title: "Rubiks Cube Solver",
    desc: "The Rubik's Cube Solver is an algorithm-based tool that helps solve the Rubik's Cube puzzle. It uses techniques like BFS, DFS, and IDDFS to determine the optimal sequence of moves required to solve the cube from any given configuration.",
    subdesc:
      "By analyzing the cube’s current state, the solver calculates the most efficient solution path using search algorithms, providing a step-by-step guide to solve the puzzle. Whether you're a beginner or an advanced solver, this tool simplifies the process by offering clear, logical moves to restore the cube to its solved state.",
    href: "https://github.com/sukkuzzz/RUBIKS-CUBE",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/assets/c++.png",
      },
    ],
  },
  {
    title: "DALL-E - A Photo Manipulation App",
    desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
    subdesc:
      "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
    href: "https://github.com/sukkuzzz/DALL-E-SeeIt",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "openAI",
        path: "/assets/openai.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "CodesDope Pvt. Ltd.",
    pos: "Software Developer Intern",
    duration: "May 2024 - July 2024",
    title:
      "Interned as a Software Developer at CodesDope Pvt. Ltd., where we built a CRUD-based server for authentication, implemented Redis caching to improve response time, and integrated Cron jobs for task scheduling. They worked with the MERN stack, enhancing backend efficiency and scalability.",
    icon: "/assets/redis.png",
    animation: "victory",
  },
  // {
  //   id: 2,
  //   name: "Figma",
  //   pos: "Web Developer",
  //   duration: "2020 - 2022",
  //   title:
  //     "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
  //   icon: "/assets/figma.svg",
  //   animation: "clapping",
  // },
  // {
  //   id: 3,
  //   name: "Notion",
  //   pos: "Junior Web Developer",
  //   duration: "2019 - 2020",
  //   title:
  //     "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
  //   icon: "/assets/notion.svg",
  //   animation: "salute",
  // },
];
