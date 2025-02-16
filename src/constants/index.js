import project1 from "../assets/projects/project-1.webp";
//import project2 from "../assets/projects/project-2.webp";
//import project3 from "../assets/projects/project-3.webp";
//import project4 from "../assets/projects/project-4.webp";

import bookmarks from "../assets/my_assets/bookmarks.png"
import ct from "../assets/my_assets/CTS.png"
import extension from "../assets/my_assets/LT.png"
import R_FB from "../assets/my_assets/R_FB.png"
import mines from "../assets/my_assets/mines.png"
import game from "../assets/my_assets/game.png"

export const HERO_CONTENT = `Data Science Graduate and a full stack developer with a knack for crafting robust and scalable web and mobile applications.\n With 3 years of hands-on experience, skillfull in front-end technologies like React js ,React Native ,Bootstrap and Tailwind css, as well as back-end technologies with Django and PostgreSQL.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025",
    role: "Freelancer",
    company: "",
    description: ``,
    technologies: ["Python","JS","TS", "React.js", "Django","Expo React Native","Django Rest"],
  },
  {
    year: "2023 - 2024",
    role: "internship in a startup",
    company: "",
    description: ``,
    technologies: ["Python", "React.js", "Next.js", "Django"],
  },
  {
    year: "2023 - 2025",
    role: "Master in Data Science and Images Processing",
    company: "farhat abbas university-faculty of sciences-setif",
    description: ``,
    technologies: ["Python"],
  },
  {
    year: "2023",
    role: "Licence Graduate",
    company: "",
    description: ``,
    technologies: ["HTML", "bootstrap", "PHP", "Laravel"],
  },
  {
    year: "2020 - 2023",
    role: "Computer Science Student",
    company: "farhat abbas university-faculty of sciences-SETIF",
    description: ``,
    technologies: ["HTML", "CSS", "JS", "PHP"],
  },
];

export const PROJECTS = [
  {
    title: "Blood transmission platform and management system",
    image: ct,
    description:
      "A licence graduation project..a fully functional Platform with CRUD features and user authentication.",
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "Laravel"],
  },
  {
    title: "Social Media Platform",
    image: bookmarks,
    description:
      "An application inspired by antonio Mele's work ..it's purpose is to bookmark images online and directly share them in the profile block (emulating Pinterest)... it's a social media so there's also a tracking system for user actions",
    technologies: ["HTML", "CSS", "Javascript", "Django","Redis"],
  },
  {
    title: "Links Tracker",
    image: extension,
    description:
      "A browser extension to save users favourite links in the browsers local storage in the click of a button.",
    technologies: ["HTML", "CSS", "javascript"],
  },
  {
    title: "Mini React-firebase social Media",
    image: R_FB,
    description:
      "like the name suggests it's my first React app...that does crud and authentification with Firebase",
    technologies: ["HTML", "CSS", "Typescript", "React", "Firebase"],
  },
  {
    title: "Memory Game mobile/and web",
    image: game,
    description:
      "a hobby project in react and react native fully functional memory game that get's emojis from an API taken from user selection..decode,randomize and duplicate them in grids  ",
    technologies: ["HTML", "CSS", "React", "React Native"],
  },
  {
    title: "Mines Sweeper Game",
    image: mines,
    description:
      "another hobbyist project in vanilla javascript that emulates the good ol' Minesweeper Gamer  ",
    technologies: ["HTML", "CSS", "javascript"],
  },
  {
    title: "AlghistoryPedia",
    image: project1,
    description:
      "a mini encyclopedia dedicated for algerian history ",
    technologies: ["HTML", "CSS", "javascript","Django"],
  },

];

export const CONTACT = {
  address: "Setif",
  phoneNo: "+213-560879734",
  email: "youcef.h.ouahab@gmail.com",
};

/////////////////////////////////////////////////////////////////////////////////////////////////////


export const var_fr = {
  name: "Youcef Habib Ouahab",
  title: "Développeur Full-Stack",
  technologies: "Technologies",
  languages: "Langues",
  projects: "Projets",
  cursus: "Cursus",
  getInTouch: "Contactez-moi",

  HERO_CONTENT: `Titulaire d'un diplôme en Data Science et développeur full stack, je maîtrise l'art de créer des applications web et mobiles robustes et évolutives.
