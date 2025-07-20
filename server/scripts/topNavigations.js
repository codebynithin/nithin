const mongoose = require('mongoose');
const connectDB = require('../db');
const TopNavigation = require('../models/TopNavigation');
const links = [
  { href: '/about', icon: 'cbn-user', label: 'About' },
  { href: '/portfolio', icon: 'cbn-portfolio', label: 'Portfolio' },
  { href: '/service', icon: 'cbn-service', label: 'Service' },
];

async function seed() {
  await connectDB();
  await TopNavigation.deleteMany({}); // Clear collection before seeding
  await TopNavigation.insertMany(links);

  console.log('Seeded top navigation');
  mongoose.disconnect();
}

seed();
