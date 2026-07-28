import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="route-line w-24 mb-8" />
      <h1 className="text-4xl font-bold text-navy mb-6">Privacy Policy</h1>
      <div className="space-y-6 text-slate leading-relaxed">
        <p>
          Car Truck Loans, a Legacy Cars company, collects the information you submit
          through our pre-approval form — including your name, contact details, and
          basic financial information — solely to match you with financing partners
          across our British Columbia dealership network.
        </p>
        <p>
          Getting pre-approved uses a soft credit check only, which does not affect
          your credit score. We share your application details with lending partners
          strictly for the purpose of assessing your financing options, and we do not
          sell your information to third parties.
        </p>
        <p>
          Your data is stored securely and retained only as long as needed to process
          your application and provide ongoing support. You can request a copy of your
          information or ask us to delete it at any time by contacting us.
        </p>
        <p>
          If you have questions about how your information is handled, reach out at{' '}
          <a href="mailto:sales@legacycars.com" className="text-navy font-semibold hover:text-blue-dark">
            sales@legacycars.com
          </a>{' '}
          or call{' '}
          <a href="tel:778-900-8572 " className="text-navy font-semibold hover:text-blue-dark">
            778-900-8572
          </a>.
        </p>
      </div>
      <Link to="/" className="inline-block mt-10 text-navy font-semibold hover:text-blue-dark transition-colors">
        &larr; Back to home
      </Link>
    </div>
  );
}
