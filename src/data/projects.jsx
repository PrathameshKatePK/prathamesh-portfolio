import portfolioImg from "../assets/images/portfolio.png";
import weatherImg from "../assets/images/weather-app.webp";
import ecommerceImg from "../assets/images/ecommerce.jpg";
import learnHubImg from "../assets/images/Lernhub.png";
import roomPartnerImg from "../assets/images/roompartner.png";

export const projects = [
  {
    title: "Developer Portfolio",
    description:
      "A modern and responsive portfolio website built with React and Tailwind CSS. Features dark/light mode, smooth scrolling animations, EmailJS contact form, responsive design, and is deployed on Vercel.",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "EmailJS",
      "Vercel",
    ],
    github: "https://github.com/PrathameshKatePK/prathamesh-portfolio",
    link: "https://prathamesh-portfolio-mocha.vercel.app/",
    image: portfolioImg,
    featured: true,
  },

  {
    title: "RoomPartner",
    description:
      "A WordPress-based rental and flatmate finder designed to help students, bachelors, couples, and families find suitable accommodation. Features property listings, accommodation filters, custom post types, ACF fields, and user authentication.",
    tags: [
      "WordPress",
      "PHP",
      "MySQL",
      "Custom Theme",
      "ACF",
      "JavaScript",
    ],
    github: "https://github.com/PrathameshKatePK/RoomPartner",
    link: "",
    image: roomPartnerImg,
  },

  {
    title: "Weather App",
    description:
      "A responsive weather application that provides real-time weather information with a clean and user-friendly interface.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Weather API",
    ],
    github: "https://github.com/PrathameshKatePK/Weather-App",
    link: "",
    image: weatherImg,
  },

  {
    title: "E-Commerce Website",
    description:
      "An e-commerce website featuring product listings, shopping cart functionality and a responsive user interface for a smooth shopping experience.",
    tags: [
      "Angular",
      "Spring Boot",
      "Java",
      "MySQL",
    ],
    github: "https://github.com/PrathameshKatePK/E-commerce-Project",
    link: "",
    image: ecommerceImg,
  },

  {
    title: "Learn Hub",
    description:
      "A learning management system designed to provide an organized and engaging online learning experience.",
    tags: [
      "React",
      "Learning Management System",
      "Spring Boot",
      "MySQL",
      "JWT",
    ],
    github: "https://github.com/PrathameshKatePK/learnhub-lms",
    link: "",
    image: learnHubImg,
  },
];