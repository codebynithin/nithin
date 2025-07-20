const mongoose = require('mongoose');
const connectDB = require('../db');
const SocialLink = require('../models/SocialLink');
const TopNavigation = require('../models/TopNavigation');
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
  { href: '/portfolio', icon: 'cbn-portfolio', label: 'Portfolio' },
  { href: '/service', icon: 'cbn-service', label: 'Service' },
];

async function seed() {
  await connectDB();
  const existingSocialLinks = await SocialLink.find();
  const existingTopNavigations = await TopNavigation.find();
  let hasSocialDifference = false;
  let hasTopNavDifference = false;

  console.log('Checking the DB data.');

  if (existingSocialLinks) {
    hasSocialDifference = existingSocialLinks.every(({ href, icon, label }, index) => {
      return (
        href !== links[index].href || icon !== links[index].icon || label !== links[index].label
      );
    });
  }

  if (existingTopNavigations) {
    hasTopNavDifference = existingTopNavigations.every(({ href, icon, label }, index) => {
      return (
        href !== topNav[index].href || icon !== topNav[index].icon || label !== topNav[index].label
      );
    });
  }

  if (existingSocialLinks?.length === links.length && !hasSocialDifference) {
    console.log('Social links already exist');
    mongoose.disconnect();

    return;
  } else {
    await SocialLink.deleteMany({});
    await SocialLink.insertMany(links);

    console.log('Added social links');
  }

  if (existingTopNavigations?.length === topNav.length && !hasTopNavDifference) {
    console.log('Top navigations already exist');
    mongoose.disconnect();

    return;
  } else {
    await TopNavigation.deleteMany({});
    await TopNavigation.insertMany(topNav);

    console.log('Added top navigations');
  }

  mongoose.disconnect();
}

module.exports = { seed };
