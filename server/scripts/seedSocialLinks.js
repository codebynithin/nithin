const mongoose = require('mongoose');
const connectDB = require('../db');
const SocialLink = require('../models/SocialLink');

const links = [
  {
    href: 'https://www.linkedin.com/in/nithinvuideveloper',
    icon: 'icon-linkedin2',
    label: 'LinkedIn',
  },
  {
    href: 'https://twitter.com/Nithin_V86',
    icon: 'icon-twitter',
    label: 'Twitter',
  },
  {
    href: 'https://github.com/nithinv86',
    icon: 'icon-github',
    label: 'GitHub',
  },
  {
    href: 'https://stackoverflow.com/users/8904502/nithin-v',
    icon: 'icon-stackoverflow',
    label: 'Stack Overflow',
  },
  {
    href: 'https://www.facebook.com/nithinvuideveloper',
    icon: 'icon-facebook',
    label: 'Facebook',
  },
];

async function seed() {
  await connectDB();
  await SocialLink.deleteMany({}); // Clear collection before seeding
  await SocialLink.insertMany(links);
  console.log('Seeded social links');
  mongoose.disconnect();
}

seed();
