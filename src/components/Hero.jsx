import { motion } from "framer-motion";
import PropTypes from "prop-types";
import profile2 from "../assets/p2.png";
import { getContent } from "../data/portfolioData";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = ({ lang }) => {
  const { name, title, HERO_CONTENT } = getContent(lang);
  const isRTL = lang === "DZ";

  return (
    <section className="pt-6 pb-12 lg:mb-20">
      <div className="flex flex-wrap items-center lg:flex-row-reverse">
        {/* Profile Image Column */}
        <div className="w-full lg:w-1/2 flex justify-center py-6 lg:py-0">
          <motion.img
            src={profile2}
            alt="Youcef Habib Ouahab – profile photo"
            className="w-48 h-64 sm:w-64 sm:h-84 rounded-full border border-stone-800 md:rounded-3xl shadow-xl shadow-stone-950/80 object-cover"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
        </div>

        {/* Text Column */}
        <div className="w-full lg:w-1/2 px-2 sm:px-6 lg:px-8">
          <motion.div
            className={`flex flex-col items-center mt-6 lg:mt-0 ${
              isRTL ? "lg:items-start lg:text-start" : "lg:items-start lg:text-start"
            }`}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className={`pb-2 text-4xl sm:text-6xl lg:text-7xl font-bold ${
                isRTL ? "tracking-normal leading-tight" : "tracking-tighter"
              }`}
              variants={childVariants}
            >
              {name}
            </motion.h1>

            <motion.span
              className="bg-gradient-to-r from-stone-200 via-stone-400 to-stone-600 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent font-medium"
              variants={childVariants}
            >
              {title}
            </motion.span>

            <motion.p
              className={`my-3 max-w-lg py-3 text-base sm:text-lg leading-relaxed text-stone-400 ${
                isRTL ? "tracking-normal text-right" : "tracking-tight"
              }`}
              variants={childVariants}
            >
              {HERO_CONTENT}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  lang: PropTypes.string,
};

export default Hero;
