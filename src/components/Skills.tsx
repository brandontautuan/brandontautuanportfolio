import { motion } from 'motion/react';
import { useInView } from './useInView';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['JavaScript/TypeScript', 'Python', 'Go', 'Rust', 'Java', 'C++']
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Vue', 'Tailwind CSS', 'Redux', 'GraphQL']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Django', 'FastAPI', 'gRPC', 'REST APIs']
  },
  {
    category: 'Infrastructure',
    skills: ['Docker', 'Kubernetes', 'AWS', 'PostgreSQL', 'Redis', 'MongoDB']
  }
];

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="min-h-screen px-6 py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-white">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
                    className="text-gray-300"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}