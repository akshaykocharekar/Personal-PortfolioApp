import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Akshay Kocharekar",
  initials: "AK",
  url: "https://akshay-portfolio-nu.vercel.app/",
  location: "Carmona, Margao,Goa",
  locationLink: "",
  description:
    "Aspiring Software Developer with a passion for building innovative solutions and helping others. Always learning and experimenting with new technologies.",
  summary:
    "As I work through my BCA journey, set to wrap up in 2026, I'm diving deep into building and scaling web applications. I'm all in on mastering new technologies, improving my skills, and tackling projects that push me to think outside the box. Hackathons are definitely on my radar for the future, as a way to challenge my creativity and tech abilities. For now, I’m focused on creating real-world solutions that make an impact and continually leveling up my craft.",
 
  skills: [
    "React",
    "Node.js",
    "MongoDB",
    "Vercel",
    "Express",
    "UI/UX",
    "ChatGpt",
    "Javascript",
   
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    
  ],
  contact: {
    email: "akshaykocharekar3@gmail.com",
    tel: "+91 9119455139",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/akshaykocharekar",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akshay-kocharekar-859829321",
        icon: Icons.linkedin,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "akshaykocharekar3@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

 work: [
   {
    company: "Night owl or early bird?",
    badges: [],
    href: "/batman.jpg",
    location: "Remote",
    title: "Certified night owl. Best code = 1 AM energy.",
    logoUrl: "/batman.jpg",
    start: "",
    end: "",
    description:
      "Late nights are when I’m in my element. The world’s quieter, distractions fade, and I can finally hear my own thoughts clearly. That’s when I code, design, learn — with full focus and flow. Most of my breakthroughs, whether it’s debugging or building features, happen after midnight. Sleep gets delayed, but that 1 AM energy? It’s pure creative fire. Nighttime is when the real magic happens.",
  },
  {
    company: "Dream weekend vibe?",
    badges: [],
    href: "",
    location: "Remote",
    title: "Bit of code, bit of cricket, bit of calm.",
    logoUrl: "/weekend.jpg",
    start: "",
    end: "",
    description:
      "My weekends are a soft reset — no alarms, just flow. I like to kick off with a light coding session or work on a side project. Then comes cricket, either playing with friends or watching old MI highlights. And by evening, it’s lo-fi beats, a quiet sunset, and a little journaling or reflection. For me, a weekend isn’t about escaping the routine — it’s about reconnecting with what fuels me.",
  },
  {
    company: "Favorite Sports Team",
    href: "https://atomic.finance",
    badges: [],
    location: "Remote",
    title: "Mumbai Indians",
    logoUrl: "/mumbai-indians.jpg",
    start: "2013",
    end: "Forever",
    description:
      "Mumbai Indians has been my team since the moment I first watched IPL seriously. There’s something about the legacy — from Sachin Tendulkar’s grace to Rohit Sharma’s calm captaincy — that just stuck. I’ve lived through heartbreaks, last-over thrillers, and epic title wins with this team. Every match feels personal, like a rollercoaster you can’t step off. Supporting MI is not just about cricket — it’s about belonging to a story that’s still being written.",
  },
  {
    company: "Go-to tech stack?",
    badges: [],
    href: "",
    location: "Remote",
    title: "MERN — smooth, powerful, and scalable.",
    logoUrl: "/React.jpg",
    start: "2024",
    end: "Present",
    description:
      "MERN (MongoDB, Express, React, Node.js) has become my comfort zone and creative playground. It’s the stack that helped me transition from ‘just learning’ to ‘actually building.’ Whether it’s a dashboard, an e-commerce site, or an authentication system — MERN makes it intuitive to bring ideas to life. The community, the scalability, the flexibility — it all aligns with how I love to work. Clean, efficient, full-stack freedom.",
  },
  {
    company: "What’s my biggest fear?",
    badges: [],
    href: "",
    location: "Remote",
    title: "Wasting potential.",
    logoUrl: "/fear.jpg",
    start: "2024",
    end: "Present",
    description:
      "More than failure, what really unsettles me is the thought of settling. Letting comfort kill curiosity. I often think — what if I never try? What if I stay in my lane just to avoid risks? That thought alone makes me want to push harder, go deeper, take that leap. Life’s short, and I’d rather fall a few times than wonder 'what if?' at the end of it.",
  }
]
,

  education: [
    {
      school: "Shree Damodar College of Commerce and Economics",
      href: "https://www.damodarcollege.edu.in/",
      degree: "Bachelor's Degree of Computer Application (BCA)",
      logoUrl: "/_VV6pvBg_400x400.jpg",
      start: "2023",
      end: "2026",
    },
    {
      school: "Mount Mary's Higher Secondary School",
      href: "http://mountmaryhss.com/web/",
      degree: "Science",
      logoUrl: "/download.jpg",
      start: "2021",
      end: "2023",
    },
    {
      school: "Sacred Heart  Of Jesus High School",
      href: "",
      degree: "High School",
      logoUrl: "/download (2).jpg",
      start: "2009",
      end: "2021",
    },
    
  ],
 projects: [
 
  {
    title: "AI Text & Document Summarizer",
    href: "https://github.com/akshaykocharekar/ai-summarizer", // Replace if hosted
    dates: "Feb 2025",
    active: true,
    description:
      "A React-based app that uses OpenAI API to summarize long texts and documents efficiently. Designed with a clean UI and powerful prompt tuning.",
    technologies: [
      "React",
      "OpenAI API",
      "TailwindCSS",
      "RapidAPI",
      "JavaScript",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/akshaykocharekar/ai-summarizer",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
  {
    title: "Node.js Food App Backend",
    href: "https://github.com/akshaykocharekar/foodapp-backend", // Replace if hosted
    dates: "March 2025",
    active: true,
    description:
      "Developed a RESTful backend API for a food delivery application with user auth, menu management, order handling, and payment logic.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Postman",
      "Mongoose",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/akshaykocharekar/foodapp-backend",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/Nodejs.png",
    video: "",
  },
 
],

hackathons: [
  {
    title: "First Exposure to Code",
    dates: "2022",
    location: "High School ICT Class",
    description:
      "Had my first brush with HTML and CSS during a school group project. We built a simple static information page. Though basic, I was genuinely proud of it — it sparked curiosity that stayed with me.",
    image: "/start.jpg",
    mlh: "",
    links: [],
  },
  {
    title: "Discovered Web Development",
    dates: "Late 2022",
    location: "Self-learning + YouTube",
    description:
      "Started exploring HTML, CSS, and JavaScript tutorials online. The thrill of turning code into visuals on the browser screen was addictive. I began dreaming of building full-fledged websites.",
    image: "/me.jpg",
    mlh: "",
    links: [],
  },
  {
    title: "Fell in Love with React",
    dates: "Mid 2023",
    location: "YouTube + Projects",
    description:
      "Discovered React and became obsessed. The component-based structure and how everything 'reacts' felt magical. I began building dynamic UIs and slowly moved away from just static pages.",
    image: "/love.jpg",
    mlh: "",
    links: [],
  },
  {
    title: "The Full Stack Curiosity",
    dates: "Early 2024",
    location: "MongoDB, Node.js, Express",
    description:
      "Once frontend felt comfortable, I dove into the backend world. Understanding how databases, APIs, and servers worked felt like unlocking the second half of the web development puzzle.",
    image: "/unlock.jpg",
    mlh: "",
    links: [],
  },
  {
    title: "React Burnout & Doubts",
    dates: "late 2024",
    location: "Solo Learning Phase",
    description:
      "Almost gave up. React got confusing, and I felt like I wasn’t progressing. This was the toughest mental dip — imposter syndrome, tutorial fatigue, and comparison hit hard.",
    image: "/stuck.jpg",
    mlh: "",
    links: [],
  },
  {
    title: "Mindset Shift: From Coding to Creating",
    dates: "Mid 2025",
    location: "Personal Reflection",
    description:
      "By 2025, something changed. Coding wasn’t just about frameworks or finishing projects anymore — it became a mindset. I started thinking in terms of solutions, not syntax. I stopped obsessing over tutorials and started trusting my problem-solving. This shift helped me see myself not just as a developer, but as a builder with a purpose.",
    image: "/up.jpg",
    mlh: "",
    links: [],
  },
],

} as const;
