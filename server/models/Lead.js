const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema(
  {
    // Step 1: About you
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    dateOfBirth: { type: String, required: true },

    // Step 2: Where you live + work
    city: { type: String, required: true, trim: true },
    postalCode: { type: String, required: true, trim: true },
    employmentStatus: {
      type: String,
      enum: ['employed', 'self-employed', 'benefits', 'retired', 'other'],
      required: true
    },
    monthlyIncome: { type: Number, required: true },

    // Step 3: What you're looking for
    creditSituation: {
      type: String,
      enum: ['good', 'fair', 'poor', 'no-credit', 'not-sure'],
      required: true
    },
    vehicleType: {
      type: String,
      enum: ['car', 'truck', 'suv', 'van', 'not-sure'],
      required: true
    },
    downPayment: { type: Number, default: 0 },

    // Consent (TCPA-style + credit check disclosure per compliance notes)
    consentContact: { type: Boolean, required: true },
    consentSoftCheck: { type: Boolean, required: true },

    // Internal tracking
    status: {
      type: String,
      enum: ['new', 'contacted', 'in-progress', 'approved', 'declined', 'closed'],
      default: 'new'
    },
    notes: { type: String, default: '' },
    source: { type: String, default: 'website' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Lead', LeadSchema);
