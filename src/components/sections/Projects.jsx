import { projects } from "../../data/projects";
import { GitFork, ExternalLink } from "lucide-react";
import FadeIn from "../common/FadeIn";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Here are some of the projects I have built to improve my frontend
              development skills and solve real-world problems.
            </p>
          </FadeIn>
        </div>

        {/* Projects */}
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 flex flex-col"
              >

                {/* Project Image */}
                <div className="relative h-52 overflow-hidden">

                  {project.featured && (
                    <span className="absolute top-3 left-3 z-10 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow">
                      ⭐ Featured
                    </span>
                  )}

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {project.featured ? "View Portfolio" : "View Project"}
                    </span>
                  </div>

                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg py-2 font-medium transition"
                    >
                      <GitFork size={18} />
                      Code
                    </a>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 font-medium transition"
                      >
                        <ExternalLink size={18} />
                        Live
                      </a>
                    )}

                  </div>

                </div>

              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}