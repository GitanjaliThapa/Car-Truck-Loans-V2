import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/api.js';
import { IconUser, IconBriefcase, IconCar, IconCheck, IconSecurity, IconApproval } from '../components/Icons.jsx';

const initialForm = {
  firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '',
  city: '', postalCode: '', employmentStatus: '', monthlyIncome: '',
  creditSituation: '', vehicleType: '', downPayment: '',
  consentContact: false, consentSoftCheck: false
};

const TOTAL_STEPS = 3;

const stepMeta = [
  { icon: IconUser, label: 'About you', caption: 'Basic contact details' },
  { icon: IconBriefcase, label: 'Income', caption: 'Where you stand financially' },
  { icon: IconCar, label: 'Your loan', caption: 'What you are looking for' }
];

export default function Apply() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  function validateStep(current) {
    if (current === 1) {
      if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.dateOfBirth) {
        return 'Please fill in every field before continuing.';
      }
    }
    if (current === 2) {
      if (!form.city || !form.postalCode || !form.employmentStatus || !form.monthlyIncome) {
        return 'Please fill in every field before continuing.';
      }
    }
    return '';
  }

  function next() {
    const err = validateStep(step);
    if (err) return setError(err);
    setError('');
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function back() {
    setError('');
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.creditSituation || !form.vehicleType) {
      return setError('Please fill in every field before continuing.');
    }
    if (!form.consentContact || !form.consentSoftCheck) {
      return setError('Please check both boxes below so we can process your application.');
    }
    setSubmitting(true);
    setError('');
    try {
      await api.submitLead({
        ...form,
        monthlyIncome: Number(form.monthlyIncome),
        downPayment: Number(form.downPayment) || 0,
        consentContact: String(form.consentContact),
        consentSoftCheck: String(form.consentSoftCheck)
      });
      navigate('/thank-you');
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-paper">
      <div className="grid lg:grid-cols-[380px_1fr] min-h-screen">
        {/* Sidebar */}
        <aside className="relative bg-navy text-white px-8 py-12 lg:py-16 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue/20 rounded-full blur-3xl animate-drift" />
          <div className="relative">
            <p className="font-display font-bold text-2xl mb-1">
              Car Truck <span className="text-blue-light">Loans</span>
            </p>
            <p className="text-white/70 text-sm mb-10">
              Soft credit check only. Takes about 3 minutes.
            </p>

            <ol className="space-y-6">
              {stepMeta.map((s, i) => {
                const n = i + 1;
                const state = n < step ? 'done' : n === step ? 'active' : 'todo';
                const Icon = s.icon;
                return (
                  <li key={s.label} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          state === 'done'
                            ? 'bg-blue text-white'
                            : state === 'active'
                            ? 'bg-white text-navy shadow-glow'
                            : 'bg-white/10 text-white/50'
                        }`}
                      >
                        {state === 'done' ? <IconCheck className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                      </div>
                      {n < TOTAL_STEPS && (
                        <div className={`w-px h-8 mt-2 transition-colors duration-300 ${n < step ? 'bg-blue' : 'bg-white/15'}`} />
                      )}
                    </div>
                    <div className="pt-1.5">
                      <p className={`font-semibold transition-colors ${state === 'todo' ? 'text-white/50' : 'text-white'}`}>
                        {s.label}
                      </p>
                      <p className="text-xs text-white/50">{s.caption}</p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="mt-12 pt-8 border-t border-white/10 space-y-3">
              <p className="flex items-center gap-2.5 text-sm text-white/70">
                <IconSecurity className="w-4 h-4 text-blue-light" /> Bank-level encrypted application
              </p>
              <p className="flex items-center gap-2.5 text-sm text-white/70">
                <IconApproval className="w-4 h-4 text-blue-light" /> Soft check — your score stays untouched
              </p>
            </div>
          </div>
        </aside>

        {/* Form panel */}
        <div className="flex items-center justify-center px-6 py-14 lg:py-0">
          <div className="w-full max-w-lg">
            <h1 className="text-3xl font-bold text-navy mb-1">Get pre-approved</h1>
            <p className="text-slate mb-8">Step {step} of {TOTAL_STEPS} &middot; {stepMeta[step - 1].label}</p>

            {/* progress bar (mobile-friendly companion to the sidebar steps) */}
            <div className="relative h-1.5 bg-navy/10 rounded-full overflow-hidden mb-8 lg:hidden">
              <div
                className="absolute inset-y-0 left-0 bg-blue rounded-full transition-all duration-500"
                style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 mb-6 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div key={step} className="animate-step space-y-5">
                {step === 1 && (
                  <fieldset className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="First name">
                        <input className={inputClass} value={form.firstName} onChange={update('firstName')} />
                      </Field>
                      <Field label="Last name">
                        <input className={inputClass} value={form.lastName} onChange={update('lastName')} />
                      </Field>
                    </div>
                    <Field label="Email">
                      <input type="email" className={inputClass} value={form.email} onChange={update('email')} />
                    </Field>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Phone">
                        <input type="tel" className={inputClass} value={form.phone} onChange={update('phone')} />
                      </Field>
                      <Field label="Date of birth">
                        <input type="date" className={inputClass} value={form.dateOfBirth} onChange={update('dateOfBirth')} />
                      </Field>
                    </div>
                  </fieldset>
                )}

                {step === 2 && (
                  <fieldset className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="City (BC)">
                        <input className={inputClass} value={form.city} onChange={update('city')} />
                      </Field>
                      <Field label="Postal code">
                        <input className={inputClass} value={form.postalCode} onChange={update('postalCode')} />
                      </Field>
                    </div>
                    <Field label="Employment status">
                      <select className={inputClass} value={form.employmentStatus} onChange={update('employmentStatus')}>
                        <option value="">Select one</option>
                        <option value="employed">Employed</option>
                        <option value="self-employed">Self-employed</option>
                        <option value="benefits">On benefits / EI</option>
                        <option value="retired">Retired</option>
                        <option value="other">Other</option>
                      </select>
                    </Field>
                    <Field label="Gross monthly income ($ CAD)">
                      <input type="number" min="0" className={inputClass} value={form.monthlyIncome} onChange={update('monthlyIncome')} />
                    </Field>
                  </fieldset>
                )}

                {step === 3 && (
                  <fieldset className="space-y-5">
                    <Field label="How would you describe your credit?">
                      <select className={inputClass} value={form.creditSituation} onChange={update('creditSituation')}>
                        <option value="">Select one</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="poor">Poor / past issues</option>
                        <option value="no-credit">No credit history</option>
                        <option value="not-sure">Not sure</option>
                      </select>
                    </Field>
                    <Field label="What are you looking for?">
                      <select className={inputClass} value={form.vehicleType} onChange={update('vehicleType')}>
                        <option value="">Select one</option>
                        <option value="car">Car</option>
                        <option value="truck">Truck</option>
                        <option value="suv">SUV</option>
                        <option value="van">Van</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </Field>
                    <Field label="Down payment available ($ CAD, optional)">
                      <input type="number" min="0" className={inputClass} value={form.downPayment} onChange={update('downPayment')} />
                    </Field>

                    <div className="space-y-3 pt-2">
                      <label className="flex items-start gap-3 text-sm text-slate bg-blue/5 rounded-xl p-4 cursor-pointer hover:bg-blue/10 transition-colors">
                        <input type="checkbox" className="mt-1 accent-blue" checked={form.consentSoftCheck} onChange={update('consentSoftCheck')} />
                        I consent to a soft credit check to determine pre-approval options. This will not affect my credit score.
                      </label>
                      <label className="flex items-start gap-3 text-sm text-slate bg-blue/5 rounded-xl p-4 cursor-pointer hover:bg-blue/10 transition-colors">
                        <input type="checkbox" className="mt-1 accent-blue" checked={form.consentContact} onChange={update('consentContact')} />
                        I consent to being contacted by Car Truck Loans by phone, text, or email about my application.
                      </label>
                    </div>
                  </fieldset>
                )}
              </div>

              <div className="flex justify-between pt-2">
                {step > 1 ? (
                  <button type="button" onClick={back} className="px-6 py-3 rounded-xl font-semibold text-navy hover:bg-navy/5 transition-colors">
                    Back
                  </button>
                ) : <span />}

                {step < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={next}
                    className="px-8 py-3 rounded-xl font-semibold bg-navy hover:bg-navy-light hover:-translate-y-0.5 hover:shadow-lift text-white transition-all"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-8 py-3 rounded-xl font-semibold bg-blue hover:bg-blue-dark hover:-translate-y-0.5 hover:shadow-glow text-white transition-all disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {submitting ? 'Submitting…' : 'Submit application'}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputClass = 'w-full border border-navy/15 rounded-xl px-4 py-3 bg-white focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-shadow';

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-navy mb-1.5">{label}</span>
      {children}
    </label>
  );
}
