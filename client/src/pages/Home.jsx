import { Link } from 'react-router-dom';
import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import { useScrollY } from '../hooks/useReveal.js';
import {
  IconApproval,
  IconSecurity,
  IconFinance,
  IconSupport,
  IconFast,
  IconCreditCard,
  IconQuestion,
  IconStar
} from '../components/Icons.jsx';

const steps = [
  { mile: '01', title: 'Tell us about you', body: 'A short form, about 3 minutes. No paperwork, no dealership visit yet.' },
  { mile: '02', title: 'We check your rate — softly', body: 'A soft credit check only. It shows what you may qualify for and never touches your score.' },
  { mile: '03', title: 'Talk to our BC team', body: 'One of our local financing specialists calls you within one business day to walk through your options.' }
];

const whyChooseUs = [
  { icon: IconApproval, title: 'Guaranteed approval path', body: 'We work with every credit situation — there is a lender for almost every story.' },
  { icon: IconSecurity, title: 'Your data, protected', body: 'Bank-level encryption and a soft credit check that never touches your score.' },
  { icon: IconFinance, title: 'Real financing partners', body: 'Backed by a network of banks and lenders, not a single one-size offer.' },
  { icon: IconSupport, title: 'A real BC team', body: 'Local specialists who call you back and explain your options in plain language.' },
  { icon: IconFast, title: 'Fast processing', body: 'Most applicants hear back within one business day of applying.' }
];

const stats = [
  { value: '5,000+', label: 'Approvals and counting' },
  { value: '24 hrs', label: 'Typical response time' },
  { value: 'BC-wide', label: 'Across every Legacy Cars store' },
  { value: '100%', label: 'Soft-check applications' }
];

const testimonials = [
  { tag: 'SUV owner, Surrey', quote: 'We walked in unsure we would qualify for anything and drove away in an SUV the same week. The team explained every step.', photo: '/images/customer-2.webp' },
  { tag: 'Family of five, Abbotsford', quote: 'Approved with no credit history and no cosigner. They treated us like people, not a credit score.', photo: '/images/customer-5.webp' },
  { tag: 'First-time buyer, Surrey', quote: 'Fast, friendly, and honest about the numbers up front. Exactly what a first-time buyer needs.', photo: '/images/customer-1.webp' },
  { tag: 'Self-employed, Delta', quote: 'Self-employed and worried financing would be a hassle. It was the easiest part of buying the truck.', photo: '/images/customer-3.webp' }
];

// const gallery = [
//   '/images/customer-1.webp',
//   '/images/customer-2.webp',
//   '/images/customer-4.webp',
//   '/images/customer-3.webp',
//   '/images/customer-5.webp'
// ];

const financeOptions = ['Bad credit', 'No credit history', 'Self-employed', 'Newcomers to Canada', 'Past bankruptcy', 'Past repossession'];

// const partners = ['National Bank Partner', 'Credit Union Network', 'Auto Finance Group', 'Prime Lending Co.'];

