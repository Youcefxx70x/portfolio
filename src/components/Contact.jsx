import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { getContent } from "../data/portfolioData";

const Contact = ({ lang }) => {
  const { getInTouch, downloadResume, CONTACT } = getContent(lang);

  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        className="my-10 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
      >
        {getInTouch}
      </motion.h2>

      <motion.div
        className="text-center tracking-tighter"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="my-4 block hover:text-white transition-colors"
        >
          {CONTACT.email}
        </a>

        <div className="border-b border-stone-800 pb-6">
          <a
            href="/CV.pdf"
            download
            className="inline-block text-md my-5 px-4 py-2 lg:text-2xl lg:px-8 lg:py-4 rounded-lg bg-amber-50 text-black font-bold capitalize cursor-pointer hover:bg-amber-100 transition-colors"
          >
            {downloadResume}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

Contact.propTypes = {
  lang: PropTypes.string,
};

export default Contact;
