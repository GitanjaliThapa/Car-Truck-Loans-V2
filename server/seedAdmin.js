// One-time script to create your first admin dashboard login.
// Run with: node seedAdmin.js
require('dotenv').config();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Admin = require('./models/Admin');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  const email = process.env.SEED_ADMIN_EMAIL;
  const password = process.env.SEED_ADMIN_PASSWORD;

  const existing = await Admin.findOne({ email });
  if (existing) {
    console.log(`Admin ${email} already exists. Nothing to do.`);
    process.exit(0);
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await Admin.create({ email, passwordHash, name: 'Admin' });

  console.log(`Admin account created: ${email}`);
  console.log('You can now log in at /admin/login with this email and the password from your .env file.');
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
