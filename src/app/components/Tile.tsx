import { useState } from 'react';

interface SubLink {
  label: string;
  href: string;
}

interface TileProps {
  id: string;
  label: string;
  size: 'small' | 'wide' | 'tall' | 'large';
  color: string;
  subLinks?: SubLink[];
  index: number;
  onClick?: () => void;
}



export default function Tile({
  id,
  label,
  size,
  color,
  subLinks,
  index,
  onClick
}: TileProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const hasSubLinks = subLinks && subLinks.length > 0;

  const handleClick = () => {
    if (hasSubLinks) {
      setIsExpanded(!isExpanded);
    }
    onClick?.();
  };

  return (
    <button
      className={`puzzle-tile tile-${size} ${isExpanded ? 'expanded' : ''} ${hasSubLinks ? 'has-sublinks' : ''}`}
      style={{
        '--tile-color': color,
        '--animation-delay': `${index * 0.05}s`,
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="tile-content">
        <span className="tile-label" style={{ fontFamily: "'Manrope', sans-serif" }}>
          {label}
        </span>

        {hasSubLinks && (
          <div
            className="sub-links"
            style={{
              opacity: isExpanded ? 1 : 0,
              pointerEvents: isExpanded ? 'auto' : 'none',
            }}
          >
            {subLinks.map((subLink, idx) => (
              <a
                key={idx}
                href={subLink.href}
                className="sub-link"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  '--sub-delay': `${idx * 0.1}s`,
                } as React.CSSProperties}
                onClick={(e) => e.stopPropagation()}
              >
                {subLink.label}
              </a>
            ))}
          </div>
        )}

        {hasSubLinks && (
          <div className="expand-indicator">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      <div
        className="tile-hover-effect"
        style={{
          opacity: isHovered || isExpanded ? 1 : 0,
          backgroundColor: color
        }}
      />
    </button>
  );
}
