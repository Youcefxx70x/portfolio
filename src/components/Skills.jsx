import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { SiJavascript, SiPython, SiTypescript } from "react-icons/si";
import { getContent } from "../data/portfolioData";
import { cn } from "../utils/helper";

const SKILLS = [
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-300",
    bg: "bg-blue-300",
    widthPercent: "80%",
    duration: 2,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-300",
    bg: "bg-yellow-300",
    widthPercent: "65%",
    duration: 4,
  },
  {
    name: "Python",
    icon: SiPython,
    color: "text-[#3776AB]",
    bg: "bg-[#3776AB]",
    widthPercent: "50%",
    duration: 5,
  },
];

const Skills = ({ lang }) => {
  const { languagesHeading } = getContent(lang);

  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center text-4xl font-bold"
      >
        {languagesHeading}
      </motion.h2>

      <div className="w-full sm:w-96 mx-auto border-2 border-stone-800 rounded-lg h-[200px] flex flex-col">
        {SKILLS.map((skill) => (
          <div className="flex-1 w-full flex" key={skill.name}>
            {/* Icon column */}
            <div className="w-12 flex items-center justify-center flex-shrink-0">
              <skill.icon className={cn("text-3xl", skill.color)} aria-label={skill.name} />
            </div>

            {/* Progress bar column */}
            <div className="flex-1 flex items-center pr-4">
              <div className="w-full h-3 bg-stone-900 rounded-full overflow-hidden">
                <motion.div
                  className={cn("h-full rounded-full", skill.bg)}
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.widthPercent }}
                  transition={{ duration: skill.duration, ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Label */}
            <div className="w-20 flex items-center">
              <span className={cn("text-sm font-semibold", skill.color)}>{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Skills.propTypes = {
  lang: PropTypes.string,
};

export default Skills;
