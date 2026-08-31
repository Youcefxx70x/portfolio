import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const LocalTime = ({ lang }) => {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat(
          lang === "DZ" ? "ar-DZ" : lang === "FR" ? "fr-FR" : "en-US",
          {
            timeZone: "Africa/Algiers",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: lang !== "FR",
          },
        ).format(now);
        setTimeStr(formatted);
      } catch {
        setTimeStr(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-stone-800/80 bg-stone-900/40 px-3 py-1 text-xs text-stone-400 backdrop-blur-sm shadow-sm">
      <span className="font-medium text-stone-300">Setif (GMT+1)</span>
      <span className="text-stone-600">•</span>
      <span className="font-mono text-stone-300 tabular-nums">{timeStr}</span>
    </div>
  );
};

LocalTime.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default LocalTime;
