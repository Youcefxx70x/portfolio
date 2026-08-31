import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { RiNextjsFill, RiReactjsLine, RiSupabaseFill } from "react-icons/ri";
import { SiDjango, SiExpo } from "react-icons/si";
import { getContent } from "../data/portfolioData";

const floatVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [40, -40],
    x: [20, -20],
    transition: { duration, ease: "linear", repeat: Infinity, repeatType: "reverse" },
  },
});

const TECH_ICONS = [
  { icon: RiReactjsLine, label: "React", color: "text-cyan-700", duration: 3 },
  { icon: RiNextjsFill, label: "Next.js", color: "", duration: 3 },
  { icon: SiExpo, label: "Expo", color: "text-stone-300", duration: 5 },
  { icon: DiRedis, label: "Redis", color: "text-red-600", duration: 2 },
  { icon: SiDjango, label: "Django", color: "text-green-900", duration: 6 },
  { icon: RiSupabaseFill, label: "Supabase", color: "", duration: 4 },
  { icon: BiLogoPostgresql, label: "PostgreSQL", color: "text-blue-900", duration: 4 },
];

const Technologies = ({ lang }) => {
  const { technologiesHeading } = getContent(lang);

  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="my-20 text-center text-4xl font-bold"
      >
        {technologiesHeading}
      </motion.h2>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
      >
        {TECH_ICONS.map(({ icon: Icon, label, color, duration }) => (
          <motion.div
            key={label}
            initial="initial"
            animate="animate"
            variants={floatVariant(duration)}
            className="flex flex-col items-center"
          >
            <Icon className={`text-8xl ${color}`} />
            <p className={`text-center font-bold text-lg px-2 ${color}`}>{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

Technologies.propTypes = {
  lang: PropTypes.string,
};

export default Technologies;
