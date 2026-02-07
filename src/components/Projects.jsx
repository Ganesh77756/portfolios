import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Wander-lust",
        description: "Full-stack property rental and booking platform",
        tags: ["Full-Stack","JavaScript","Node.js","MongoDB"],
        github: "https://github.com/Ganesh77756/Wander-lust", 
    },
    {
        title: "Expence-Tracker",
        description: "Personal expense tracking and budget management app",
        tags: ["MERN Stack", "Tailwind","HTML/CSS"],
        github: "https://github.com/Ganesh77756/expense-tracker",
           },
    {
        title: "Weather-App",
        description: "Real-time weather updates using live API data",
        tags: ["React"],
        github: "https://github.com/Ganesh77756/weather-app",
          },
    {
        title: "Simon-Says-Game",
        description: "Memory-based color sequence game using JavaScript",
        tags: [ "HTML/CSS/JAVAScript"],
        github: "https://github.com/Ganesh77756/Simon-Says-Game",
          },
    {
        title: "Tic-Tac-Toe",
        description: "Classic Tic-Tac-Toe game built with JavaScript  ",
        tags: ["HTML/CSS/JAVAScript"],
        github: "#",
        demo: "#"
    },  

];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
        >
            <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-3">
                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={project.demo} className="text-gray-400 hover:text-white transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>

                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-neon-green bg-neon-green/10 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 text-center"
                >
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">Projects</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
