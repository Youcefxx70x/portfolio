import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { getContent } from "../data/portfolioData";

const Projects = ({ lang }) => {
  const { projectsHeading, PROJECTS } = getContent(lang);

  return (
    <div className="pb-4">
      <motion.h2
        className="my-20 text-center text-4xl font-bold"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        {projectsHeading}
      </motion.h2>

      <div>
        {PROJECTS.map((item) => (
          <div key={item.title} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              className="w-full lg:w-1/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              <img
                src={item.image}
                width={250}
                height={250}
                alt={item.title}
                className="mb-2 rounded-lg bg-stone-950"
              />
            </motion.div>

            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              <h3 className="font-semibold mb-2 text-2xl">{item.title}</h3>
              <p className="text-stone-400 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

Projects.propTypes = {
  lang: PropTypes.string,
};

export default Projects;
