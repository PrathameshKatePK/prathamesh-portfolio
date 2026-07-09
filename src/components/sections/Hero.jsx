import { ArrowDown } from 'lucide-react';
import profileImg from '../../assets/images/Prathamesh_profile_2.jpeg';
import FadeIn from "../common/FadeIn";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Profile Image */}
      <div className="mb-6">
        <img 
          src={profileImg} 
          alt="Prathamesh Profile" 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 shadow-lg object-cover"
        />
      </div>

      {/* Main Heading */}
      <FadeIn>
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Hi, I'm <span className="text-blue-600">Prathamesh</span>
      </h1>
      </FadeIn>
      
      {/* Subheading */}
      <FadeIn delay={0.2}>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
        A Frontend Developer building modern, responsive, and user-friendly web experiences.
      </p>
</FadeIn>
      {/* Call to Action Buttons */}
      <div className="flex gap-4 mb-12">
        <a 
          href="#projects" 
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition shadow-md"
        >
          View My Work
        </a>
        <a 
          href="#contact" 
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          Contact Me
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="animate-bounce">
        <ArrowDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
}   