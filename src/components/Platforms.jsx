import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaDesktop, FaGlobe, FaMobileAlt, FaServer } from "react-icons/fa";
import { getContent } from "../data/portfolioData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const PLATFORM_ICONS = {
  web: FaGlobe,
  mobile: FaMobileAlt,
  backend: FaServer,
  desktop: FaDesktop,
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Platforms = ({ lang }) => {
  const { platformsHeading, PLATFORMS } = getContent(lang);

  return (
    <section className="pb-20 pt-8">
      <motion.h2
        className="my-16 text-center text-4xl font-bold tracking-tight"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
      >
        {platformsHeading}
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {PLATFORMS.map((platform) => {
          const Icon = PLATFORM_ICONS[platform.id] || FaGlobe;

          return (
            <motion.div key={platform.id} variants={cardItemVariants}>
              <Card className="h-full flex flex-col justify-between hover:border-stone-700 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3.5 mb-2">
                    <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 group-hover:text-white group-hover:border-stone-700 transition-colors">
                      <Icon className="text-xl" />
                    </div>
                    <CardTitle className="text-xl">{platform.title}</CardTitle>
                  </div>
                  <CardDescription className="text-stone-400 text-sm">
                    {platform.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {platform.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-stone-900/90 border border-stone-800/80 px-2.5 py-1 text-xs font-medium text-stone-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

Platforms.propTypes = {
  lang: PropTypes.string,
};

export default Platforms;
