import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from './useInView';

const projects = [
  {
    title: 'Distributed Task Scheduler',
    description: 'Built a scalable task scheduling system handling 10M+ daily operations using microservices architecture.',
    tech: ['Go', 'Kubernetes', 'Redis', 'PostgreSQL'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Real-time Collaboration Platform',
    description: 'Developed a collaborative workspace with real-time sync, supporting 100K+ concurrent users.',
    tech: ['React', 'WebSocket', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Machine Learning Pipeline',
    description: 'Created an automated ML pipeline for data preprocessing, model training, and deployment.',
    tech: ['Python', 'TensorFlow', 'Docker', 'AWS'],
    github: '#',
    demo: '#'
  },
  {
    title: 'API Gateway Service',
    description: 'Designed a high-performance API gateway with rate limiting, caching, and authentication.',
    tech: ['Rust', 'gRPC', 'etcd', 'Prometheus'],
    github: '#',
    demo: '#'
  }
];

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-[#495057]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-[#F8F9FA]"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border-2 border-[#6C757D] p-8 hover:bg-[#F8F9FA] hover:text-[#495057] transition-colors group bg-[#343A40]"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="mb-6 text-[#CED4DA] group-hover:text-[#6C757D]">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm border border-[#6C757D] group-hover:border-[#495057]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 hover:underline"
                >
                  <Github className="w-5 h-5" />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 hover:underline"
                >
                  <ExternalLink className="w-5 h-5" />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}