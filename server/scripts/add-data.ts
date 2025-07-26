import SocialLink from '../schema/social-link';
import TopNavigation from '../schema/top-navigation';
import Skill from '../schema/skill.schema';
import Education from '../schema/education';
import Experience from '../schema/experience';
import Portfolio from '../schema/portfolio';
import { SkillCategoryEnum } from '../../common/enum/skill-category.enum';
import { SkillTypeEnum } from '../../common/enum/skill-type.enum';
import { SocialLinkModel } from '../../common/model/social-link.model';
import { TopNavigationModel } from '../../common/model/top-navigation.model';
import { SkillModel } from '../../common/model/skill.model';
import { EducationModel } from '../../common/model/education.model';
import { ExperienceModel } from '../../common/model/experience.model';
import { PortfolioModel } from '../../common/model/portfolio.model';

const links: Partial<SocialLinkModel>[] = [
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
const topNav: Partial<TopNavigationModel>[] = [
  { href: '/about', icon: 'cbn-user', label: 'About' },
  { href: '/experiences', icon: 'cbn-experiences', label: 'Experiences' },
  { href: '/portfolio', icon: 'cbn-portfolio', label: 'Portfolio' },
  { href: '/educations', icon: 'cbn-educations', label: 'Educations' },
];
const skills: Partial<SkillModel>[] = [
  {
    name: 'Web Designing',
    category: SkillCategoryEnum.DESIGN,
    percentage: 95,
    type: SkillTypeEnum.PROGRESS_BAR,
  },
  {
    name: 'Photoshop',
    category: SkillCategoryEnum.DESIGN,
    percentage: 90,
    type: SkillTypeEnum.PROGRESS_BAR,
  },
  {
    name: 'Figma',
    category: SkillCategoryEnum.DESIGN,
    percentage: 85,
    type: SkillTypeEnum.PROGRESS_BAR,
  },
  {
    name: 'Illustrator',
    category: SkillCategoryEnum.DESIGN,
    percentage: 80,
    type: SkillTypeEnum.PROGRESS_BAR,
  },
  {
    name: 'InDesign',
    category: SkillCategoryEnum.DESIGN,
    percentage: 70,
    type: SkillTypeEnum.PROGRESS_BAR,
  },
  {
    name: 'English',
    category: SkillCategoryEnum.PROFICIENCY,
    percentage: 90,
    type: SkillTypeEnum.DOTS,
  },
  {
    name: 'Malayalam',
    category: SkillCategoryEnum.PROFICIENCY,
    percentage: 100,
    type: SkillTypeEnum.DOTS,
  },
  {
    name: 'Hindi',
    category: SkillCategoryEnum.PROFICIENCY,
    percentage: 70,
    type: SkillTypeEnum.DOTS,
  },
  {
    name: 'HTML5 / CSS3',
    category: SkillCategoryEnum.CODING,
    percentage: 95,
    type: SkillTypeEnum.CIRCULAR_PROGRESS,
  },
  {
    name: 'Angular / NativeScript / NestJs / JavaScript / Typescript',
    category: SkillCategoryEnum.CODING,
    percentage: 90,
    type: SkillTypeEnum.CIRCULAR_PROGRESS,
  },
  {
    name: 'Vue / Ionic / Git / Ajax',
    category: SkillCategoryEnum.CODING,
    percentage: 80,
    type: SkillTypeEnum.CIRCULAR_PROGRESS,
  },
  {
    name: 'Grunt / Sonar / PHP',
    category: SkillCategoryEnum.CODING,
    percentage: 75,
    type: SkillTypeEnum.CIRCULAR_PROGRESS,
  },
  { name: 'Web Application', category: SkillCategoryEnum.KNOWLEDGE, type: SkillTypeEnum.LIST },
  { name: 'Mobile Application', category: SkillCategoryEnum.KNOWLEDGE, type: SkillTypeEnum.LIST },
  { name: 'Website Hosting', category: SkillCategoryEnum.KNOWLEDGE, type: SkillTypeEnum.LIST },
  { name: 'Create Logo Design', category: SkillCategoryEnum.KNOWLEDGE, type: SkillTypeEnum.LIST },
  { name: 'Design for Print', category: SkillCategoryEnum.KNOWLEDGE, type: SkillTypeEnum.LIST },
  {
    name: 'Modern and Mobile Ready Websites',
    category: SkillCategoryEnum.KNOWLEDGE,
    type: SkillTypeEnum.LIST,
  },
  {
    name: 'Search Engine Marketing',
    category: SkillCategoryEnum.KNOWLEDGE,
    type: SkillTypeEnum.LIST,
  },
  {
    name: 'Graphics and Animations',
    category: SkillCategoryEnum.KNOWLEDGE,
    type: SkillTypeEnum.LIST,
  },
];
const educations: Partial<EducationModel>[] = [
  {
    date: '2008 - 2009',
    title: 'Web Designing and Animation',
    institution: 'Cochin CADD Center, Kochi',
    description: 'Completed certification course in Web Designing and Animation.',
  },
  {
    date: '2003 - 2006',
    title: 'Diploma in Polymer Technology',
    institution: 'Govt. Polytechnic College, Kottayam',
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
const experiences: Partial<ExperienceModel>[] = [
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
const portfolios: Partial<PortfolioModel>[] = [
  {
    title: "PAPPY'S NEST",
    category: 'Website',
    imageUrl: 'pappys-600.gif',
    thumbnailUrl: 'pappys-300.gif',
  },
  {
    title: 'Translation ImpEx Creator',
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
    imageUrl: 'Patanjali-divya-yoga-600.png',
    thumbnailUrl: 'Patanjali-divya-yoga-300.png',
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

const seed = async () => {
  const existingSocialLinks = await SocialLink.find();
  const existingTopNavigations = await TopNavigation.find();
  const existingSkills = await Skill.find();
  const existingEducations = await Education.find();
  const existingExperiences = await Experience.find();
  const existingPortfolios = await Portfolio.find();
  const hasSocialDifference =
    existingSocialLinks.length !== links.length ||
    !existingSocialLinks.every(
      ({ href, icon, label }: SocialLinkModel, index: number) =>
        href === links[index].href && icon === links[index].icon && label === links[index].label,
    );
  const hasTopNavDifference =
    existingTopNavigations.length !== topNav.length ||
    !existingTopNavigations.every(
      ({ href, icon, label }: TopNavigationModel, index: number) =>
        href === topNav[index].href && icon === topNav[index].icon && label === topNav[index].label,
    );
  const hasSkillDifference =
    existingSkills.length !== skills.length ||
    !existingSkills.every(
      ({ name, category, percentage, type }: SkillModel, index: number) =>
        name === skills[index].name &&
        category === skills[index].category &&
        percentage === skills[index].percentage &&
        type === skills[index].type,
    );
  const hasEducationDifference =
    existingEducations.length !== educations.length ||
    !existingEducations.every(
      ({ date, title, institution, description }: EducationModel, index: number) =>
        date === educations[index].date &&
        title === educations[index].title &&
        institution === educations[index].institution &&
        description === educations[index].description,
    );
  const hasExperienceDifference =
    existingExperiences.length !== experiences.length ||
    !existingExperiences.every(
      ({ date, title, company, description }: ExperienceModel, index: number) =>
        date === experiences[index].date &&
        title === experiences[index].title &&
        company === experiences[index].company &&
        description === experiences[index].description,
    );
  const hasPortfolioDifference =
    existingPortfolios.length !== portfolios.length ||
    !existingPortfolios.every(
      ({ title, category }: PortfolioModel, index: number) =>
        title === portfolios[index].title && category === portfolios[index].category,
    );

  if (existingSocialLinks?.length !== links.length || hasSocialDifference) {
    await SocialLink.deleteMany({});
    await SocialLink.insertMany(links);

    console.log('Added social links.');
  }

  if (existingTopNavigations?.length !== topNav.length || hasTopNavDifference) {
    await TopNavigation.deleteMany({});
    await TopNavigation.insertMany(topNav);

    console.log('Added top navigations.');
  }

  if (existingSkills?.length !== skills.length || hasSkillDifference) {
    await Skill.deleteMany({});
    await Skill.insertMany(skills);

    console.log('Added skills.');
  }

  if (existingEducations?.length !== educations.length || hasEducationDifference) {
    await Education.deleteMany({});
    await Education.insertMany(educations);

    console.log('Added educations.');
  }

  if (existingExperiences?.length !== experiences.length || hasExperienceDifference) {
    await Experience.deleteMany({});
    await Experience.insertMany(experiences);

    console.log('Added experiences.');
  }

  if (existingPortfolios?.length !== portfolios.length || hasPortfolioDifference) {
    await Portfolio.deleteMany({});
    await Portfolio.insertMany(portfolios);

    console.log('Added portfolios.');
  }
};

export { seed };
