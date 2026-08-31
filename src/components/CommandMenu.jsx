import { useHotkey } from "@tanstack/react-hotkeys";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import {
  FaCheck,
  FaCopy,
  FaDownload,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { getContent } from "../data/portfolioData";

const CommandMenu = ({ isOpen, onClose, lang, setLang }) => {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const itemRefs = useRef([]);
  const content = getContent(lang);

  const copyMail = () => {
    navigator.clipboard.writeText(content.CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "CV.pdf";
    link.click();
    onClose();
  };

  useHotkey("Mod+c", () => copyMail(), {});
  useHotkey("Mod+d", () => downloadCv(), {});

  const ACTIONS = [
    // Navigation
    {
      id: "nav-platforms",
      group: "Navigation",
      title: content.platformsHeading?.split("&")[0]?.trim() || "Platforms",
      icon: FaGlobe,
      action: () => {
        window.location.hash = "#platforms";
        onClose();
      },
    },
    {
      id: "nav-projects",
      group: "Navigation",
      title: content.projectsHeading || "Projects",
      icon: FaGlobe,
      action: () => {
        window.location.hash = "#projects";
        onClose();
      },
    },
    {
      id: "nav-experience",
      group: "Navigation",
      title: content.cursusHeading || "Experience",
      icon: FaGlobe,
      action: () => {
        window.location.hash = "#experience";
        onClose();
      },
    },
    {
      id: "nav-contact",
      group: "Navigation",
      title: content.getInTouch || "Contact",
      icon: FaGlobe,
      action: () => {
        window.location.hash = "#contact";
        onClose();
      },
    },

    // Quick Actions
    {
      id: "copy-email",
      group: "Actions",
      title: copied
        ? "Copied email to clipboard!"
        : `Copy Email (${content.CONTACT.email})`,
      icon: copied ? FaCheck : FaCopy,
      action: copyMail,
      command: "⌘+C",
    },
    {
      id: "download-resume",
      group: "Actions",
      title: content.downloadResume || "Download Resume (PDF)",
      icon: FaDownload,
      command: "⌘+D",
      action: downloadCv,
    },

    // Language Switching
    {
      id: "lang-gb",
      group: "Language",
      title: "Switch to English (GB)",
      icon: FaGlobe,
      command: "⌘+E",
      action: () => {
        setLang("GB");
        onClose();
      },
    },
    {
      id: "lang-fr",
      group: "Language",
      title: "Passer en Français (FR)",
      icon: FaGlobe,
      command: "⌘+F",
      action: () => {
        setLang("FR");
        onClose();
      },
    },
    {
      id: "lang-dz",
      group: "Language",
      title: "التحويل إلى العربية (DZ)",
      icon: FaGlobe,
      command: "⌘+A",
      action: () => {
        setLang("DZ");
        onClose();
      },
    },

    // External links
    {
      id: "ext-afiyid",
      group: "Links",
      title: "Visit Afiyid (afiyid.com)",
      icon: FaExternalLinkAlt,
      action: () => {
        window.open("https://afiyid.com", "_blank");
        onClose();
      },
    },
    {
      id: "ext-github",
      group: "Links",
      title: "GitHub Profile (@Youcefxx70x)",
      icon: FaGithub,
      action: () => {
        window.open("https://github.com/Youcefxx70x", "_blank");
        onClose();
      },
    },
    {
      id: "ext-linkedin",
      group: "Links",
      title: "LinkedIn Profile",
      icon: FaLinkedin,
      action: () => {
        window.open(
          "https://www.linkedin.com/in/youcef-ouahab-b187461a1/",
          "_blank",
        );
        onClose();
      },
    },
  ];

  const filteredActions = ACTIONS.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.group.toLowerCase().includes(search.toLowerCase()),
  );

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(
          (prev) =>
            (prev - 1 + (filteredActions.length || 1)) %
            (filteredActions.length || 1),
        );
      } else if (e.key === "Enter" && filteredActions[selectedIndex]) {
        e.preventDefault();
        filteredActions[selectedIndex].action();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  // Auto-scroll the selected item into view when navigating with Arrow keys
  useEffect(() => {
    if (itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex].scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-lg rounded-2xl border border-stone-800 bg-neutral-950/95 p-3 shadow-2xl shadow-black/90 backdrop-blur-md overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-3 py-2.5 border-b border-stone-900">
              <FaSearch className="text-stone-500 text-sm flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder={
                  lang === "DZ"
                    ? "ابحث أو اكتب أمرًا..."
                    : lang === "FR"
                      ? "Rechercher ou taper une commande..."
                      : "Type a command or search..."
                }
                className="w-full bg-transparent text-sm text-stone-200 placeholder-stone-500 focus:outline-none"
              />
              <button
                onClick={onClose}
                type="button"
                className="p-1 rounded-md text-stone-500 hover:text-stone-300 hover:bg-stone-900 transition-colors"
              >
                <FaTimes className="text-xs" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-72 overflow-y-auto py-2 space-y-1 hide-scrollbar">
              {filteredActions.length === 0 ? (
                <div className="py-8 text-center text-xs text-stone-500">
                  No matching commands found.
                </div>
              ) : (
                filteredActions.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  const Icon = item.icon;
                  const command = item?.command;

                  return (
                    <button
                      key={item.id}
                      ref={(el) => (itemRefs.current[idx] = el)}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      type="button"
                      className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer text-left ${
                        isSelected
                          ? "bg-stone-900 text-white font-medium"
                          : "text-stone-400 hover:bg-stone-900/50 hover:text-stone-200"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon
                          className={`text-sm ${isSelected ? "text-cyan-400" : "text-stone-500"}`}
                        />
                        <span className="truncate">{item.title}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {command && (
                          <span
                            className="hidden md:inline-block font-mono text-[10px] text-stone-400 px-1.5 py-0.5 rounded bg-stone-900 border border-stone-800"
                            dir="ltr"
                          >
                            {command.toUpperCase()}
                          </span>
                        )}
                        <span className="text-[10px] text-stone-600 uppercase tracking-wider font-mono">
                          {item.group}
                        </span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Modal Footer Key Hints (Desktop/Tablet only) */}
            <div className="hidden sm:flex items-center justify-between px-3 py-2 border-t border-stone-900/80 text-[11px] text-stone-500 font-mono">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-stone-900 border border-stone-800">
                  ↑↓
                </span>
                <span>Navigate</span>
                <span className="px-1.5 py-0.5 rounded bg-stone-900 border border-stone-800 ml-1">
                  ↵
                </span>
                <span>Select</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="px-1.5 py-0.5 rounded bg-stone-900 border border-stone-800">
                  ESC
                </span>
                <span>Close</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

CommandMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  setLang: PropTypes.func.isRequired,
};

export default CommandMenu;
