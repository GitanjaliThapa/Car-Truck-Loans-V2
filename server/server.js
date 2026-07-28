require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const leadRoutes = require('./routes/leads');

const app = express();
app.set('trust proxy', 1);

connectDB();

const allowedOrigins = (process.env.CLIENT_ORIGIN || '').split(',').map((s) => s.trim());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true
  })
);
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes);

// Fallback error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Unexpected server error.' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Car Truck Loans API running on port ${PORT}`));
