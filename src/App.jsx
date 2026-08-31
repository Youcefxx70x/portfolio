import { useHotkey } from "@tanstack/react-hotkeys";
import { useEffect, useState } from "react";
import CommandMenu from "./components/CommandMenu";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Platforms from "./components/Platforms";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Technologies from "./components/Technologies";

function App() {
  const [lang, setLang] = useState("GB");
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useHotkey("Mod+E", () => setLang("GB"), {});
  useHotkey("Mod+A", () => setLang("DZ"), {});
  useHotkey("Mod+F", () => setLang("FR"), {});

  // Global Ctrl+K / Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="relative min-h-screen text-stone-300 antialiased selection:bg-cyan-900 selection:text-white"
      dir={lang === "DZ" ? "rtl" : "ltr"}
    >
      {/* Background layer – purely decorative, sits behind all content */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* Scrollable page content */}
      <div className="mx-auto max-w-5xl px-6 pt-20 sm:pt-24 overflow-x-hidden">
        <Navbar
          lang={lang}
          setLang={setLang}
          onOpenCommand={() => setIsCommandOpen(true)}
        />
        <Hero lang={lang} />
        <Technologies lang={lang} />
        <Skills lang={lang} />
        <Platforms lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <Contact lang={lang} />
        <Footer />
      </div>

      {/* Global Cmd+K Command Palette */}
      <CommandMenu
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        lang={lang}
        setLang={setLang}
      />
    </div>
  );
}

export default App;
