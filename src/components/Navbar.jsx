import PropTypes from "prop-types";
import ReactCountryFlag from "react-country-flag";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const LANG_LABELS = { GB: "English", FR: "Français", DZ: "العربية" };

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/youcef-ouahab-b187461a1/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://github.com/Youcefxx70x", icon: FaGithub, label: "GitHub" },
  { href: "https://www.instagram.com/ucex._.xef/", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.facebook.com/YssF.H.OhB", icon: FaFacebook, label: "Facebook" },
];

const Navbar = ({ setLang }) => {
  return (
    <nav className="flex flex-wrap justify-between items-center py-6">
      {/* Language flags */}
      <div className="flex flex-shrink-0 items-center gap-3">
        {["GB", "FR", "DZ"].map((country) => (
          <button
            key={country}
            className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded"
            onClick={() => setLang(country)}
            aria-label={`Switch language to ${LANG_LABELS[country]}`}
          >
            <ReactCountryFlag
              countryCode={country}
              svg
              className="rounded-lg"
              style={{ width: "2em", height: "2em" }}
            />
          </button>
        ))}
      </div>

      {/* Social icons */}
      <div className="flex items-center gap-4 text-3xl">
        {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-transform duration-200 hover:scale-125"
          >
            <Icon />
          </a>
        ))}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setLang: PropTypes.func.isRequired,
};

export default Navbar;
