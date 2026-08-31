import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  FaCheck,
  FaCopy,
  FaDownload,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { getContent } from "../data/portfolioData";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Contact = ({ lang }) => {
  const { getInTouch, downloadResume, CONTACT } = getContent(lang);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TooltipProvider delayDuration={150}>
      <section className="border-t border-stone-900 pb-24 pt-16">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold tracking-tight"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          {getInTouch}
        </motion.h2>

        <motion.div
          className="max-w-lg mx-auto rounded-2xl border border-stone-800/80 bg-stone-950/60 backdrop-blur-md p-6 sm:p-8 shadow-2xl shadow-black/80"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          {/* Contact Details List */}
          <div className="space-y-3.5">
            {/* Location */}
            <div className="flex items-center gap-3.5 px-4 py-3 rounded-xl border border-stone-900 bg-stone-900/30 text-stone-300 text-sm sm:text-base">
              <FaMapMarkerAlt className="text-stone-400 text-lg flex-shrink-0" />
              <span>{CONTACT.address}</span>
            </div>

            {/* Phone */}
            <a
              href={`tel:${CONTACT.phoneNo}`}
              className="flex items-center justify-between gap-3.5 px-4 py-3 rounded-xl border border-stone-900 bg-stone-900/30 text-stone-300 hover:text-white hover:border-stone-700/80 hover:bg-stone-900/60 transition-all text-sm sm:text-base group"
            >
              <div className="flex items-center gap-3.5">
                <FaPhoneAlt className="text-stone-400 group-hover:text-stone-200 transition-colors text-base flex-shrink-0" />
                <span>{CONTACT.phoneNo}</span>
              </div>
              <span className="text-xs text-stone-500 group-hover:text-stone-300 transition-colors">
                Call
              </span>
            </a>

            {/* Email with Tooltip & 1-Click Copy */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  aria-label="Copy email address"
                  className="w-full flex items-center justify-between gap-3.5 px-4 py-3 rounded-xl border border-stone-900 bg-stone-900/30 text-stone-300 hover:text-white hover:border-stone-700/80 hover:bg-stone-900/60 transition-all text-sm sm:text-base cursor-pointer group text-left"
                >
                  <div className="flex items-center gap-3.5 truncate">
                    <FaEnvelope className="text-stone-400 group-hover:text-stone-200 transition-colors text-base flex-shrink-0" />
                    <span className="truncate">{CONTACT.email}</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-stone-400 group-hover:text-stone-200 flex-shrink-0 font-medium transition-colors">
                    {copied ? (
                      <>
                        <FaCheck className="text-emerald-400 text-xs" />
                        <span className="text-emerald-400 font-semibold">
                          Copied!
                        </span>
                      </>
                    ) : (
                      <>
                        <FaCopy className="text-xs opacity-70 group-hover:opacity-100" />
                        <span>Copy</span>
                      </>
                    )}
                  </span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>{copied ? "Copied to clipboard!" : "Click to copy email"}</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Download Resume Action */}
          <div className="mt-6 pt-6 border-t border-stone-900">
            <a
              href="/CV.pdf"
              download
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-stone-200 text-stone-950 font-semibold hover:bg-white hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-black/40 cursor-pointer text-sm sm:text-base"
            >
              <FaDownload className="text-sm opacity-70" />
              <span>{downloadResume}</span>
            </a>
          </div>
        </motion.div>
      </section>
    </TooltipProvider>
  );
};

Contact.propTypes = {
  lang: PropTypes.string,
};

export default Contact;
