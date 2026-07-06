import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";
import resume from "../../assets/resume/Prathamesh_Kate_Resume.pdf";


const navLinks = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const [activeSection, setActiveSection] = useState("hero");
useEffect(() => {
  const sections = document.querySelectorAll("section");

  const handleScroll = () => {
    let current = "hero";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border-b border-white/20 dark:border-gray-700 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <a
  href="#hero"
  className="transition-transform duration-300 hover:scale-110"
>
  <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
    PK
  </span>
</a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
  key={link.name}
  href={link.href}
  className="relative py-2 font-medium"
>
  <span
  className={`transition-colors duration-300 ${
    activeSection === link.id
      ? "text-blue-600 dark:text-blue-400 font-semibold"
      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
  }`}
>
  {link.name}
</span>

 <span
  className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${
    activeSection === link.id ? "w-full" : "w-0"
  }`}
/>
</a>
          ))}

          <ThemeToggle />

         <a
  href={resume}
//   download="Prathamesh_Kate_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
>
  <Download size={18} /> Resume
</a>
        </nav>

        {/* Mobile Button */}
       <div className="flex items-center gap-3 md:hidden">
  <ThemeToggle />

  <button
    onClick={() => setIsOpen(!isOpen)}
    aria-label="Toggle Menu"
  >
    {isOpen ? <X /> : <Menu />}
  </button>
</div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}