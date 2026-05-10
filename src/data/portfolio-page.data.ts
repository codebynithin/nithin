export interface NavItem {
  id: string;
  label: string;
}

export interface SkillCategory {
  icon: 'code' | 'database' | 'mobile' | 'layers';
  label: string;
  color: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  certificate?: string;
  projects?: {
    title: string;
    description: string;
    url: string;
  }[];
}

export interface ProjectItem {
  title: string;
  category: string;
  image: string;
  tech: string[];
  description: string;
  color: string;
}

export interface SkillBar {
  label: string;
  percentage: number;
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const roles = ['UI Team Lead', 'Full-Stack Developer', 'UX Designer', 'Mobile Developer'];

export const techStack = [
  'React',
  'Angular',
  'Node.js',
  'Flutter',
  'TypeScript',
  'MongoDB',
  'Express.js',
  'PostgreSQL',
  'UX Design',
  'React Native',
  'Next.js',
  'GraphQL',
  'Figma',
  'AWS',
  'Vue.js',
  'Docker',
  'SASS',
  'Redux',
  'Firebase',
  'REST APIs',
];

export const skillBars: SkillBar[] = [
  { label: 'React / Next.js', percentage: 95 },
  { label: 'Angular', percentage: 90 },
  { label: 'Node.js', percentage: 85 },
  { label: 'Flutter', percentage: 80 },
  { label: 'UX / Figma', percentage: 88 },
];

export const skillCategories: SkillCategory[] = [
  {
    icon: 'code',
    label: 'Frontend Development',
    color: '#22bbf2',
    items: [
      'React',
      'Angular',
      'Vue.js',
      'Next.js',
      'TypeScript',
      'SASS',
      'Redux',
      'HTML5',
      'CSS3',
    ],
  },
  {
    icon: 'database',
    label: 'Backend & APIs',
    color: '#b8ff32',
    items: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs', 'Firebase'],
  },
  {
    icon: 'mobile',
    label: 'Mobile Development',
    color: '#f472b6',
    items: ['Flutter', 'React Native', 'Dart', 'iOS', 'Android', 'Expo'],
  },
  {
    icon: 'layers',
    label: 'Design & DevOps',
    color: '#fb923c',
    items: ['UX Design', 'Figma', 'Adobe XD', 'Docker', 'AWS', 'CI/CD', 'Git'],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'UI Team Lead',
    company: 'Sorice Solutions',
    period: '2020 - Present',
    description:
      'Leading a UI team in the healthcare domain, architecting scalable MEAN stack applications used by thousands of medical professionals. Recognized by company leadership with a Certificate of Recognition for outstanding performance, dedication, and positive impact — a distinction awarded by the CEO for consistently going above and beyond. Driving technical decisions, mentoring developers, and delivering enterprise-grade solutions with Angular, NativeScript, NestJS, Node.js, Kubernetes, and Azure.',
    certificate: '/images/certificate-of-recognition.png',
    projects: [
      {
        title: '4medica Portal',
        description:
          "Spearheaded the end-to-end UI architecture of 4medica's flagship client portal — a complex, multi-tenant platform that transformed how healthcare organizations manage patients, products, and services. My work directly enabled clients to gain real-time operational visibility at scale.",
        url: 'https://portal.4medica.io/',
      },
      {
        title: '4Health',
        description:
          'Led the UI development of 4Health, a patient-facing platform that bridges lab partners and end customers. Streamlined the report delivery pipeline, reducing friction for users and significantly improving the experience of accessing critical health data.',
        url: 'https://4health.me/',
      },
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Skynonn Technologies / Wipro',
    period: '2016 - 2020',
    description:
      'Delivered high-impact UI work as a Wipro contract engineer on globally deployed enterprise products. Built performant, cross-browser interfaces using HTML5, CSS3, JavaScript, Grunt, Ajax, Jenkins, Git, Azure, and RequireJS — serving millions of users worldwide.',
    projects: [
      {
        title: 'Philips Store for Business',
        description:
          'Contributed to a global B2B e-commerce portal for Philips Professional Lighting, used by dealers, distributors, and enterprise customers across the world. My UI work helped unify product discovery and purchasing across multiple Philips brands including Signify and Lumileds.',
        url: 'https://www.b2bshop.philips.com/',
      },
      {
        title: 'Dubai Trade',
        description:
          'Built key UI modules for Dubai Trade — a large-scale shipping and logistics tracking platform that connects buyers, sellers, banks, and government agencies across international trade corridors. The platform handles high-volume trade operations across the UAE and beyond.',
        url: 'https://www.dubaitrade.ae/en/',
      },
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'LSG Technologies',
    period: '2012 - 2016',
    description:
      'Over 4 years, owned the full UI lifecycle — from design to deployment — across multiple client projects. Delivered responsive websites, interactive UIs, and branded digital assets using HTML5, CSS3, JavaScript, jQuery, and Adobe tools.',
    projects: [
      {
        title: 'Legal Bill Review',
        description:
          'Built the UI for a financial transparency platform that modernized how corporations review and manage legal billing. The solution introduced clarity and accountability into a process that was traditionally opaque and manual.',
        url: '#',
      },
      {
        title: 'Beach Plum Villa',
        description:
          "Solely responsible for the complete UI development of Beach Plum Villa's website — a luxury vacation villa in Wellfleet, Massachusetts. Delivered a polished, visually rich experience that captures the premium feel of the property and drives bookings.",
        url: 'https://beachplumvilla.com/',
      },
    ],
  },
  {
    role: 'Web / Graphic Designer',
    company: 'Geojit Technologies Pvt. Ltd.',
    period: '2011 - 2012',
    description:
      "Designed and delivered a range of digital and print assets — websites, Flash animations, Flex UIs, and branded brochures — for one of India's leading financial services technology companies. Built a strong foundation in visual communication and digital design.",
  },
  {
    period: '2007 - 2010',
    role: 'Junior Executive',
    company: 'Geojit BNP Paribas Financial Services Ltd.',
    description:
      "Gained early professional experience in back-office operations at one of India's largest retail broking firms, developing discipline, attention to detail, and a strong understanding of business operations — the foundation that shaped my technical career.",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "PAPPY'S NEST",
    category: 'Website',
    image: 'pappys-600.gif',
    tech: ['Responsive UI', 'Brand Site', 'Animation'],
    description:
      'A hospitality website with polished visuals, motion, and a conversion-focused browsing flow.',
    color: '#22bbf2',
  },
  {
    title: 'Vivid Diagnostic',
    category: 'Website',
    image: 'vivid-diagnostic-640.png',
    tech: ['Healthcare', 'Web UI', 'Content System'],
    description:
      'A diagnostic center web presence designed for clarity, trust, and quick patient discovery.',
    color: '#b8ff32',
  },
  {
    title: 'Beach Plum Villa',
    category: 'Website',
    image: 'beachplumvilla-640.png',
    tech: ['Travel', 'Booking UX', 'Responsive'],
    description:
      'A villa showcase built around immersive imagery, fast scanning, and direct enquiry flows.',
    color: '#f472b6',
  },
  {
    title: 'Review My Legal Bill',
    category: 'Website',
    image: 'reviewmylegalbill-600.png',
    tech: ['Legal Tech', 'Landing Page', 'UX'],
    description:
      'A service website with a direct value proposition and simple path from interest to contact.',
    color: '#fb923c',
  },
];
