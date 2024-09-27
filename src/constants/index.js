import ProjectImg1 from "../assets/images/matcheron.webp";
import ProjectImg2 from "../assets/images/next-nannies.webp";
import ProjectImg3 from "../assets/images/qloud.webp";
import ProjectImg4 from "../assets/images/sepiolite.webp";
import TestimonialImg1 from "../assets/images/asim.jpeg";
import TestimonialImg2 from "../assets/images/shayan.jpeg";
import TestimonialImg3 from "../assets/images/abubakar.jpeg";
import { RiGroupLine } from "react-icons/ri";
import { HiOutlineCursorArrowRipple } from "react-icons/hi2";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { PiFigmaLogo } from "react-icons/pi";

export const navItems = [
  {
    id: 0,
    link: "/",
    text: "/Home",
  },

  {
    id: 1,
    link: "/Work",
    text: "/Work",
  },

  {
    id: 2,
    link: "/About",
    text: "/About",
  },

  {
    id: 3,
    link: "/Contact",
    text: "/Contact",
  },
];

export const ProjectsData = [
  {
    id: 0,
    link: "https://matcheron.com/",
    title: "Matcheron",
    subTitle: "Dating • Design, Development",
    projectImg: ProjectImg1,
  },

  {
    id: 1,
    link: "https://nextnannies.com/",
    title: "Next Nannies",
    subTitle: "Childcare • Design, Development",
    projectImg: ProjectImg2,
  },

  {
    id: 2,
    link: "https://66c07120d9e6ac420573900f--jade-druid-c97080.netlify.app/",
    title: "Qloud",
    subTitle: "Service • Design, Development",
    projectImg: ProjectImg3,
  },

  {
    id: 3,
    link: "https://66c06a0c5b098b3a1eea1d6f--capable-pie-aef911.netlify.app/",
    title: "Sepiolite",
    subTitle: "Consulting • Design, Development",
    projectImg: ProjectImg4,
  },
];

export const FaqsData = [
  {
    id: 0,
    title: "What technologies do you specialize in?",
    content:
      "I specialize in HTML, CSS, JavaScript, and frameworks such as React. I also use tools like Tailwind CSS for styling and Webpack for bundling, with experience in integrating animations using GSAP.",
  },

  {
    id: 1,
    title: "What type of projects have you worked on?",
    content:
      "I've worked on a variety of projects, from personal portfolios to complex dashboards and websites for clients. My recent work includes integrating animations, creating dynamic forms, and using React Flow for interactive diagrams.",
  },

  {
    id: 2,
    title:
      "Do you work with responsive design and cross-browser compatibility?",
    content:
      "Yes, I ensure that all my projects are fully responsive and compatible across major browsers. I use modern CSS techniques and frameworks like Tailwind CSS to optimize for mobile and desktop devices.",
  },

  {
    id: 3,
    title: "Do you work with backend technologies as well?",
    content:
      "While I primarily focus on frontend development, I have collaborated with backend developers and worked with APIs such as WordPress REST API to fetch and display dynamic content.",
  },

  {
    id: 4,
    title: "Can you integrate third-party libraries and APIs into a project?",
    content:
      "Absolutely! I frequently integrate third-party libraries like React Trend for data visualization and GSAP for animations. I'm also proficient in connecting APIs to display dynamic data efficiently.",
  },
];

export const TestimonialsData = [
  {
    id: 0,
    imgURL: TestimonialImg1,
    title: "Asim Farooq",
    subTitle: "XConnIO, Core Developer",
    des: "I had the pleasure of working with Taha on a project where he developed a dashboard for us. His expertise in HTML, CSS, and JavaScript is impressive, and he delivered a clean, functional, and aesthetically pleasing product. Throughout the project, Taha demonstrated professionalism, clear communication, and a strong commitment to meeting deadlines. I highly recommend him for any web development needs.",
  },

  {
    id: 1,
    imgURL: TestimonialImg2,
    title: "Shayan Khan",
    subTitle: "CEO, Spotvision Agency",
    des: "Taha did an outstanding job developing a website for me using React. His technical skills and attention to detail resulted in a highly functional and visually appealing site. Taha was proactive, responsive, and a pleasure to work with throughout the project. I highly recommend his services to anyone in need of a skilled web developer.",
  },

  {
    id: 2,
    imgURL: TestimonialImg3,
    title: "Abubakar Sheerazi",
    subTitle: "CEO, Frototype Agency",
    des: "Taha built a custom React dashboard for our business that exceeded expectations. The dashboard is visually intuitive, highly functional, and efficient. With complex data visualizations, user management, and responsive design, it allows our team to analyze and interact with data in real-time. Taha’s understanding of our needs and ability to deliver a user-friendly interface has significantly improved our workflow. Highly recommend Taha for any React projects!",
  },
];

export const ApproachData = [
  {
    id: 0,
    icon: RiGroupLine,
    title: "Understanding the Requirements",
    content:
      "I start by gaining a deep understanding of the project’s objectives and user needs, ensuring the design and functionality are perfectly aligned with the vision.",
    color: "#3C80DD",
  },

  {
    id: 1,
    icon: HiOutlineCursorArrowRipple,
    title: "User-Centered Design",
    content:
      "I focus on translating designs into intuitive, responsive interfaces that deliver seamless user experiences across all devices.",
    color: "#72B0A5",
  },

  {
    id: 2,
    icon: HiOutlineRocketLaunch,
    title: "Writing Clean, Scalable Code",
    content:
      "I prioritize writing efficient, maintainable code, ensuring performance and scalability while adhering to best practices.",
    color: "#C399FE",
  },

  {
    id: 3,
    icon: FaRegHeart,
    title: "Collaborative Development",
    content:
      "I believe in close collaboration with teams and stakeholders, using feedback to continuously refine and enhance the product throughout the development process.",
    color: "#E86E5C",
  },
];

export const SkillsData = [
  {
    id: 0,
    icon: ImHtmlFive2,
    skill: "Html",
    color: "#f06529",
  },

  {
    id: 1,
    icon: FaCss3,
    skill: "Css",
    color: "#2965f1",
  },

  {
    id: 2,
    icon: FaSass,
    skill: "Sass",
    color: "#cc6699",
  },

  {
    id: 3,
    icon: RiBootstrapLine,
    skill: "Bootstrap",
    color: "#563d7c",
  },

  {
    id: 4,
    icon: SiTailwindcss,
    skill: "Tailwind Css",
    color: "#06b6d4",
  },

  {
    id: 5,
    icon: RiJavascriptLine,
    skill: "Javascript",
    color: "#f0db4f",
  },

  {
    id: 6,
    icon: FaReact,
    skill: "React",
    color: "#61DBFB",
  },

  {
    id: 7,
    icon: FiGithub,
    skill: "Git/Github",
    color: "#6cc644",
  },

  {
    id: 8,
    icon: PiFigmaLogo,
    skill: "Figma",
    color: "#ff7262",
  },
];

export const ExperienceData = [
  {
    id: 0,
    tenure: "2024 - Present",
    category: "Frontend Developer",
    company: "Frototype Agency",
  },

  {
    id: 1,
    tenure: "2023 - 2024",
    category: "Frontend Developer",
    company: "Creative Cycle",
  },
];

export const navSocialItems = [
  {
    id: 0,
    text: "Linkedin",
    link: "https://www.linkedin.com/in/tahabaigdev",
  },

  {
    id: 1,
    text: "GitHub",
    link: "https://github.com/tahabaigdev",
  },

  {
    id: 2,
    text: "Email",
    link: "mailto:connectmtb@gmail.com",
  },
];