Fort de 3 ans d'expérience pratique, j'ai perfectionné mes compétences en technologies front-end telles que React js, React Native, Bootstrap CSS et Tailwind CSS, ainsi qu'en technologies back-end avec Django et PostgreSQL.`,
  
  ABOUT_TEXT: `Je suis un développeur full stack dévoué et polyvalent, passionné par la création d'applications web efficaces et conviviales. Avec 5 ans d'expérience professionnelle, j'ai travaillé avec une variété de technologies, notamment React, Next.js, Node.js, MySQL, PostgreSQL et MongoDB. Mon parcours dans le développement web a débuté par une profonde curiosité sur le fonctionnement des choses, et s'est transformé en une carrière où je m'efforce continuellement d'apprendre et de m'adapter aux nouveaux défis. J'excelle dans les environnements collaboratifs et j'aime résoudre des problèmes complexes pour fournir des solutions de haute qualité. En dehors du codage, j'aime rester actif, explorer de nouvelles technologies et contribuer à des projets open-source.`,

  EXPERIENCES: [
    {
      year: "2025",
      role: "Freelance",
      company: "",
      description: "",
      technologies: ["Python", "JS", "TS", "React.js", "Django", "Expo React Native", "Django Rest"],
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
      company: "Université Farhat Abbas - Faculté des Sciences, Sétif",
      description: "",
      technologies: ["Python"],
    },
    {
      year: "2023",
      role: "Diplômé de Licence",
      company: "",
      description: "",
      technologies: ["HTML", "bootstrap", "PHP", "Laravel"],
    },
    {
      year: "2020 - 2023",
      role: "Étudiant en Informatique",
      company: "Université Farhat Abbas - Faculté des Sciences, Sétif",
      description: "",
      technologies: ["HTML", "CSS", "JS", "PHP"],
    },
  ],

  PROJECTS: [
    {
      title: "Plateforme de transmission sanguine et système de gestion",
      image: ct,
      description: "Projet de fin de licence... une plateforme entièrement fonctionnelle avec des fonctionnalités CRUD et une authentification utilisateur.",
      technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "Laravel"],
    },
    {
      title: "Plateforme de médias sociaux",
      image: bookmarks,
      description: "Une application inspirée par le travail d'Antonio Mele... Son objectif est de sauvegarder des images en ligne et de les partager directement dans le bloc de profil (imitant Pinterest)... c'est un réseau social, donc il intègre également un système de suivi des actions des utilisateurs.",
      technologies: ["HTML", "CSS", "Javascript", "Django", "Redis"],
    },
    {
      title: "Suivi des liens",
      image: extension,
      description: "Une extension de navigateur permettant de sauvegarder les liens favoris des utilisateurs dans le stockage local du navigateur en un clic.",
      technologies: ["HTML", "CSS", "javascript"],
    },
    {
      title: "Mini Réseau Social React-Firebase",
      image: R_FB,
      description: "Comme son nom l'indique, c'est ma première application React... qui gère les opérations CRUD et l'authentification avec Firebase.",
      technologies: ["HTML", "CSS", "Typescript", "React", "Firebase"],
    },
    {
      title: "Jeu de mémoire mobile et web",
      image: game,
      description: "Projet hobby en React et React Native, un jeu de mémoire entièrement fonctionnel qui récupère des emojis depuis une API selon la sélection de l'utilisateur... décode, randomise et les duplique en grilles.",
      technologies: ["HTML", "CSS", "React", "React Native"],
    },
    {
      title: "Jeu Démineur",
      image: mines,
      description: "Un autre projet de passionné en JavaScript pur qui émule le classique jeu Démineur.",
      technologies: ["HTML", "CSS", "javascript"],
    },
    {
      title: "AlghistoryPedia",
      image: project1,
      description: "Une mini encyclopédie dédiée à l'histoire algérienne.",
      technologies: ["HTML", "CSS", "javascript", "Django"],
    },
  ],

  CONTACT: {
    address: "Sétif",
    phoneNo: "+213-560879734",
    email: "youcef.h.ouahab@gmail.com",
  },
};

