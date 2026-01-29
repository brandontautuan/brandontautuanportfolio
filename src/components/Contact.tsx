import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useInView } from './useInView';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' }
];

export function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#212529] text-[#F8F9FA]">
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 text-[#F8F9FA]">Let's Work Together</h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-[#ADB5BD] mb-12 max-w-2xl mx-auto"
          >
            I'm always interested in hearing about new opportunities and collaborations.
            Feel free to reach out!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-6 justify-center flex-wrap mb-12"
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 border-2 border-[#F8F9FA] flex items-center justify-center hover:bg-[#F8F9FA] hover:text-[#212529] transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm text-[#6C757D] pt-12 border-t border-[#343A40]"
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}