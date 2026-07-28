// Small, hand-drawn-style stroke icons used across the homepage.
// Kept as one file so the rest of the app stays dependency-free.

const base = 'w-6 h-6';

export function IconApproval(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className || base}>
      <path d="M9 12.5l2.2 2.2L16 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconSecurity(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className || base}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9.5 12l1.8 1.8L14.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFinance(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className || base}>
      <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10.5h18" stroke="currentColor" strokeWidth="2" />
      <path d="M7 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconSupport(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className || base}>
      <path d="M4 12a8 8 0 1116 0" stroke="currentColor" strokeWidth="2" />
      <path d="M4 12v3a2 2 0 002 2h1v-6H5a1 1 0 00-1 1z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 12v3a2 2 0 01-2 2h-1v-6h1a1 1 0 011 1z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFast(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className || base}>
      <path d="M13 3L5 13.5h5L11 21l8-10.5h-5L13 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCreditCard(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className || base}>
      <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10.5h18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconQuestion(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className || base}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M9.5 9.3a2.5 2.5 0 114.2 2c-.6.7-1.7 1-1.7 2.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="17" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function IconStar(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={props.className || 'w-4 h-4'}>
      <path d="M10 1.5l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L1.4 7.8l6-.7L10 1.5z" />
    </svg>
  );
}

export function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className || base}>
      <path d="M6 3h3l1.5 4L8 9c1 3 3 5 6 6l2-2.5 4 1.5v3c0 1.1-.9 2-2 2C10.5 19 5 13.5 4 6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className || base}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className || base}>
      <path d="M12 21s7-6.4 7-11.5A7 7 0 105 9.5C5 14.6 12 21 12 21z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className || base}>
      <path d="M14 9h2.5V6H14c-1.9 0-3.3 1.5-3.3 3.4V11H9v3h1.7v6h3v-6h2.2l.4-3h-2.6V9.7c0-.5.3-.7.7-.7z" />
    </svg>
  );
}

export function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className || base}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function IconGoogle(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className || base}>
      <path fill="#4285F4" d="M21.6 12.2c0-.7-.06-1.4-.19-2H12v3.8h5.4a4.6 4.6 0 01-2 3v2.5h3.2c1.9-1.8 3-4.3 3-7.3z" />
      <path fill="#34A853" d="M12 22c2.6 0 4.8-.9 6.4-2.4l-3.2-2.5c-.9.6-2 1-3.2 1a5.8 5.8 0 01-5.5-4H3.2v2.6A10 10 0 0012 22z" />
      <path fill="#FBBC05" d="M6.5 14.1a5.9 5.9 0 010-4.2V7.3H3.2a10 10 0 000 9.4l3.3-2.6z" />
      <path fill="#EA4335" d="M12 6c1.4 0 2.7.5 3.6 1.4l2.8-2.8A9.7 9.7 0 0012 2 10 10 0 003.2 7.3l3.3 2.6A5.8 5.8 0 0112 6z" />
    </svg>
  );
}

export function IconUser(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className || base}>
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
      <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconBriefcase(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className || base}>
      <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 13h18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconCar(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className || base}>
      <path d="M4 16l1.5-5A2 2 0 017.4 9.5h9.2a2 2 0 011.9 1.5L20 16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <rect x="3" y="16" width="18" height="4" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="7.5" cy="20" r="1.3" fill="currentColor" />
      <circle cx="16.5" cy="20" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function IconCheck(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className || base}>
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
