import { Link } from 'react-router-dom';
import { IconCheck } from '../components/Icons.jsx';

export default function ThankYou() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <div className="w-16 h-16 rounded-full bg-blue/10 text-blue flex items-center justify-center mx-auto mb-6">
        <IconCheck className="w-8 h-8" />
      </div>
      <h1 className="text-4xl font-bold text-navy mb-4">You're on the road.</h1>
      <p className="text-slate text-lg leading-relaxed mb-10">
        Your application is in. A financing specialist from our British Columbia team
        will call or email you within one business day to walk through what you
        qualify for. No obligation, and your credit score hasn't been touched.
      </p>
      <Link
        to="/"
        className="inline-block bg-navy hover:bg-navy-light hover:-translate-y-0.5 hover:shadow-lift text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
      >
        Back to home
      </Link>
    </div>
  );
}
