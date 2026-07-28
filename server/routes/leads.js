const express = require('express');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
const Lead = require('../models/Lead');
const { requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Prevent form-spam / bot abuse on the public endpoint
const submitLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 20,
  message: { error: 'Too many applications submitted from this connection. Please try again later.' }
});

const leadValidation = [
  body('firstName').trim().notEmpty().withMessage('First name is required.'),
  body('lastName').trim().notEmpty().withMessage('Last name is required.'),
  body('email').isEmail().withMessage('Enter a valid email address.'),
  body('phone').trim().isLength({ min: 10 }).withMessage('Enter a valid phone number.'),
  body('dateOfBirth').notEmpty().withMessage('Date of birth is required.'),
  body('city').trim().notEmpty().withMessage('City is required.'),
  body('postalCode').trim().notEmpty().withMessage('Postal code is required.'),
  body('employmentStatus')
    .isIn(['employed', 'self-employed', 'benefits', 'retired', 'other'])
    .withMessage('Select an employment status.'),
  body('monthlyIncome').isFloat({ min: 0 }).withMessage('Enter your monthly income.'),
  body('creditSituation')
    .isIn(['good', 'fair', 'poor', 'no-credit', 'not-sure'])
    .withMessage('Select your credit situation.'),
  body('vehicleType')
    .isIn(['car', 'truck', 'suv', 'van', 'not-sure'])
    .withMessage('Select a vehicle type.'),
  body('consentContact').equals('true').withMessage('You must consent to being contacted.'),
  body('consentSoftCheck').equals('true').withMessage('You must consent to a soft credit check.')
];

// PUBLIC: submit a new application from the site
router.post('/', submitLimiter, leadValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  try {
    const lead = await Lead.create({
      ...req.body,
      consentContact: true,
      consentSoftCheck: true
    });
    res.status(201).json({ id: lead._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not submit your application. Please try again.' });
  }
});

// ADMIN: list all leads, newest first, with optional status filter
router.get('/', requireAdmin, async (req, res) => {
  try {
    const filter = req.query.status ? { status: req.query.status } : {};
    const leads = await Lead.find(filter).sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load applications.' });
  }
});

// ADMIN: export all leads as CSV (import into Google Sheets today; swap for
// a live Sheets/CRM sync later by calling the same query on a schedule)
router.get('/export.csv', requireAdmin, async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).lean();

    const columns = [
      'createdAt', 'firstName', 'lastName', 'email', 'phone', 'dateOfBirth',
      'city', 'postalCode', 'employmentStatus', 'monthlyIncome',
      'creditSituation', 'vehicleType', 'downPayment', 'status', 'notes'
    ];

    const escape = (val) => `"${String(val ?? '').replace(/"/g, '""')}"`;
    const header = columns.join(',');
    const rows = leads.map((lead) => columns.map((col) => escape(lead[col])).join(','));
    const csv = [header, ...rows].join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="leads.csv"');
    res.send(csv);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not export applications.' });
  }
});

// ADMIN: update a lead's status/notes
router.patch('/:id', requireAdmin, async (req, res) => {
  try {
    const { status, notes } = req.body;
    const update = {};
    if (status) update.status = status;
    if (notes !== undefined) update.notes = notes;

    const lead = await Lead.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!lead) return res.status(404).json({ error: 'Application not found.' });
    res.json(lead);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not update application.' });
  }
});

module.exports = router;
