import { Link } from 'react-router-dom';

export default function Button({ children, href, onClick, className = '' }) {
  const content = (
    <>
      <span className="btn-text">{children}</span>
      <span className="btn-icon" aria-hidden="true">
        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
        </svg>
      </span>
    </>
  );

  if (href?.includes('#') || href?.startsWith('http') || href?.startsWith('mailto') || href?.startsWith('tel')) {
    return (
      <a href={href} className={`btn-primary ${className}`}>
        {content}
      </a>
    );
  }

  if (href?.startsWith('/')) {
    return (
      <Link to={href} className={`btn-primary ${className}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`btn-primary ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`btn-primary ${className}`}>
      {content}
    </button>
  );
}
