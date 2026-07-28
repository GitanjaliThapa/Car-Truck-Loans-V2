import { Link } from 'react-router-dom';
import { IconPhone, IconMail, IconPin, IconFacebook, IconInstagram, IconGoogle, IconSecurity, IconApproval } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="route-line w-24 opacity-70 mb-10" />

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="font-display font-bold text-xl text-white mb-3">
              Car Truck <span className="text-blue-light">Loans</span>
            </p>
            <p className="text-sm leading-relaxed max-w-xs">
              A Legacy Cars company connecting British Columbia drivers with financing
              partners for new and used vehicles.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Contact</p>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5">
                <IconPhone className="w-4 h-4 text-blue-light" />
                <a href="tel:778-900-8572 " className="hover:text-blue-light transition-colors">778-900-8572</a>
              </li>
              <li className="flex items-center gap-2.5">
                <IconMail className="w-4 h-4 text-blue-light" />
                <a href="mailto:sales@legacycars.com" className="hover:text-blue-light transition-colors">sales@legacycars.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <IconPin className="w-4 h-4 text-blue-light" />
                <span>Serving stores across British Columbia</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Quick links</p>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#how-it-works" className="hover:text-blue-light transition-colors">How it works</a></li>
              <li><a href="/#faq" className="hover:text-blue-light transition-colors">FAQ</a></li>
              <li><Link to="/apply" className="hover:text-blue-light transition-colors">Get pre-approved</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Follow us</p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/share/1CXzBCcnbY/?mibextid=wwXIfr" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue hover:text-white transition-colors">
                <IconFacebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/legacycars_surrey" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue hover:text-white transition-colors">
                <IconInstagram className="w-4 h-4" />
              </a>
              <a href="https://share.google/70VWzCOMQWE50oLA0" aria-label="Google" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue hover:text-white transition-colors">
                <IconGoogle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-10 pt-8 border-t border-white/10">
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs">
            <IconSecurity className="w-4 h-4 text-blue-light" /> Secure &amp; encrypted application
          </span>
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs">
            <IconApproval className="w-4 h-4 text-blue-light" /> Soft credit check only
          </span>
        </div>

        <p className="text-xs leading-relaxed max-w-2xl mb-6">
          Car Truck Loans connects British Columbia drivers with financing partners for
          new and used vehicles. Getting pre-approved uses a soft credit check only and
          will not affect your credit score. This is not a guarantee of financing;
          final approval, rate, and terms are determined by the lender.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs">
          <p>&copy; {new Date().getFullYear()} Car Truck Loans. Serving British Columbia.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-blue-light transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-light transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
