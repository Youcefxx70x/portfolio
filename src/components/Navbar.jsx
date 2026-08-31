import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { BiArrowToRight } from "react-icons/bi";
import {
  FaBars,
  FaCheck,
  FaChevronDown,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { cn } from "../utils/helper";

const LANGUAGES = [
  { code: "GB", label: "English", shortcut: "⌘+E" },
  { code: "FR", label: "Français", shortcut: "⌘+F" },
  { code: "DZ", label: "العربية", shortcut: "⌘+A" },
];

const SECTION_IDS = ["platforms", "projects", "experience", "contact"];

const Navbar = ({ lang, setLang, onOpenCommand }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
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

  // ScrollSpy: observe sections as they scroll into view
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTION_IDS[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTION_IDS[i]);
          return;
        }
      }

      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Responsive short labels for clean fit on all mobile screens
  const navLinks = [
    {
      id: "platforms",
      label:
        lang === "DZ" ? "المنصات" : lang === "FR" ? "Domaines" : "Platforms",
      href: "#platforms",
    },
    {
      id: "projects",
      label:
        lang === "DZ" ? "المشاريع" : lang === "FR" ? "Projets" : "Projects",
      href: "#projects",
    },
    {
      id: "experience",
      label: lang === "DZ" ? "المسار" : lang === "FR" ? "Cursus" : "Experience",
      href: "#experience",
    },
    {
      id: "contact",
      label: lang === "DZ" ? "تواصل" : lang === "FR" ? "Contact" : "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none">
      <AnimatePresence mode="wait">
        {isOpen ? (
          /* EXPANDED FULL PILL (Open by default) */
          <motion.nav
            key="expanded-navbar"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pointer-events-auto flex items-center justify-between gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 rounded-full border border-stone-800/90 bg-neutral-950/90 px-2.5 sm:px-4 py-1.5 sm:py-2 backdrop-blur-md shadow-2xl shadow-black/90 max-w-[calc(100vw-1rem)] sm:max-w-max"
          >
            {/* 1. Openable / Closable Language Switcher */}
            <div className="relative flex-shrink-0" ref={langMenuRef}>
              <button
                onClick={() => setIsLangOpen((prev) => !prev)}
                type="button"
                aria-label="Toggle language menu"
                aria-expanded={isLangOpen}
                className="cursor-pointer flex items-center gap-1 sm:gap-1.5 rounded-full px-1.5 sm:px-2 py-1 bg-stone-900/60 border border-stone-800/80 hover:border-stone-700 hover:bg-stone-900 text-stone-300 text-xs transition-all focus:outline-none"
              >
                <ReactCountryFlag
                  countryCode={lang}
                  svg
                  style={{
                    width: "1.15em",
                    height: "1.15em",
                    borderRadius: "9999px",
                    display: "block",
                  }}
                />
                <FaChevronDown
                  className={cn(
                    "text-[7px] sm:text-[8px] text-stone-400 transition-transform duration-200",
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
                    className={cn(
                      "absolute top-full mt-2 min-w-[130px] rounded-xl border border-stone-800/90 bg-neutral-950/95 backdrop-blur-md p-1.5 shadow-2xl shadow-black/90 z-50 flex flex-col gap-1",
                      lang === "DZ" ? "right-0" : "left-0",
                    )}
                  >
                    {LANGUAGES.map(({ code, label, shortcut }) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLang(code);
                          setIsLangOpen(false);
                        }}
                        type="button"
                        className={cn(
                          "w-full flex items-center justify-between gap-2.5 px-2.5 py-1.5 text-xs rounded-lg transition-colors cursor-pointer text-left",
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
                          <span>{label}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span
                            dir="ltr"
                            className="hidden md:inline-block font-mono text-[10px] px-1.5 py-0.5 bg-stone-900 border border-stone-800 text-stone-400 rounded"
                          >
                            {shortcut}
                          </span>
                          {lang === code && (
                            <FaCheck className="text-[10px] text-emerald-400 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Divider */}
            <div className="h-3.5 w-px bg-stone-800 flex-shrink-0" />

            {/* 2. Navigation Links with ScrollSpy Indicator */}
            <div className="flex items-center gap-0.5 sm:gap-1.5 md:gap-2 text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-medium whitespace-nowrap">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setActiveSection(link.id)}
                    className={cn(
                      "relative px-1.5 xs:px-2 sm:px-3 py-1 rounded-full transition-colors duration-200",
                      isActive
                        ? "text-white font-semibold"
                        : "text-stone-400 hover:text-stone-200",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full bg-stone-800/80 -z-10 border border-stone-700/60"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* 3. Social Icons (Desktop only to prevent mobile overflow) */}
            <div className="hidden md:flex items-center gap-2 text-sm sm:text-base text-stone-400 flex-shrink-0">
              <div className="h-3.5 w-px bg-stone-800 mr-1" />
              <a
                href="https://github.com/Youcefxx70x"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-white hover:scale-110 transition-transform"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/youcef-ouahab-b187461a1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white hover:scale-110 transition-transform"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* 4. Cmd+K Trigger Badge (Desktop only) */}
            <div className="hidden md:flex items-center flex-shrink-0">
              <div className="h-3.5 w-px bg-stone-800 mr-2 ml-1" />
              <button
                onClick={onOpenCommand}
                type="button"
                aria-label="Open Command Menu (Ctrl+K)"
                className="flex items-center gap-1 px-2 py-0.5 rounded-md border border-stone-800 bg-stone-900/80 text-[10px] text-stone-400 hover:text-stone-200 hover:border-stone-700 transition-all cursor-pointer font-mono"
                title="Open Command Palette (Ctrl+K)"
              >
                <span className="text-xs" dir="ltr">
                  <span className="text-xs text-cyan-400">⌘</span>K
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="h-3.5 w-px bg-stone-800 flex-shrink-0" />

            {/* 5. Close Pill Button (Always visible and within screen) */}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsLangOpen(false);
              }}
              type="button"
              aria-label="Collapse navigation bar"
              className="p-1 text-xs text-stone-400 hover:text-white hover:scale-110 transition-all cursor-pointer rounded-full flex-shrink-0"
              title="Close navigation bar"
            >
              <BiArrowToRight
                className={cn(
                  "w-4 h-4 sm:w-5 sm:h-5",
                  lang === "DZ" && "rotate-180",
                )}
              />
            </button>
          </motion.nav>
        ) : (
          /* COLLAPSED MINI TRIGGER PILL */
          <motion.button
            key="collapsed-navbar"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setIsOpen(true)}
            type="button"
            aria-label="Open navigation bar"
            className="pointer-events-auto flex items-center gap-2 rounded-full border border-stone-800/90 bg-neutral-950/90 px-3.5 py-1.5 text-xs font-medium text-stone-300 backdrop-blur-md shadow-2xl shadow-black/90 hover:border-stone-700 hover:bg-neutral-900/90 hover:text-white transition-all cursor-pointer group"
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
    </header>
  );
};

Navbar.propTypes = {
  lang: PropTypes.string.isRequired,
  setLang: PropTypes.func.isRequired,
  onOpenCommand: PropTypes.func,
};

export default Navbar;
