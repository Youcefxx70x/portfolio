import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            type="button"
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full border border-stone-800 bg-neutral-950/80 backdrop-blur-md text-stone-300 shadow-xl shadow-black/80 hover:border-stone-600 hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer"
          >
            <FaChevronUp className="text-sm" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
