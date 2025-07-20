const mongoose = require('mongoose');
const connectDB = require('../db');
const SocialLink = require('../models/SocialLink');

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

async function seed() {
  await connectDB();
  await SocialLink.deleteMany({}); // Clear collection before seeding
  await SocialLink.insertMany(links);
  console.log('Seeded social links');
  mongoose.disconnect();
}

seed();
