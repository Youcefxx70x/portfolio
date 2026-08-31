import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { BiX } from "react-icons/bi";
import {
  FaBars,
  FaCheck,
  FaChevronDown,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { cn } from "../utils/helper";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const LANGUAGES = [
  { code: "GB", label: "English" },
  { code: "FR", label: "Français" },
  { code: "DZ", label: "العربية" },
];

const Navbar = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langMenuRef = useRef(null);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Responsive short labels for clean fit on all mobile screens
  const navLinks = [
    {
      label:
        lang === "DZ" ? "المنصات" : lang === "FR" ? "Domaines" : "Platforms",
      href: "#platforms",
    },
    {
      label:
        lang === "DZ" ? "المشاريع" : lang === "FR" ? "Projets" : "Projects",
      href: "#projects",
    },
    {
      label: lang === "DZ" ? "المسار" : lang === "FR" ? "Cursus" : "Experience",
      href: "#experience",
    },
    {
      label: lang === "DZ" ? "تواصل" : lang === "FR" ? "Contact" : "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none">
      <TooltipProvider delayDuration={150}>
        <AnimatePresence mode="wait">
          {isOpen ? (
            /* EXPANDED FULL PILL (Open by default) */
            <motion.nav
              key="expanded-navbar"
              layout
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="pointer-events-auto flex items-center justify-between gap-2 sm:gap-3 md:gap-5 rounded-full border border-stone-800/90 bg-neutral-950/85 px-3 sm:px-5 py-2 backdrop-blur-md shadow-2xl shadow-black/90 max-w-[96vw] sm:max-w-max"
            >
              {/* 1. Openable / Closable Language Switcher */}
              <div className="relative flex-shrink-0" ref={langMenuRef}>
                <button
                  onClick={() => setIsLangOpen((prev) => !prev)}
                  type="button"
                  aria-label="Toggle language menu"
                  aria-expanded={isLangOpen}
                  className="cursor-pointer flex items-center gap-1.5 rounded-full px-2 py-1 bg-stone-900/60 border border-stone-800/80 hover:border-stone-700 hover:bg-stone-900 text-stone-300 text-xs transition-all focus:outline-none"
                >
                  <ReactCountryFlag
                    countryCode={lang}
                    svg
                    style={{
                      width: "1.25em",
                      height: "1.25em",
                      borderRadius: "9999px",
                      display: "block",
                    }}
                  />
                  <FaChevronDown
                    className={cn(
                      "text-[8px] text-stone-400 transition-transform duration-200",
                      isLangOpen && "rotate-180",
                    )}
                  />
                </button>

                {/* Floating Language Dropdown Menu */}
                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full mt-2 left-0 min-w-[120px] rounded-xl border border-stone-800/90 bg-neutral-950/95 backdrop-blur-md p-1.5 shadow-2xl shadow-black/90 z-50 flex flex-col gap-1"
                    >
                      {LANGUAGES.map(({ code, label }) => (
                        <button
                          key={code}
                          onClick={() => {
                            setLang(code);
                            setIsLangOpen(false);
                          }}
                          type="button"
                          className={cn(
                            "w-full flex items-center justify-between gap-2.5 px-4 py-1.5 text-xs rounded-lg transition-colors cursor-pointer text-left",
                            lang === code
                              ? "bg-stone-900 text-white font-semibold"
                              : "text-stone-400 hover:text-stone-200 hover:bg-stone-900/50",
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <ReactCountryFlag
                              countryCode={code}
                              svg
                              style={{
                                width: "1.15em",
                                height: "1.15em",
                                borderRadius: "9999px",
                                display: "block",
                              }}
                            />
                            <span className="text-md">{label}</span>
                          </div>
                          {lang === code && (
                            <FaCheck className="text-md text-emerald-400 mx-4" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Divider */}
              <div className="h-3.5 w-px bg-stone-800 flex-shrink-0" />

              {/* 2. Navigation Links */}
              <div className="flex items-center gap-2 sm:gap-3.5 md:gap-5 text-[11px] sm:text-xs md:text-sm text-stone-400 font-medium whitespace-nowrap">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:text-white transition-colors duration-200 py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="h-3.5 w-px bg-stone-800 flex-shrink-0 hidden xs:block" />

              {/* 3. Social Icons */}

              <div className="flex items-center gap-2 text-sm sm:text-base text-stone-400 flex-shrink-0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://github.com/Youcefxx70x"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="hover:text-white hover:scale-110 transition-transform"
                    >
                      <FaGithub />
                    </a>
                  </TooltipTrigger>

                  <TooltipContent side="bottom">
                    <p>Github</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.linkedin.com/in/youcef-ouahab-b187461a1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="hover:text-white hover:scale-110 transition-transform"
                    >
                      <FaLinkedin />
                    </a>
                  </TooltipTrigger>

                  <TooltipContent side="bottom">
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {/* Divider */}
              <div className="h-3.5 w-px bg-stone-800 flex-shrink-0" />

              {/* 4. Close Pill Button */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsLangOpen(false);
                }}
                type="button"
                aria-label="Collapse navigation bar"
                className="p-1 text-xs text-stone-400 hover:text-white hover:scale-110 transition-all cursor-pointer rounded-full"
                title="Close navigation bar"
              >
                <BiX className="text-2xl" />
              </button>
            </motion.nav>
          ) : (
            /* COLLAPSED MINI TRIGGER PILL */
            <motion.button
              key="collapsed-navbar"
              layout
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setIsOpen(true)}
              type="button"
              aria-label="Open navigation bar"
              className="pointer-events-auto flex items-center gap-2.5 rounded-full border border-stone-800/90 bg-neutral-950/90 px-4 py-2 text-xs font-medium text-stone-300 backdrop-blur-md shadow-2xl shadow-black/90 hover:border-stone-700 hover:bg-neutral-900/90 hover:text-white transition-all cursor-pointer group"
            >
              <FaBars className="text-stone-400 group-hover:text-white transition-colors" />
              <span className="text-[11px] sm:text-xs">Menu</span>
              <ReactCountryFlag
                countryCode={lang}
                svg
                style={{
                  width: "1.1em",
                  height: "1.1em",
                  borderRadius: "9999px",
                  display: "block",
                }}
              />
            </motion.button>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </header>
  );
};

Navbar.propTypes = {
  lang: PropTypes.string.isRequired,
  setLang: PropTypes.func.isRequired,
};

export default Navbar;
