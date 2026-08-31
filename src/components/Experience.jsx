import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { getContent } from "../data/portfolioData";

const Experience = ({ lang }) => {
  const { cursusHeading, EXPERIENCES } = getContent(lang);

  return (
    <section id="experience" className="pb-4 scroll-mt-28">
      <motion.h2
        className="my-20 text-center text-4xl font-bold"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        {cursusHeading}
      </motion.h2>

      {EXPERIENCES.map((exp) => (
        <div
          className="mb-8 flex flex-wrap lg:justify-center"
          key={exp.year + exp.role}
        >
          {/* Year */}
          <motion.div
            className="w-full lg:w-1/4"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <p className="mb-2 text-sm text-stone-400">{exp.year}</p>
          </motion.div>

          {/* Details */}
          <motion.div
            className="w-full max-w-xl lg:w-3/4"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <h3 className="mb-2 font-semibold">
              {exp.role}
              {exp.company ? (
                <>
                  {" – "}
                  <span className="text-sm text-stone-500">{exp.company}</span>
                </>
              ) : null}
            </h3>
            {exp.description && (
              <p className="mb-4 text-stone-400">{exp.description}</p>
            )}
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.technologies.map((tech) => (
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
    </section>
  );
};

Experience.propTypes = {
  lang: PropTypes.string,
};

export default Experience;