export const var_ar = {
  name: "يوسف حبيب وهاب",
  title: "مطور شامل",
  technologies: "التقنيات",
  languages: "اللغات",
  projects: "المشاريع",
  cursus: "المسار الدراسي",
  getInTouch: "تواصل معي",

  HERO_CONTENT: `خريج علوم البيانات ومطور ويب شامل يمتلك مهارة في تصميم تطبيقات الويب والموبايل المتينة والقابلة للتوسع.
مع 3 سنوات من الخبرة العملية، طورت مهاراتي في تقنيات الواجهة الأمامية مثل React js، React Native، Bootstrap CSS وTailwind CSS، بالإضافة إلى تقنيات الواجهة الخلفية باستخدام Django و PostgreSQL.`,

  ABOUT_TEXT: `أنا مطور شامل مخلص ومتعدد المواهب، شغوف بإنشاء تطبيقات ويب فعالة وسهلة الاستخدام. بخبرة مهنية تمتد لخمسة أعوام، عملت مع مجموعة متنوعة من التقنيات بما في ذلك React, Next.js, Node.js, MySQL, PostgreSQL وMongoDB. بدأت رحلتي في تطوير الويب بدافع الفضول العميق لمعرفة كيفية عمل الأشياء، وتطورت لتصبح مسيرة مهنية أسعى من خلالها دائماً لتعلم كل جديد والتكيف مع التحديات. أزدهر في البيئات التعاونية وأستمتع بحل المشكلات المعقدة لتقديم حلول عالية الجودة. خارج إطار البرمجة، أستمتع بممارسة النشاط، استكشاف تقنيات جديدة والمساهمة في مشاريع المصادر المفتوحة.`,

  EXPERIENCES: [
    {
      year: "2025",
      role: "مستقل",
      company: "",
      description: "",
      technologies: ["Python", "JS", "TS", "React.js", "Django", "Expo React Native", "Django Rest"],
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
      company: "جامعة فرحات عباس - كلية العلوم، سطيف",
      description: "",
      technologies: ["Python"],
    },
    {
      year: "2023",
      role: "خريج ليسانس",
      company: "",
      description: "",
      technologies: ["HTML", "bootstrap", "PHP", "Laravel"],
    },
    {
      year: "2020 - 2023",
      role: "طالب في علوم الحاسوب",
      company: "جامعة فرحات عباس - كلية العلوم، سطيف",
      description: "",
      technologies: ["HTML", "CSS", "JS", "PHP"],
    },
  ],

  PROJECTS: [
    {
      title: "منصة نقل الدم ونظام الإدارة",
      image: ct,
      description: "مشروع تخرج ليسانس.. منصة متكاملة تعمل بكامل وظائف CRUD وتحقق المستخدم.",
      technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "Laravel"],
    },
    {
      title: "منصة وسائل التواصل الاجتماعي",
      image: bookmarks,
      description: "تطبيق مستوحى من عمل أنطونيو ميلي... هدفه هو حفظ الصور عبر الإنترنت ومشاركتها مباشرة في قسم الملف الشخصي (محاكياً Pinterest)... إنه موقع تواصل اجتماعي ويضم أيضاً نظام تتبع لإجراءات المستخدمين.",
      technologies: ["HTML", "CSS", "Javascript", "Django", "Redis"],
    },
    {
      title: "متعقب الروابط",
      image: extension,
      description: "إضافة للمتصفح لحفظ الروابط المفضلة للمستخدمين في ذاكرة التخزين المحلية للمتصفح بنقرة زر.",
      technologies: ["HTML", "CSS", "javascript"],
    },
    {
      title: "شبكة اجتماعية مصغرة بReact وFirebase",
      image: R_FB,
      description: "كما يشير الاسم، هذه هي أول تطبيق React لي... يقوم بعمليات CRUD والمصادقة باستخدام Firebase.",
      technologies: ["HTML", "CSS", "Typescript", "React", "Firebase"],
    },
    {
      title: "لعبة الذاكرة للموبايل والويب",
      image: game,
      description: "مشروع هواية باستخدام React وReact Native، لعبة ذاكرة متكاملة تحصل على الرموز التعبيرية من API بناءً على اختيار المستخدم... تقوم بفك التشفير، الترتيب العشوائي وتكرارها في شبكة.",
      technologies: ["HTML", "CSS", "React", "React Native"],
    },
    {
      title: "لعبة الباحث عن الألغام",
      image: mines,
      description: "مشروع هواية آخر بلغة جافاسكريبت العادية يحاكي لعبة الباحث عن الألغام الكلاسيكية.",
      technologies: ["HTML", "CSS", "javascript"],
    },
    {
      title: "AlghistoryPedia",
      image: project1,
      description: "موسوعة مصغرة مخصصة لتاريخ الجزائر.",
      technologies: ["HTML", "CSS", "javascript", "Django"],
    },
  ],

  CONTACT: {
    address: "سطيف",
    phoneNo: "+213-560879734",
    email: "youcef.h.ouahab@gmail.com",
  },


};