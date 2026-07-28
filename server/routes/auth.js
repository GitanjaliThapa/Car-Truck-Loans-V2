const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
const Admin = require('../models/Admin');

const router = express.Router();

// Slow down brute-force login attempts
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many login attempts. Try again in 15 minutes.' }
});

router.post(
  '/login',
  loginLimiter,
  [
    body('email').isEmail().withMessage('Enter a valid email address.'),
    body('password').notEmpty().withMessage('Password is required.')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { email, password } = req.body;

    try {
      const admin = await Admin.findOne({ email: email.toLowerCase() });
      if (!admin) {
        return res.status(401).json({ error: 'Incorrect email or password.' });
      }

      const valid = await bcrypt.compare(password, admin.passwordHash);
      if (!valid) {
        return res.status(401).json({ error: 'Incorrect email or password.' });
      }

      const token = jwt.sign(
        { id: admin._id, email: admin.email, name: admin.name },
        process.env.JWT_SECRET,
        { expiresIn: '8h' }
      );

      res.json({ token, name: admin.name, email: admin.email });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong logging in. Try again.' });
    }
  }
);

module.exports = router;
