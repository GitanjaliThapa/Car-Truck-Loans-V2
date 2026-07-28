import { useReveal } from '../hooks/useReveal.js';

const directions = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
  none: ''
};

/**
 * Reveal — fades and slides a child into place the first time it scrolls
 * into view. `delay` is in ms, useful for staggering items in a grid.
 */
export default function Reveal({ children, delay = 0, direction = 'up', className = '', as: Tag = 'div' }) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directions[direction]}`} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
