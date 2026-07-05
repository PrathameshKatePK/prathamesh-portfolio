import { bio, skills } from '../../data/skills';
import { Code2, Database, Layout, Wrench } from 'lucide-react';

// Icon mapping for categories
const categoryIcons = {
  Frontend: <Layout className="w-5 h-5 mb-2 text-blue-500" />,
  Backend: <Code2 className="w-5 h-5 mb-2 text-green-500" />,
  Database: <Database className="w-5 h-5 mb-2 text-yellow-500" />,
  Tools: <Wrench className="w-5 h-5 mb-2 text-purple-500" />,
  CMS: <Layout className="w-5 h-5 mb-2 text-orange-500" />,
};

export default function About() {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  return (
    <section id="about" className="py-24 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Bridging the gap between backend logic and frontend design.
          </p>
        </div>

        {/* Bio Section */}
        <div className="mb-20 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">{bio.headline}</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {bio.summary}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div 
              key={category} 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">
                {categoryIcons[category] || <Code2 className="w-5 h-5 text-gray-500" />}
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">{category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}   