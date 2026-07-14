import portfolioImg from "../assets/images/portfolio.png";
import weatherImg from "../assets/images/weather-app.webp";
import ecommerceImg from "../assets/images/ecommerce.jpg";

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
];