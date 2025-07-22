const SocialLink = require('../models/social-link');
const TopNavigation = require('../models/top-navigation');
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
];
const seed = async () => {
  const existingSocialLinks = await SocialLink.find();
  const existingTopNavigations = await TopNavigation.find();
  const hasSocialDifference = existingSocialLinks.length !== links.length ||
    !existingSocialLinks.every(
      ({ href, icon, label }, index) =>
        href === links[index].href && icon === links[index].icon && label === links[index].label,
    );

  const hasTopNavDifference = existingTopNavigations.length !== topNav.length ||
    !existingTopNavigations.every(
      ({ href, icon, label }, index) =>
        href === topNav[index].href && icon === topNav[index].icon && label === topNav[index].label,
    );

  if (existingSocialLinks?.length === links.length && !hasSocialDifference) {
    console.log('Social links already exist.');
  } else {
    await SocialLink.deleteMany({});
    await SocialLink.insertMany(links);

    console.log('Added social links.');
  }

  if (existingTopNavigations?.length === topNav.length && !hasTopNavDifference) {
    console.log('Top navigations already exist.');
  } else {
    await TopNavigation.deleteMany({});
    await TopNavigation.insertMany(topNav);

    console.log('Added top navigations.');
  }
};

module.exports = { seed };
