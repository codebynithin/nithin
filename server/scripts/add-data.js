const social_link = require('../schema/social-link');
const top_navigation = require('../schema/top-navigation');
const skill_schema = require('../schema/skill.schema');
const education = require('../schema/education');
const experience = require('../schema/experience');
const portfolio = require('../schema/portfolio');
const quick_link = require('../schema/quick-link');
const skill_category_enum = require('../../common/enum/skill-category.enum');
const skill_type_enum = require('../../common/enum/skill-type.enum');
const links = [
  {
    href: 'https://www.linkedin.com/in/nithinvuideveloper',
    icon: 'cbn-linkedin2',
    label: 'LinkedIn',
  },
  {
    href: 'https://twitter.com/Nithin_V86',
    icon: 'cbn-twitter',
    label: 'Twitter',
  },
  {
    href: 'https://github.com/codebynithin',
    icon: 'cbn-github',
    label: 'GitHub',
  },
  {
    href: 'https://stackoverflow.com/users/8904502/nithin-v',
    icon: 'cbn-stackoverflow',
    label: 'Stack Overflow',
  },
  {
    href: 'https://www.facebook.com/nithinvuideveloper',
    icon: 'cbn-facebook',
    label: 'Facebook',
  },
];
const topNav = [
  { href: '/about', icon: 'cbn-user', label: 'About' },
  { href: '/experiences', icon: 'cbn-experiences', label: 'Experiences' },
  { href: '/portfolio', icon: 'cbn-portfolio', label: 'Portfolio' },
  { href: '/educations', icon: 'cbn-educations', label: 'Educations' },
];
const skills = [
  {
    name: 'Web Designing',
    category: skill_category_enum.SkillCategoryEnum.DESIGN,
    percentage: 95,
    type: skill_type_enum.SkillTypeEnum.PROGRESS_BAR,
  },
  {
    name: 'Photoshop',
    category: skill_category_enum.SkillCategoryEnum.DESIGN,
    percentage: 90,
    type: skill_type_enum.SkillTypeEnum.PROGRESS_BAR,
  },
  {
    name: 'Figma',
    category: skill_category_enum.SkillCategoryEnum.DESIGN,
    percentage: 85,
    type: skill_type_enum.SkillTypeEnum.PROGRESS_BAR,
  },
  {
    name: 'Illustrator',
    category: skill_category_enum.SkillCategoryEnum.DESIGN,
    percentage: 80,
    type: skill_type_enum.SkillTypeEnum.PROGRESS_BAR,
  },
  {
    name: 'InDesign',
    category: skill_category_enum.SkillCategoryEnum.DESIGN,
    percentage: 70,
    type: skill_type_enum.SkillTypeEnum.PROGRESS_BAR,
  },
  {
    name: 'English',
    category: skill_category_enum.SkillCategoryEnum.PROFICIENCY,
    percentage: 90,
    type: skill_type_enum.SkillTypeEnum.DOTS,
  },
  {
    name: 'Malayalam',
    category: skill_category_enum.SkillCategoryEnum.PROFICIENCY,
    percentage: 100,
    type: skill_type_enum.SkillTypeEnum.DOTS,
  },
  {
    name: 'Hindi',
    category: skill_category_enum.SkillCategoryEnum.PROFICIENCY,
    percentage: 70,
    type: skill_type_enum.SkillTypeEnum.DOTS,
  },
  {
    name: 'HTML5 / CSS3 / SASS / Bootstrap / Tailwind CSS / Markdown',
    category: skill_category_enum.SkillCategoryEnum.CODING,
    percentage: 95,
    type: skill_type_enum.SkillTypeEnum.CIRCULAR_PROGRESS,
  },
  {
    name: 'Angular / React / NativeScript / ExpressJs / JavaScript / Typescript',
    category: skill_category_enum.SkillCategoryEnum.CODING,
    percentage: 90,
    type: skill_type_enum.SkillTypeEnum.CIRCULAR_PROGRESS,
  },
  {
    name: 'Vue / Flutter / Ionic / Git / Ajax',
    category: skill_category_enum.SkillCategoryEnum.CODING,
    percentage: 80,
    type: skill_type_enum.SkillTypeEnum.CIRCULAR_PROGRESS,
  },
  {
    name: 'NestJs / Grunt / Sonar / PHP',
    category: skill_category_enum.SkillCategoryEnum.CODING,
    percentage: 75,
    type: skill_type_enum.SkillTypeEnum.CIRCULAR_PROGRESS,
  },
  {
    name: 'Web Application',
    category: skill_category_enum.SkillCategoryEnum.KNOWLEDGE,
    type: skill_type_enum.SkillTypeEnum.LIST,
  },
  {
    name: 'Mobile Application',
    category: skill_category_enum.SkillCategoryEnum.KNOWLEDGE,
    type: skill_type_enum.SkillTypeEnum.LIST,
  },
  {
    name: 'Website Hosting',
    category: skill_category_enum.SkillCategoryEnum.KNOWLEDGE,
    type: skill_type_enum.SkillTypeEnum.LIST,
  },
  {
    name: 'Create Logo Design',
    category: skill_category_enum.SkillCategoryEnum.KNOWLEDGE,
    type: skill_type_enum.SkillTypeEnum.LIST,
  },
  {
    name: 'Design for Print',
    category: skill_category_enum.SkillCategoryEnum.KNOWLEDGE,
    type: skill_type_enum.SkillTypeEnum.LIST,
  },
  {
    name: 'Modern and Mobile Ready Websites',
    category: skill_category_enum.SkillCategoryEnum.KNOWLEDGE,
    type: skill_type_enum.SkillTypeEnum.LIST,
  },
  {
    name: 'Search Engine Marketing',
    category: skill_category_enum.SkillCategoryEnum.KNOWLEDGE,
    type: skill_type_enum.SkillTypeEnum.LIST,
  },
  {
    name: 'Graphics and Animations',
    category: skill_category_enum.SkillCategoryEnum.KNOWLEDGE,
    type: skill_type_enum.SkillTypeEnum.LIST,
  },
];
const educations = [
  {
    date: '2008 - 2009',
    title: 'Web Designing and Animation',
    institution: 'Cochin CADD Center, Kochi',
    description: 'Completed certification course in Web Designing and Animation.',
  },
  {
    date: '2003 - 2006',
    title: 'Diploma in Polymer Technology',
    institution: 'Technical Education Department Kerala',
    description: 'Completed 3 year diploma course with 73% of marks.',
  },
  {
    date: '2001 - 2003',
    title: 'VHSE in Refrigerator and Air Conditioning',
    institution: 'Technical Education Department Kerala',
    description:
      'Completed 2 year vocational and higher secondary course in Refrigerator and Air Conditioning with 67% of marks.',
  },
];
const experiences = [
  {
    date: '2020 - Present',
    title: 'Senior Software Engineer',
    company: 'Sorice Solutions Pvt. Ltd.',
    description:
      'Working in health domain as a MEAN developer with experience in Angular, NativeScript, NestJs, Node js, HTML5, CSS3, JavaScript, Git, Kubernetes, etc.',
  },
  {
    date: '2016 - 2020',
    title: 'Senior Software Engineer',
    company: 'Skyonn Technologies Pvt. Ltd.',
    description:
      'Working for Wipro as a contract employee with experience in HTML5, CSS3, JavaScript, Grunt, Ajax, Jenkins, Git, Azure, requireJs, etc.',
  },
  {
    date: '2012 - 2016',
    title: 'Senior Software Engineer',
    company: 'LSG Technologies India Pvt. Ltd.',
    description:
      '4 years experience Website design & development, responsive website creation, html5, css3, JavaScript, jQuery, brochure creation, Flash animation, PowerPoint Presentations, etc.',
  },
  {
    date: '2011 - 2012',
    title: 'Web / Graphic Designer',
    company: 'Geojit Technologies Pvt. Ltd.',
    description:
      '1.3 years experience in Website design, Flash animation, Flex & brochure printing, PowerPoint Presentations, back office works, etc.',
  },
  {
    date: '2007 - 2010',
    title: 'Junior Executive',
    company: 'Geojit BNP Paribas Financial Services Ltd.',
    description: '3.7 years experience in Back office works, MS office, etc.',
  },
];
const portfolios = [
  {
    title: "PAPPY'S NEST",
    category: 'Website',
    imageUrl: 'pappys-600.gif',
    thumbnailUrl: 'pappys-300.gif',
  },
  {
    title: 'Translation Creator',
    category: 'Website',
    imageUrl: 'impex-600.gif',
    thumbnailUrl: 'impex-300.gif',
  },
  {
    title: 'Vivid Diagnostic',
    category: 'Website',
    imageUrl: 'vivid-diagnostic-640.png',
    thumbnailUrl: 'vivid-diagnostic-320.png',
  },
  {
    title: 'Beach Plum Villa',
    category: 'Website',
    imageUrl: 'beachplumvilla-640.png',
    thumbnailUrl: 'beachplumvilla-320.png',
  },
  { title: 'LSG', category: 'Website', imageUrl: 'lsg-600.png', thumbnailUrl: 'lsg-300.png' },
  {
    title: 'Design Factory Qatar',
    category: 'Website',
    imageUrl: 'designfactory-640.png',
    thumbnailUrl: 'designfactory-320.png',
  },
  { title: 'vivid', category: 'Website', imageUrl: 'vivid-600.jpg', thumbnailUrl: 'vivid-300.jpg' },
  {
    title: 'UniArk',
    category: 'Website',
    imageUrl: 'uniark-600.jpg',
    thumbnailUrl: 'uniark-300.jpg',
  },
  {
    title: 'Dekazle',
    category: 'Website',
    imageUrl: 'dekazledesign-640.jpg',
    thumbnailUrl: 'dekazledesign-320.jpg',
  },
  {
    title: 'Review My Legal Bill',
    category: 'Website',
    imageUrl: 'reviewmylegalbill-600.png',
    thumbnailUrl: 'reviewmylegalbill-300.png',
  },
  {
    title: 'Patanjali Divya Yoga',
    category: 'Website',
    imageUrl: 'patanjali-divya-yoga-600.png',
    thumbnailUrl: 'patanjali-divya-yoga-300.png',
  },
  {
    title: 'Its Ella',
    category: 'Website',
    imageUrl: 'itsella-600.jpg',
    thumbnailUrl: 'itsella-300.jpg',
  },
  {
    title: 'Magrum Holidays',
    category: 'Website',
    imageUrl: 'magrum-holidays-600.png',
    thumbnailUrl: 'magrum-holidays-300.png',
  },
  {
    title: 'Flip book',
    category: 'Website',
    imageUrl: 'newsletter-600.png',
    thumbnailUrl: 'newsletter-300.png',
  },
  {
    title: 'Praxiva',
    category: 'Logo',
    imageUrl: 'praxiva-600.png',
    thumbnailUrl: 'praxiva-300.png',
  },
  { title: 'ICT', category: 'Logo', imageUrl: 'ict-600.png', thumbnailUrl: 'ict-300.png' },
  {
    title: 'KP Metrix',
    category: 'Logo',
    imageUrl: 'kp-metrix-logo-600.png',
    thumbnailUrl: 'kp-metrix-logo-300.png',
  },
  {
    title: 'Panel Partnership',
    category: 'Logo',
    imageUrl: 'panel-partnership-600.png',
    thumbnailUrl: 'panel-partnership-300.png',
  },
];
const quickLinks = [
  {
    name: 'Download Resume',
    icon: 'cbn-download',
    href: '/downloads/resume-nithin-v.pdf',
    target: '_blank',
  },
  { name: 'Know my career', icon: 'cbn-user', href: '/experiences' },
  { name: 'See my skills', icon: 'cbn-target', href: '/about#skills' },
  {
    name: 'See my github',
    icon: 'cbn-github',
    href: 'https://github.com/codebynithin',
    target: '_blank',
  },
  {
    name: 'View my source code',
    icon: 'cbn-code',
    href: 'https://github.com/codebynithin/nithin',
    target: '_blank',
  },
];
const seed = async () => {
  const existingSocialLinks = await social_link.find();
  const existingTopNavigations = await top_navigation.find();
  const existingSkills = await skill_schema.find();
  const existingEducations = await education.find();
  const existingExperiences = await experience.find();
  const existingPortfolios = await portfolio.find();
  const existingQuickLinks = await quick_link.find();

  const hasSocialDifference =
    existingSocialLinks?.length !== links.length ||
    !existingSocialLinks.every(
      ({ href, icon, label }, index) =>
        href === links[index].href && icon === links[index].icon && label === links[index].label,
    );
  const hasTopNavDifference =
    existingTopNavigations?.length !== topNav.length ||
    !existingTopNavigations.every(
      ({ href, icon, label }, index) =>
        href === topNav[index].href && icon === topNav[index].icon && label === topNav[index].label,
    );
  const hasSkillDifference =
    existingSkills?.length !== skills.length ||
    !existingSkills.every(
      ({ name, category, percentage, type }, index) =>
        name === skills[index].name &&
        category === skills[index].category &&
        percentage === skills[index].percentage &&
        type === skills[index].type,
    );
  const hasEducationDifference =
    existingEducations?.length !== educations.length ||
    !existingEducations.every(
      ({ date, title, institution, description }, index) =>
        date === educations[index].date &&
        title === educations[index].title &&
        institution === educations[index].institution &&
        description === educations[index].description,
    );
  const hasExperienceDifference =
    existingExperiences?.length !== experiences.length ||
    !existingExperiences.every(
      ({ date, title, company, description }, index) =>
        date === experiences[index].date &&
        title === experiences[index].title &&
        company === experiences[index].company &&
        description === experiences[index].description,
    );
  const hasPortfolioDifference =
    existingPortfolios?.length !== portfolios.length ||
    !existingPortfolios.every(
      ({ title, category }, index) =>
        title === portfolios[index].title && category === portfolios[index].category,
    );
  const hasQuickLinkDifference =
    existingQuickLinks?.length !== quickLinks?.length ||
    !existingQuickLinks.every(
      ({ name, icon, href, target }, index) =>
        name === quickLinks[index].name &&
        icon === quickLinks[index].icon &&
        href === quickLinks[index].href &&
        target === quickLinks[index].target,
    );

  if (hasSocialDifference) {
    await social_link.deleteMany({});
    await social_link.insertMany(links);
    console.log('Added social links.');
  }

  if (hasTopNavDifference) {
    await top_navigation.deleteMany({});
    await top_navigation.insertMany(topNav);
    console.log('Added top navigations.');
  }

  if (hasSkillDifference) {
    await skill_schema.deleteMany({});
    await skill_schema.insertMany(skills);
    console.log('Added skills.');
  }

  if (hasEducationDifference) {
    await education.deleteMany({});
    await education.insertMany(educations);
    console.log('Added educations.');
  }

  if (hasExperienceDifference) {
    await experience.deleteMany({});
    await experience.insertMany(experiences);
    console.log('Added experiences.');
  }

  if (hasPortfolioDifference) {
    await portfolio.deleteMany({});
    await portfolio.insertMany(portfolios);
    console.log('Added portfolios.');
  }

  if (hasQuickLinkDifference) {
    await quick_link.deleteMany({});
    await quick_link.insertMany(quickLinks);

    console.log('Added quick links.');
  }
};

exports.seed = seed;