const faqs = [
  { q: 'Will this affect my credit score?', a: "No. Getting pre-approved uses a soft credit check, which never impacts your credit score. A hard check only happens later, and only if you choose to move forward with a specific loan." },
  { q: 'What if I have bad credit, or no credit history?', a: 'That is who we built this for. Fair, poor, no credit, past repossession, past bankruptcy — we work with all credit situations across British Columbia.' },
  { q: 'Is there any obligation once I apply?', a: 'None. You will see what you may qualify for and talk it through with our team. You decide if and when to move forward.' },
  { q: 'How is this different from going straight to a dealership?', a: "You get your rate range up front, before you set foot on a lot. That means you're negotiating from a position of knowledge, not guessing." }
];

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-6 text-left hover:bg-blue/5 transition-colors"
      >
        <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${open ? 'bg-blue text-white' : 'bg-blue/10 text-blue'}`}>
          <IconQuestion className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-semibold text-navy flex-1">{item.q}</h3>
        <span className={`text-blue text-2xl leading-none transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="text-slate leading-relaxed px-6 pb-6 pl-[4.25rem]">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const scrollY = useScrollY();

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden text-white bg-navy">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/customer-4.webp"
            alt="A customer picking up a new vehicle at a Legacy Cars store, with a dog along for the ride"
            className="absolute top-0 right-0 h-full w-[80%] max-w-none object-cover"
            style={{ transform: `translateY(${scrollY * 0.08}px) scale(1.02)` }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, #0B1330 0%, #0B1330 32%, rgba(11,19,48,0.55) 46%, rgba(11,19,48,0.05) 62%)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/10" />

        {/* ambient glow accents */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue/25 rounded-full blur-3xl animate-drift" />

        <div className="relative w-full px-6 lg:pl-24 lg:pr-12 py-24 lg:py-0 lg:h-[650px] flex items-center">
          <Reveal className="max-w-[560px]">
            <p className="uppercase tracking-widest text-blue-light text-sm font-semibold mb-4">
              British Columbia &middot; All credit types &middot; A Legacy Cars company
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6 drop-shadow-sm">
              Every credit history
              <br />
              has a road forward.
            </h1>

            <p className="text-white/85 text-lg mb-8">
              Get pre-approved for a car or truck loan in under 3 minutes. Soft credit
              check only — your score stays untouched while you find out what you qualify for.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/apply"
                className="bg-blue hover:bg-blue-dark hover:-translate-y-0.5 hover:shadow-glow text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Get pre-approved
              </Link>
              <span className="text-white/70 text-sm">No obligation &middot; No paperwork today</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-navy text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <p className="text-3xl md:text-4xl font-bold text-blue-light">{s.value}</p>
              <p className="text-white/70 text-sm mt-1">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <div className="w-10 h-1.5 rounded-full shimmer-line mb-5" />
          <h2 className="text-4xl font-bold text-navy mb-2">The route to approval</h2>
          <p className="text-slate mb-14 max-w-xl">
            Three stops between here and driving away in something that works for you.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.mile} delay={i * 120}>
              <div className="relative bg-white rounded-2xl shadow-soft p-7 pt-9 hover:-translate-y-1.5 hover:shadow-lift transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-navy text-blue-light font-mono font-bold flex items-center justify-center mb-5">
                  {step.mile}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-slate leading-relaxed">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Image break / brand statement */}
      <section className="relative py-32 lg:py-40 text-white overflow-hidden">
        <img
          src="/images/customer-5.webp"
          alt="A family picking up their new vehicle at a Legacy Cars dealership"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/75" />
        <Reveal className="relative max-w-2xl mx-auto px-6 text-center">
          <p className="uppercase tracking-widest text-blue-light text-sm font-semibold mb-4">Our promise</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            We treat every application like it belongs to someone we know —
            because in a lot of BC neighbourhoods, it does.
          </h2>
        </Reveal>
      </section>

      {/* Why choose Legacy Cars */}
      <section className="bg-paper py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="w-10 h-1.5 rounded-full shimmer-line mb-5" />
            <h2 className="text-4xl font-bold text-navy mb-2">Why choose Legacy Cars</h2>
            <p className="text-slate mb-14 max-w-xl">
              We built this around the questions BC drivers actually ask us.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
            {whyChooseUs.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="bg-white rounded-2xl shadow-soft p-6 hover:-translate-y-1.5 hover:shadow-glow transition-all h-full">
                  <div className="w-11 h-11 rounded-full bg-blue/10 text-blue flex items-center justify-center mb-4">
                    <Icon />
                  </div>
                  <h3 className="font-bold text-navy mb-1.5">{title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <div className="w-10 h-1.5 rounded-full shimmer-line mb-5" />
          <h2 className="text-4xl font-bold text-navy mb-2">Real customers, real approvals</h2>
          <p className="text-slate mb-14 max-w-xl">
            Photos and stories from drivers who picked up their keys at a Legacy Cars store.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.tag} delay={i * 100}>
              <div className="bg-white rounded-2xl shadow-soft overflow-hidden hover:-translate-y-1.5 hover:shadow-lift transition-all group h-full flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={t.photo}
                    alt={`Customer, ${t.tag}, with their new vehicle`}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex gap-0.5 text-blue mb-3">
                    {Array.from({ length: 5 }).map((_, j) => <IconStar key={j} />)}
                  </div>
                  <p className="text-slate text-sm leading-relaxed mb-3 flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-semibold text-navy text-sm">{t.tag}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery strip — reuses every photo as a filmstrip */}
      {/* <section className="bg-navy py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="mb-8">
            <p className="uppercase tracking-widest text-blue-light text-sm font-semibold">
              Real deliveries, every week
            </p>
          </Reveal>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {gallery.map((src, i) => (
              <Reveal key={src + i} delay={i * 70} className="overflow-hidden rounded-xl aspect-square">
                <img
                  src={src}
                  alt="Legacy Cars customer delivery"
                  className="w-full h-full object-cover hover:scale-110 hover:brightness-110 transition-transform duration-500"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* Finance options */}
      <section className="bg-navy-light text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-2">
              <IconCreditCard className="w-8 h-8 text-blue-light" />
              <h2 className="text-4xl font-bold">Finance options for every situation</h2>
            </div>
            <p className="text-white/70 mb-12 max-w-xl">Whatever brought you here, there's a path through.</p>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {financeOptions.map((opt, i) => (
              <Reveal key={opt} delay={i * 60} direction="none">
                <span className="inline-block bg-white/10 border border-white/15 rounded-full px-5 py-2.5 text-sm font-medium hover:bg-blue hover:border-blue hover:-translate-y-0.5 transition-all cursor-default">
                  {opt}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted finance partners */}
      {/* <section className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <p className="text-center uppercase tracking-widest text-xs font-semibold text-slate mb-8">
            Backed by a network of trusted lending partners
          </p>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {partners.map((p, i) => (
            <Reveal key={p} delay={i * 80}>
              <div className="flex items-center justify-center text-center h-20 rounded-xl border border-navy/10 bg-white shadow-soft text-slate text-sm font-semibold px-4 hover:shadow-lift hover:-translate-y-1 transition-all">
                {p}
              </div>
            </Reveal>
          ))}
        </div>
      </section> */}

      {/* FAQ */}
      <section id="faq" className="bg-paper py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <div className="w-10 h-1.5 rounded-full shimmer-line mb-5" />
            <h2 className="text-4xl font-bold text-navy mb-10">Questions, answered</h2>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 80}>
                <FaqItem item={item} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA banner */}
      <section className="relative py-28 text-white overflow-hidden">
        <img
          src="/images/customer-1.webp"
          alt="A happy customer picking up their new vehicle at a Legacy Cars store"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue/20 rounded-full blur-3xl animate-drift" />
        <Reveal className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Ready to get behind the wheel?</h2>
          <p className="text-white/85 mb-8 text-lg">
            Three minutes now could mean driving away this week.
          </p>
          <Link
            to="/apply"
            className="inline-block bg-blue hover:bg-blue-dark hover:-translate-y-0.5 hover:shadow-glow text-white font-semibold px-9 py-4 rounded-xl text-lg transition-all"
          >
            Start my application
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
