import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="route-line w-24 mb-8" />
      <h1 className="text-4xl font-bold text-navy mb-6">Terms of Service</h1>
      <div className="space-y-6 text-slate leading-relaxed">
        <p>
          By submitting an application through Car Truck Loans, a Legacy Cars company,
          you confirm that the information you provide is accurate and that you are
          requesting a financing pre-approval assessment for a vehicle purchase in
          British Columbia.
        </p>
        <p>
          A pre-approval is not a guarantee of financing. Final approval, interest
          rate, and loan terms are determined solely by the lending partner reviewing
          your application, and may differ from the initial estimate you receive.
        </p>
        <p>
          Applying through this site uses a soft credit check only and carries no
          obligation to proceed. You are free to decline any offer presented to you
          without cost or penalty.
        </p>
        <p>
          Legacy Cars and its financing partners are not responsible for decisions
          made based on estimates shown before a full application review. For
          questions about these terms, contact us at{' '}
          <a href="mailto:info@legacycars.com" className="text-navy font-semibold hover:text-blue-dark">
            info@legacycars.com
          </a>.
        </p>
      </div>
      <Link to="/" className="inline-block mt-10 text-navy font-semibold hover:text-blue-dark transition-colors">
        &larr; Back to home
      </Link>
    </div>
  );
}
