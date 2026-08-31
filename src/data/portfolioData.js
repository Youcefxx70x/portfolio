import project1 from "../assets/projects/project-1.webp";

import afiyid from "../assets/my_assets/afiyid.webp";
import bookmarks from "../assets/my_assets/bookmarks.webp";
import ct from "../assets/my_assets/CTS.webp";
import game from "../assets/my_assets/game.webp";
import extension from "../assets/my_assets/LT.webp";
import matchy from "../assets/my_assets/matchy.webp";
import mines from "../assets/my_assets/mines.webp";
import R_FB from "../assets/my_assets/R_FB.webp";

const freelanceStack = [
  "JS",
  "TS",
  "Python",
  "React.js",
  "Next js",
  "Tanstack Start",
  "Express js",
  "Expo React Native",
  "Django Rest",
];

const PORTFOLIO_DATA = {
  GB: {
    name: "Youcef Habib Ouahab",
    title: "Full-Stack Developer",
    technologiesHeading: "Technologies",
    platformsHeading: "Platforms & Expertise",
    languagesHeading: "Languages",
    projectsHeading: "Projects",
    cursusHeading: "Cursus",
    getInTouch: "Get In Touch",
    downloadResume: "Download my Resume",

    PLATFORMS: [
      {
        id: "web",
        title: "Web Development",
        description:
          "High-performance, responsive, and SEO-optimized web applications crafted with modern component architectures.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        id: "mobile",
        title: "Mobile Apps",
        description:
          "Cross-platform mobile applications delivering native performance and smooth user experiences on iOS & Android.",
        technologies: ["React Native", "Expo", "NativeWind", "TypeScript"],
      },
      {
        id: "backend",
        title: "Backend & APIs",
        description:
          "Robust server architectures, secure RESTful APIs, database design, authentication systems, and caching.",
        technologies: [
          "Express.js",
          "Django",
          "Node.js",
          "MongoDB",
          "PostgreSQL",
          "Redis",
        ],
      },
      {
        id: "desktop",
        title: "Desktop & Tools",
        description:
          "Custom desktop utilities, browser extensions, task automation scripts, and image/data processing pipelines.",
        technologies: [
          "Electron",
          "Browser Extensions",
          "Data Processing",
          "Automation",
        ],
      },
    ],

    HERO_CONTENT: `Data Science Graduate and a full stack developer with a knack for crafting robust and scalable web and mobile applications.\n With 3 years of hands-on experience.`,

    EXPERIENCES: [
      {
        year: "Nov 2025 - Present",
        role: "Frontend Developer",
        company: "Isybuild",
        description:
          "Full-time frontend developer building modern web applications using Next.js and TypeScript.",
        technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      },
      {
        year: "2025 - Present",
        role: "Freelancer",
        company: "",
        description: "",
        technologies: freelanceStack,
      },
      {
        year: "2023 - 2024",
        role: "Internship in a startup",
        company: "",
        description: "",
        technologies: ["Python", "React.js", "Next.js", "Django"],
      },
      {
        year: "2023 - 2025",
        role: "Master in Data Science and Images Processing",
        company: "Farhat Abbas University – Faculty of Sciences, Setif",
        description: "",
        technologies: ["Python"],
      },
      {
        year: "2023",
        role: "Licence Graduate",
        company: "",
        description: "",
        technologies: ["HTML", "Bootstrap", "PHP", "Laravel"],
      },
      {
        year: "2020 - 2023",
        role: "Computer Science Student",
        company: "Farhat Abbas University – Faculty of Sciences, Setif",
        description: "",
        technologies: ["HTML", "CSS", "JS", "PHP"],
      },
    ],

    PROJECTS: [
      {
        title: "Afiyid",
        link: "https://afiyid.com",
        image: afiyid,
        description:
          "A modern full-stack web platform with an interactive dashboard, robust authentication, and scalable architecture.",
        technologies: [
          "Next.js 16",
          "React",
          "TypeScript",
          "Express.js",
          "MongoDB",
          "Tailwind CSS",
        ],
      },
      {
        title: "Matchy",
        image: matchy,
        description:
          "A master's graduation project and startup – a mobile app dedicated to gamifying learning; it's Duolingo but for the Algerian curriculum.",
        technologies: [
          "TypeScript",
          "Expo",
          "React Native",
          "NativeWind",
          "Drizzle",
          "Supabase",
        ],
      },
      {
        title: "Blood Transmission Platform & Management System",
        image: ct,
        description:
          "A licence graduation project – a fully functional platform with CRUD features and user authentication.",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Laravel"],
      },
      {
        title: "Social Media Platform",
        image: bookmarks,
        description:
          "An application inspired by Antonio Mele's work. Its purpose is to bookmark images online and share them directly in a profile block (emulating Pinterest), with a tracking system for user actions.",
        technologies: ["HTML", "CSS", "JavaScript", "Django", "Redis"],
      },
      {
        title: "Links Tracker",
        image: extension,
        description:
          "A browser extension to save users' favourite links in the browser's local storage at the click of a button.",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Mini React-Firebase Social Media",
        image: R_FB,
        description:
          "My first React app – it handles CRUD and authentication with Firebase.",
        technologies: ["HTML", "CSS", "TypeScript", "React", "Firebase"],
      },
      {
        title: "Memory Game (Mobile & Web)",
        image: game,
        description:
          "A hobby project in React and React Native – a fully functional memory game that fetches emojis from an API based on user selection, then decodes, randomises, and duplicates them in a grid.",
        technologies: ["HTML", "CSS", "React", "React Native"],
      },
      {
        title: "Minesweeper Game",
        image: mines,
        description:
          "Another hobby project in vanilla JavaScript that emulates the classic Minesweeper game.",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "AlghistoryPedia",
        image: project1,
        description: "A mini encyclopedia dedicated to Algerian history.",
        technologies: ["HTML", "CSS", "JavaScript", "Django"],
      },
    ],

    CONTACT: {
      address: "Setif, Algeria",
      phoneNo: "+213-560-879-734",
      email: "youcef.h.ouahab@gmail.com",
    },
  },

  FR: {
    name: "Youcef Habib Ouahab",
    title: "Développeur Full-Stack",
    technologiesHeading: "Technologies",
    platformsHeading: "Plateformes & Domaines",
    languagesHeading: "Langues",
    projectsHeading: "Projets",
    cursusHeading: "Cursus",
    getInTouch: "Contactez-moi",
    downloadResume: "Télécharger mon CV",

    PLATFORMS: [
      {
        id: "web",
        title: "Applications Web",
        description:
          "Applications web performantes, réactives et optimisées pour le SEO avec des architectures modernes.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        id: "mobile",
        title: "Applications Mobiles",
        description:
          "Applications mobiles multiplateformes offrant des performances natives et une expérience fluide sur iOS et Android.",
        technologies: ["React Native", "Expo", "NativeWind", "TypeScript"],
      },
      {
        id: "backend",
        title: "Backend & APIs",
        description:
          "Architectures serveur évolutives, APIs REST sécurisées, modélisation de bases de données et systèmes de cache.",
        technologies: [
          "Express.js",
          "Django",
          "Node.js",
          "MongoDB",
          "PostgreSQL",
          "Redis",
        ],
      },
      {
        id: "desktop",
        title: "Desktop & Outils",
        description:
          "Outils de bureau personnalisés, extensions de navigateur, scripts d'automatisation et traitement d'images/données.",
        technologies: [
          "Python",
          "Extensions Web",
          "Traitement de données",
          "Automatisation",
        ],
      },
    ],

    HERO_CONTENT: `Titulaire d'un diplôme en Data Science et développeur full stack, je maîtrise l'art de créer des applications web et mobiles robustes et évolutives.\nFort de 3 ans d'expérience pratique.`,

    EXPERIENCES: [
      {
        year: "Nov 2025 - Présent",
        role: "Développeur Front-End",
        company: "Isybuild",
        description:
          "Développeur front-end à temps plein concevant des applications web modernes avec Next.js et TypeScript.",
        technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      },
      {
        year: "2025  - Présent",
        role: "Freelance",
        company: "",
        description: "",
        technologies: freelanceStack,
      },
      {
        year: "2023 - 2024",
        role: "Stage dans une startup",
        company: "",
        description: "",
        technologies: ["Python", "React.js", "Next.js", "Django"],
      },
      {
        year: "2023 - 2025",
        role: "Master en Data Science et Traitement d'Images",
        company: "Université Farhat Abbas – Faculté des Sciences, Sétif",
        description: "",
        technologies: ["Python"],
      },
      {
        year: "2023",
        role: "Diplômé de Licence",
        company: "",
        description: "",
        technologies: ["HTML", "Bootstrap", "PHP", "Laravel"],
      },
      {
        year: "2020 - 2023",
        role: "Étudiant en Informatique",
        company: "Université Farhat Abbas – Faculté des Sciences, Sétif",
        description: "",
        technologies: ["HTML", "CSS", "JS", "PHP"],
      },
    ],

    PROJECTS: [
      {
        title: "Afiyid",
        link: "https://afiyid.com",
        image: afiyid,
        description:
          "Plateforme web full-stack moderne dotée d'un tableau de bord interactif, d'une authentification sécurisée et d'une architecture évolutive.",
        technologies: [
          "Next.js 16",
          "React",
          "TypeScript",
          "Express.js",
          "MongoDB",
          "Tailwind CSS",
        ],
      },
      {
        title: "Matchy",
        image: matchy,
        description:
          "Un projet de fin d'études de master et une startup – une application mobile qui rend l'apprentissage ludique, comme Duolingo mais pour le programme scolaire algérien.",
        technologies: [
          "TypeScript",
          "Expo",
          "React Native",
          "NativeWind",
          "Drizzle",
          "Supabase",
        ],
      },
      {
        title: "Plateforme de transmission sanguine et système de gestion",
        image: ct,
        description:
          "Projet de fin de licence – une plateforme entièrement fonctionnelle avec des fonctionnalités CRUD et une authentification utilisateur.",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Laravel"],
      },
      {
        title: "Plateforme de médias sociaux",
        image: bookmarks,
        description:
          "Une application inspirée par le travail d'Antonio Mele. Son objectif est de sauvegarder des images en ligne et de les partager dans le profil (imitant Pinterest), avec un système de suivi des actions utilisateurs.",
        technologies: ["HTML", "CSS", "JavaScript", "Django", "Redis"],
      },
      {
        title: "Suivi des liens",
        image: extension,
        description:
          "Une extension de navigateur permettant de sauvegarder les liens favoris des utilisateurs dans le stockage local du navigateur en un clic.",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Mini Réseau Social React-Firebase",
        image: R_FB,
        description:
          "Ma première application React – elle gère les opérations CRUD et l'authentification avec Firebase.",
        technologies: ["HTML", "CSS", "TypeScript", "React", "Firebase"],
      },
      {
        title: "Jeu de mémoire mobile et web",
        image: game,
        description:
          "Projet hobby en React et React Native – un jeu de mémoire entièrement fonctionnel qui récupère des emojis depuis une API selon la sélection de l'utilisateur, les décode, les randomise et les duplique en grille.",
        technologies: ["HTML", "CSS", "React", "React Native"],
      },
      {
        title: "Jeu Démineur",
        image: mines,
        description:
          "Un autre projet de passionné en JavaScript pur qui émule le classique jeu Démineur.",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "AlghistoryPedia",
        image: project1,
        description: "Une mini encyclopédie dédiée à l'histoire algérienne.",
        technologies: ["HTML", "CSS", "JavaScript", "Django"],
      },
    ],

    CONTACT: {
      address: "Sétif, Algérie",
      phoneNo: "+213-560-879-734",
      email: "youcef.h.ouahab@gmail.com",
    },
  },

  DZ: {
    name: "يوسف حبيب وهاب",
    title: "مطور شامل",
    technologiesHeading: "التقنيات",
    platformsHeading: "المنصات ومجالات العمل",
    languagesHeading: "لغات البرمجة",
    projectsHeading: "المشاريع",
    cursusHeading: "المسار الدراسي",
    getInTouch: "تواصل معي",
    downloadResume: "تحميل السيرة الذاتية",

    PLATFORMS: [
      {
        id: "web",
        title: "تطبيقات الويب",
        description:
          "تطبيقات ويب متجاوبة، عالية الأداء ومتوافقة مع محركات البحث مبنية بأحدث تقنيات الويب الحديثة.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        id: "mobile",
        title: "تطبيقات الموبايل",
        description:
          "تطبيقات هواتف ذكية متعددة المنصات بأداء أصلي وسلاسة عالية لنظامي iOS و Android.",
        technologies: ["React Native", "Expo", "NativeWind", "TypeScript"],
      },
      {
        id: "backend",
        title: "الواجهات الخلفية و APIs",
        description:
          "بنية سيرفرات قوية وقابلة للتوسع، واجهات برمجية آمنة، تصميم قواعد البيانات وأنظمة التخزين المؤقت.",
        technologies: [
          "Express.js",
          "Django",
          "Node.js",
          "MongoDB",
          "PostgreSQL",
          "Redis",
        ],
      },
      {
        id: "desktop",
        title: "تطبيقات سطح المكتب والأدوات",
        description:
          "برمجيات سطح المكتب، إضافات المتصفح، سكريبتات الأتمتة ومعالجة الصور والبيانات.",
        technologies: [
          "Python",
          "إضافات المتصفح",
          "معالجة البيانات",
          "الأتمتة",
        ],
      },
    ],

    HERO_CONTENT: `خريج علوم البيانات ومطور ويب شامل يمتلك مهارة في تصميم تطبيقات الويب والموبايل المتينة والقابلة للتوسع.\nمع 3 سنوات من الخبرة العملية.`,

    EXPERIENCES: [
      {
        year: "نوفمبر 2025 - حتى الآن",
        role: "مطور واجهات أمامية",
        company: "Isybuild",
        description:
          "مطور واجهات أمامية بدوام كامل لتطوير تطبيقات ويب حديثة باستخدام Next.js و TypeScript.",
        technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      },
      {
        year: "2025 - حتى الآن",
        role: "مستقل",
        company: "",
        description: "",
        technologies: freelanceStack,
      },
      {
        year: "2023 - 2024",
        role: "تدريب في شركة ناشئة",
        company: "",
        description: "",
        technologies: ["Python", "React.js", "Next.js", "Django"],
      },
      {
        year: "2023 - 2025",
        role: "ماجستير في علوم البيانات ومعالجة الصور",
        company: "جامعة فرحات عباس – كلية العلوم، سطيف",
        description: "",
        technologies: ["Python"],
      },
      {
        year: "2023",
        role: "خريج ليسانس",
        company: "",
        description: "",
        technologies: ["HTML", "Bootstrap", "PHP", "Laravel"],
      },
      {
        year: "2020 - 2023",
        role: "طالب في علوم الحاسوب",
        company: "جامعة فرحات عباس – كلية العلوم، سطيف",
        description: "",
        technologies: ["HTML", "CSS", "JS", "PHP"],
      },
    ],

    PROJECTS: [
      {
        title: "Afiyid",
        link: "https://afiyid.com",
        image: afiyid,
        description:
          "منصة ويب شاملة (Full-Stack) حديثة تتضمن لوحة تحكم تفاعلية، نظام مصادقة آمن، وبنية برمجية قابلة للتوسع.",
        technologies: [
          "Next.js 16",
          "React",
          "TypeScript",
          "Express.js",
          "MongoDB",
          "Tailwind CSS",
        ],
      },
      {
        title: "ماتشي",
        image: matchy,
        description:
          "مشروع تخرج ماجستير وستارت آب – تطبيق موبايل يهدف إلى تحويل التعلم إلى لعبة، مثل دوولينجو لكن للمنهج الجزائري.",
        technologies: [
          "TypeScript",
          "Expo",
          "React Native",
          "NativeWind",
          "Drizzle",
          "Supabase",
        ],
      },
      {
        title: "منصة نقل الدم ونظام الإدارة",
        image: ct,
        description:
          "مشروع تخرج ليسانس – منصة متكاملة تعمل بكامل وظائف CRUD وتحقق المستخدم.",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Laravel"],
      },
      {
        title: "منصة وسائل التواصل الاجتماعي",
        image: bookmarks,
        description:
          "تطبيق مستوحى من عمل أنطونيو ميلي – هدفه حفظ الصور عبر الإنترنت ومشاركتها في قسم الملف الشخصي (محاكياً Pinterest)، مع نظام تتبع لإجراءات المستخدمين.",
        technologies: ["HTML", "CSS", "JavaScript", "Django", "Redis"],
      },
      {
        title: "متعقب الروابط",
        image: extension,
        description:
          "إضافة للمتصفح لحفظ الروابط المفضلة للمستخدمين في ذاكرة التخزين المحلية للمتصفح بنقرة زر.",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "شبكة اجتماعية مصغرة بـ React وFirebase",
        image: R_FB,
        description:
          "أول تطبيق React لي – يقوم بعمليات CRUD والمصادقة باستخدام Firebase.",
        technologies: ["HTML", "CSS", "TypeScript", "React", "Firebase"],
      },
      {
        title: "لعبة الذاكرة للموبايل والويب",
        image: game,
        description:
          "مشروع هواية باستخدام React وReact Native – لعبة ذاكرة متكاملة تحصل على الرموز التعبيرية من API بناءً على اختيار المستخدم، تقوم بفك التشفير والترتيب العشوائي وتكرارها في شبكة.",
        technologies: ["HTML", "CSS", "React", "React Native"],
      },
      {
        title: "لعبة الباحث عن الألغام",
        image: mines,
        description:
          "مشروع هواية آخر بلغة جافاسكريبت العادية يحاكي لعبة الباحث عن الألغام الكلاسيكية.",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "AlghistoryPedia",
        image: project1,
        description: "موسوعة مصغرة مخصصة لتاريخ الجزائر.",
        technologies: ["HTML", "CSS", "JavaScript", "Django"],
      },
    ],

    CONTACT: {
      address: "سطيف، الجزائر",
      phoneNo: "+213-560-879-734",
      email: "youcef.h.ouahab@gmail.com",
    },
  },
};

/**
 * Returns the full content object for the given language code.
 * Falls back to English if the language is not found.
 * @param {string} lang - "GB" | "FR" | "DZ"
 */
export const getContent = (lang) => PORTFOLIO_DATA[lang] ?? PORTFOLIO_DATA.GB;

export default PORTFOLIO_DATA;
