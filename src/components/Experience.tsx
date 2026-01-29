import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';
import { useInView } from './useInView';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    period: 'Jan 2022 - Present',
    description: 'Led development of microservices architecture serving 5M+ users. Mentored junior engineers and drove technical decisions for cloud infrastructure.',
    achievements: [
      'Reduced system latency by 40%',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Led migration to Kubernetes cluster'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Digital Solutions Corp',
    location: 'Austin, TX',
    period: 'Jun 2019 - Dec 2021',
    description: 'Developed full-stack features for enterprise SaaS platform. Collaborated with cross-functional teams to deliver high-quality solutions.',
    achievements: [
      'Built real-time notification system',
      'Optimized database queries improving performance by 50%',
      'Developed RESTful APIs serving 100K+ daily requests'
    ]
  },
  {
    title: 'Junior Software Developer',
    company: 'StartUp Labs',
    location: 'Remote',
    period: 'Aug 2017 - May 2019',
    description: 'Contributed to various web applications using modern frameworks. Gained experience in agile development and collaborative coding practices.',
    achievements: [
      'Implemented responsive UI components',
      'Participated in code reviews and pair programming',
      'Delivered features for 3 major product releases'
    ]
  }
];

export function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="min-h-screen px-6 py-20 bg-[#343A40]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-[#F8F9FA]"
        >
          Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border-2 border-[#6C757D] p-8 hover:bg-[#F8F9FA] hover:text-[#495057] transition-colors group bg-[#495057]"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <div className="text-lg text-[#E9ECEF] group-hover:text-[#495057] mb-3">{exp.company}</div>
                
                <div className="flex flex-wrap gap-4 text-sm text-[#ADB5BD] group-hover:text-[#6C757D]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-[#CED4DA] group-hover:text-[#6C757D] mb-4 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-[#ADB5BD] group-hover:text-[#6C757D] flex items-start gap-2"
                  >
                    <span className="mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}