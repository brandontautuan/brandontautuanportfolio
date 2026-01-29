import { motion } from 'motion/react';
import { useInView } from './useInView';

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20 bg-[#343A40]">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-8 text-[#F8F9FA]">About Me</h2>
          
          <div className="space-y-6 text-lg text-[#CED4DA]">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I'm a software engineer passionate about building scalable, user-centric applications.
              With a strong foundation in computer science and years of hands-on experience, I specialize
              in full-stack development and system design.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              My approach combines technical excellence with creative problem-solving, ensuring that
              every project not only meets requirements but exceeds expectations. I thrive in
              collaborative environments and am always eager to learn new technologies.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}