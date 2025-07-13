const mongoose = require('mongoose');
const connectDB = require('../db');
const TopNavigation = require('../models/TopNavigation');

const links = [
  {
    href: '/',
    icon: 'icon-home',
    label: 'Home',
  },
  {
    href: '/about',
    icon: 'icon-user',
    label: 'About',
  },
  {
    href: '/project',
    icon: 'icon-design',
    label: 'Project',
  },
];

async function seed() {
  await connectDB();
  await TopNavigation.deleteMany({}); // Clear collection before seeding
  await TopNavigation.insertMany(links);
  console.log('Seeded top navigation');
  mongoose.disconnect();
}

seed();
