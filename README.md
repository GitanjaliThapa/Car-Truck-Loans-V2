# Car Truck Loans — MERN Lead Generation Site (BC, Canada)

A lead-capture site for your dealership's own vehicle financing applications.
Built per your CEO's direction: BC-only, leads stay in-house (no resale),
mirrors the standard industry funnel (short form → soft-check messaging →
human follow-up) identified in the market research.

## What's in this repo

```
car-truck-loans/
├── server/     Node + Express + MongoDB API
└── client/     React + Vite + Tailwind frontend
```

**Backend**
- Public `POST /api/leads` — application submissions, rate-limited and validated
- Admin-only `GET /api/leads`, `PATCH /api/leads/:id`, `GET /api/leads/export.csv`
- JWT-based admin login (`POST /api/auth/login`)
- Mongoose models for `Lead` and `Admin`

**Frontend**
- Landing page (hero, "route to approval" explainer, trust strip, FAQ)
- 3-step application form with a progress tracker
- Thank-you page
- Admin login + dashboard (filter by status, update status, export CSV)

## Design direction

Rather than a generic fintech blue-and-gradient look, the brand is built
around **"the road forward"**:

| Token | Value | Use |
|---|---|---|
| Forest (BC evergreen) | `#1F3A2E` | Primary brand color, header, buttons |
| Amber (highway marker) | `#E8A33D` | CTA accent, progress indicator |
| Cream | `#F6F3EC` | Background |
| Ink | `#16211C` | Body text |
| Slate | `#5C6B63` | Secondary text |

- **Display type:** Barlow Condensed (bold, highway-signage feel for headings)
- **Body type:** Inter
- **Data/utility type:** IBM Plex Mono (used sparingly, e.g. step labels)
- **Signature element:** the *route line* — a dashed highway-line motif used
  as the application form's progress tracker and as a recurring graphic
  element. It ties directly to the subject (a loan is a journey; BC is
  highway country) instead of being decoration.

Copy is written to reassure a credit-anxious audience per the compliance
notes in your research doc: soft-check language is front and center, no
pressure/urgency tactics, plain explanations of what happens next.

---

## 1. Local setup

### Prerequisites
- Node.js 18+ and npm
- A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account (or local MongoDB for testing)

### Backend

```bash
cd server
npm install
cp .env.example .env
```

Edit `.env`:
- `MONGO_URI` — from Atlas (Database → Connect → Drivers), or `mongodb://localhost:27017/cartruckloans` for local testing
- `JWT_SECRET` — any long random string (e.g. run `openssl rand -hex 32`)
- `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD` — your first dashboard login

Create your admin login, then start the API:

```bash
node seedAdmin.js
npm run dev
```

API runs at `http://localhost:5001`. Visit `http://localhost:5001/api/health` to confirm it's up.

### Frontend

```bash
cd client
npm install
npm run dev
```

Site runs at `http://localhost:5173`. The app auto-detects the API at
`http://localhost:5001` in development. To point it elsewhere, create
`client/.env` with:

```
VITE_API_URL=http://localhost:5001
```

### Try it end to end
1. Go to `http://localhost:5173/apply` and submit a test application.
2. Go to `http://localhost:5173/admin/login` and sign in with your seeded admin.
3. See the application on the dashboard, change its status, export as CSV.

---

## 2. Getting leads into a Google Sheet (today, without new code)

The **Export CSV** button on the dashboard downloads all applications as a
CSV file at any time — open it directly in Google Sheets via File → Import,
or set up a recurring manual import. This satisfies "leads reach the team"
immediately with zero extra infrastructure.

**Path to full automation later**, when you're ready:
- Add a scheduled job (e.g. a cron endpoint hit by [cron-job.org](https://cron-job.org) or a
  Render Cron Job) that calls a new `/api/leads/sync-sheet` route using the
  [Google Sheets API](https://developers.google.com/sheets/api) with a
  service account.
- Or connect [Zapier](https://zapier.com)/[Make](https://www.make.com) to poll
  `GET /api/leads` and push new rows into Sheets or your CRM automatically.
- Or, when you settle on a CRM, replace the Sheets step with a direct
  webhook POST from `POST /api/leads` so new applications land in the CRM
  the instant they're submitted.

Building the CSV export now means whichever direction you choose later,
the data shape is already correct.

---

## 3. Deployment

**Recommended stack:** MongoDB Atlas (database) + Render (API) + Vercel (frontend).
This combination requires no server maintenance, has a free tier suitable
for launch traffic, and is the standard low-ops deploy for a MERN app like
this one.

### Step 1 — MongoDB Atlas
1. Create a free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas/register).
2. Database Access → add a database user with a strong password.
3. Network Access → allow access from anywhere (`0.0.0.0/0`) — Render's IPs aren't static.
4. Get your connection string from Connect → Drivers. This is your production `MONGO_URI`.

### Step 2 — Backend on Render
1. Push this repo to GitHub.
2. In [Render](https://render.com), New → Web Service → connect your repo, set root directory to `server`.
3. Build command: `npm install`. Start command: `npm start`.
4. Add environment variables: `MONGO_URI`, `JWT_SECRET`, `CLIENT_ORIGIN` (your future Vercel URL), `SEED_ADMIN_EMAIL`, `SEED_ADMIN_PASSWORD`.
5. Deploy. Once live, use Render's Shell tab to run `node seedAdmin.js` once to create your admin login.
6. Note your API URL, e.g. `https://car-truck-loans-api.onrender.com`.

### Step 3 — Frontend on Vercel
1. In [Vercel](https://vercel.com), New Project → import the same repo, set root directory to `client`.
2. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
3. Add environment variable `VITE_API_URL` = your Render API URL from Step 2.
4. Deploy. Vercel gives you a URL like `https://car-truck-loans.vercel.app`.
5. Go back to Render and update `CLIENT_ORIGIN` to this exact Vercel URL, then redeploy the backend so CORS allows it.

### Step 4 — Custom domain
Once you have a domain (e.g. `cartruckloans.ca`):
- Point it at Vercel for the main site (Vercel's dashboard walks you through DNS records).
- Optionally add a subdomain like `api.cartruckloans.ca` pointed at Render for the backend, and update `VITE_API_URL` / `CLIENT_ORIGIN` accordingly.

### Step 5 — Go live checklist
- [ ] Real logo/brand assets in place if you want to replace the text wordmark
- [ ] Privacy policy + terms page (lending sites should have these — check with legal per the compliance notes in the research doc)
- [ ] Confirm TCPA-style consent and soft-check language reviewed by whoever handles compliance
- [ ] Change `SEED_ADMIN_PASSWORD` to something strong before seeding production
- [ ] Test the full funnel on the live URLs before sharing publicly

---

## 4. Where to go next
- Add more admin accounts by running `seedAdmin.js` with different env values, or build a simple "invite teammate" flow later.
- Add email notifications (e.g. via [Resend](https://resend.com) or [SendGrid](https://sendgrid.com)) so your team gets pinged the moment a lead comes in, instead of checking the dashboard.
- If lead volume grows, segment landing pages by credit tier as the research doc recommends (near-prime vs. subprime vs. deep subprime), each with tuned messaging.
