import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import CircularNavigation from './components/CircularNavigation';
import EmployeesRoute from './components/EmployeesRoute';
import HelpDialog from './components/HelpDialog';
import MenuButton from './components/MenuButton';
import Notifications, { SAMPLE_NOTIFICATIONS } from './components/Notifications';

interface SubLink {
  label: string;
  href: string;
}

interface Tile {
  id: string;
  label: string;
  size: 'small' | 'wide' | 'tall' | 'large';
  color: string;
  subLinks?: SubLink[];
}

const TILES: Tile[] = [
  { id: 'employees', label: 'Pracownicy', size: 'large', color: '#E74C3C' },
  {
    id: 'port-reports',
    label: 'Raporty portów',
    size: 'tall',
    color: '#E67E22',
    subLinks: [
      { label: 'Port Gdańsk', href: '#gdansk' },
      { label: 'Port Gdynia', href: '#gdynia' },
    ],
  },
  {
    id: 'documents',
    label: 'Dokumenty',
    size: 'small',
    color: '#16A085',
  },
  { id: 'projects', label: 'Projekty', size: 'wide', color: '#E67E73' },
  {
    id: 'reports',
    label: 'Raporty do księgowości',
    size: 'small',
    color: '#9B59B6',
    subLinks: [
      { label: 'Raport miesięczny', href: '#monthly' },
      { label: 'Raport roczny', href: '#yearly' },
    ],
  },
  { id: 'profile', label: 'Profil', size: 'tall', color: '#E91E63' },
  { id: 'administration', label: 'Administracja', size: 'wide', color: '#F39C12' },
  { id: 'settings', label: 'Ustawienia', size: 'small', color: '#3498DB' },
  { id: 'wnioski', label: 'Wnioski', size: 'small', color: '#F39C12' },
  {
    id: 'board',
    label: 'Zarząd',
    size: 'wide',
    color: '#27AE60',
    subLinks: [
      { label: 'Protokoły posiedzeń', href: '#protocols' },
      { label: 'Skład zarządu', href: '#members' },
    ],
  },
  { id: 'supervisory-board', label: 'Rada Nadzorcza', size: 'wide', color: '#2980B9' },
  { id: 'calendar', label: 'Kalendarz', size: 'tall', color: '#1ABC9C' },
  { id: 'contractors', label: 'Kontrahenci', size: 'small', color: '#8E44AD' },
];

const NAV_ITEMS = [
  {
    id: 'notifications',
    label: 'Powiadomienia',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    color: '#FF6B6B',
    onClick: () => {},
  },
  {
    id: 'settings',
    label: 'Ustawienia',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    color: '#4ECDC4',
  },
  {
    id: 'profile',
    label: 'Profil',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    color: '#AA96DA',
  },
];

export default function App() {
  const [pathname, setPathname] = useState(() =>
    window.location.pathname === '/employees' ? '/employees' : '/'
  );
  const [hoveredTile, setHoveredTile] = useState<string | null>(null);
  const [expandedTile, setExpandedTile] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname === '/employees' ? '/employees' : '/');
      setExpandedTile(null);
      setIsMenuOpen(false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (nextPath: '/' | '/employees') => {
    if (pathname === nextPath) {
      return;
    }

    window.history.pushState({}, '', nextPath);
    setPathname(nextPath);
    setExpandedTile(null);
    setHoveredTile(null);
    setIsMenuOpen(false);
  };

  const handleTileClick = (tile: Tile) => {
    if (tile.id === 'employees') {
      navigate('/employees');
      return;
    }

    if (tile.subLinks) {
      setExpandedTile(expandedTile === tile.id ? null : tile.id);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItemsWithHandlers = NAV_ITEMS.map(item => ({
    ...item,
    onClick: item.id === 'notifications' ? () => setIsNotificationsOpen(true) : item.onClick,
  }));

  const hasUnreadNotifications = SAMPLE_NOTIFICATIONS.some(notification => !notification.isRead);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pl-PL', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const isEmployeesRoute = pathname === '/employees';

  return (
    <div
      className="min-h-screen p-4 md:p-8 lg:p-12"
      style={{
        background: 'linear-gradient(135deg, #d7dbe1 0%, #c7cdd5 52%, #bcc4ce 100%)',
        position: 'relative',
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(28, 35, 43, 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* App indicator with status */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 1000,
        }}
      >
        <motion.div
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: '20px',
            letterSpacing: '-0.02em',
            color: '#1a1a1a',
          }}
          animate={{
            opacity: [1, 0.85, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ePCS
        </motion.div>

        {/* Status indicator */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <motion.div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#27AE60',
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#27AE60',
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatePresence mode="wait">
          {isEmployeesRoute ? (
            <motion.div
              key="employees-route"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <EmployeesRoute onBack={() => navigate('/')} />
            </motion.div>
          ) : (
            <motion.div
              key="dashboard-route"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ color: '#1a1a1a', fontWeight: 600 }}>Panel główny</span>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '2px',
                  }}
                >
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                    {formatTime(currentTime)}
                  </div>
                  <div style={{ fontSize: '11px', color: '#666', fontWeight: 500 }}>
                    {formatDate(currentTime)}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="puzzle-grid"
                layout
                transition={{
                  layout: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8,
                  },
                }}
              >
                {TILES.map((tile, index) => {
                  const isExpanded = expandedTile === tile.id;
                  const hasSubLinks = tile.subLinks && tile.subLinks.length > 0;

                  return (
                    <motion.button
                      key={tile.id}
                      layout
                      layoutId={tile.id}
                      className={`puzzle-tile tile-${tile.size} ${isExpanded ? 'expanded' : ''} ${hasSubLinks ? 'has-sublinks' : ''}`}
                      style={
                        {
                          '--tile-color': tile.color,
                          '--tile-border': `${tile.color}90`,
                          '--animation-delay': `${index * 0.05}s`,
                        } as React.CSSProperties
                      }
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      whileHover={
                        !isExpanded
                          ? {
                              y: -8,
                              rotate: 0.5,
                              boxShadow: '0 16px 32px rgba(0, 0, 0, 0.12)',
                              transition: {
                                type: 'spring',
                                stiffness: 400,
                                damping: 25,
                              },
                            }
                          : {}
                      }
                      whileTap={
                        !isExpanded
                          ? {
                              scale: 0.98,
                              y: -4,
                            }
                          : {}
                      }
                      transition={{
                        layout: {
                          type: 'spring',
                          stiffness: 350,
                          damping: 28,
                          mass: 0.9,
                        },
                        opacity: {
                          duration: 0.6,
                          delay: index * 0.05,
                          ease: [0.34, 1.56, 0.64, 1],
                        },
                        y: {
                          duration: 0.6,
                          delay: index * 0.05,
                          ease: [0.34, 1.56, 0.64, 1],
                        },
                        scale: {
                          duration: 0.6,
                          delay: index * 0.05,
                          ease: [0.34, 1.56, 0.64, 1],
                        },
                      }}
                      onMouseEnter={() => setHoveredTile(tile.id)}
                      onMouseLeave={() => setHoveredTile(null)}
                      onClick={() => handleTileClick(tile)}
                    >
                      <div className="tile-content">
                        <span
                          className="tile-label"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          {tile.label}
                        </span>

                        {hasSubLinks && isExpanded && (
                          <div className="sub-links">
                            {tile.subLinks!.map((subLink, idx) => (
                              <a
                                key={idx}
                                href={subLink.href}
                                className="sub-link"
                                style={{
                                  fontFamily: "'Manrope', sans-serif",
                                }}
                                onClick={e => e.stopPropagation()}
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
                          opacity: hoveredTile === tile.id || isExpanded ? 1 : 0,
                          backgroundColor: tile.color,
                        }}
                      />
                    </motion.button>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!isEmployeesRoute && (
        <>
          <MenuButton
            onClick={toggleMenu}
            isOpen={isMenuOpen}
            hasUnreadNotifications={hasUnreadNotifications}
          />
          <CircularNavigation
            navItems={navItemsWithHandlers}
            isOpen={isMenuOpen}
            toggleMenu={toggleMenu}
          />
          <Notifications
            isOpen={isNotificationsOpen}
            onClose={() => setIsNotificationsOpen(false)}
          />
        </>
      )}

      <HelpDialog isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />

      <motion.button
        className="floating-helper"
        onClick={() => setIsHelpOpen(true)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1, ease: [0.34, 1.56, 0.64, 1] }}
        style={{
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4ECDC4 0%, #2980B9 100%)',
          border: 'none',
          boxShadow: '0 8px 24px rgba(78, 205, 196, 0.3)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
          color: 'white',
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: '0 12px 32px rgba(78, 205, 196, 0.4)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </motion.button>

      <style>{`
        .puzzle-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 8px;
          grid-auto-rows: 140px;
        }

        @media (min-width: 640px) {
          .puzzle-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            grid-auto-rows: 160px;
          }
        }

        @media (min-width: 1024px) {
          .puzzle-grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 12px;
            grid-auto-rows: 180px;
          }
        }

        .puzzle-tile {
          position: relative;
          background: white;
          box-sizing: border-box;
          border: 1px solid var(--tile-border);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.02);
          cursor: pointer;
          transform-origin: center center;
          will-change: transform;
          transition: box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }

        .puzzle-tile.has-sublinks {
          cursor: pointer;
        }

        .puzzle-tile:hover:not(.expanded) {
          z-index: 10;
          border-color: var(--tile-color);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08), 0 16px 48px rgba(0, 0, 0, 0.04);
        }

        .puzzle-tile.expanded {
          z-index: 20;
          background: var(--tile-color);
          border-color: var(--tile-color);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1), 0 24px 64px rgba(0, 0, 0, 0.06);
        }

        .puzzle-tile.expanded .tile-hover-effect {
          opacity: 0 !important;
        }

        .tile-small {
          grid-column: span 1;
          grid-row: span 1;
        }

        .tile-small.expanded {
          grid-column: span 2;
          grid-row: span 2;
        }

        .tile-wide {
          grid-column: span 2;
          grid-row: span 1;
        }

        .tile-wide.expanded {
          grid-column: span 2;
          grid-row: span 2;
        }

        .tile-tall {
          grid-column: span 1;
          grid-row: span 2;
        }

        .tile-tall.expanded {
          grid-column: span 2;
          grid-row: span 3;
        }

        .tile-large {
          grid-column: span 2;
          grid-row: span 2;
        }

        .tile-large.expanded {
          grid-column: span 3;
          grid-row: span 2;
        }

        @media (max-width: 639px) {
          .tile-wide,
          .tile-tall,
          .tile-large {
            grid-column: span 1;
            grid-row: span 1;
          }

          .tile-small.expanded,
          .tile-wide.expanded,
          .tile-tall.expanded,
          .tile-large.expanded {
            grid-column: span 1;
            grid-row: span 2;
          }
        }

        .tile-content {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 28px 24px 24px;
          gap: 12px;
          transition: justify-content 0.5s ease,
                      padding 0.5s ease,
                      gap 0.5s ease;
        }

        .puzzle-tile.expanded .tile-content {
          justify-content: flex-start;
          padding-top: 32px;
          gap: 20px;
        }

        .tile-label {
          max-width: 12ch;
          font-size: clamp(17px, 2.5vw, 22px);
          font-weight: 800;
          text-align: center;
          color: #141414;
          letter-spacing: -0.03em;
          line-height: 1.15;
          text-wrap: balance;
          position: relative;
          z-index: 3;
          flex-shrink: 0;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7);
          transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      font-size 0.5s ease,
                      text-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .puzzle-tile:hover .tile-label {
          color: white;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .puzzle-tile.expanded .tile-label {
          font-size: clamp(18px, 2.2vw, 20px);
          color: white;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
        }

        .sub-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          max-width: 100%;
          z-index: 4;
          transition: opacity 0.5s ease;
        }

        .sub-link {
          background: rgba(255, 255, 255, 0.95);
          color: #1a1a1a;
          padding: 14px 20px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          display: block;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .sub-link:hover {
          background: white;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          border-color: rgba(0, 0, 0, 0.08);
        }

        .sub-link:active {
          transform: translateY(-1px) scale(1);
        }

        .expand-indicator {
          position: absolute;
          bottom: 16px;
          right: 16px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          z-index: 5;
          transition: all 0.5s ease;
        }

        .puzzle-tile.expanded .expand-indicator {
          bottom: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.4);
          transform: scale(1.1);
        }

        .puzzle-tile:hover .expand-indicator {
          background: rgba(255, 255, 255, 0.35);
          transform: scale(1.05);
        }

        .expand-indicator svg {
          color: #1a1a1a;
          transition: color 0.3s ease,
                      transform 0.5s ease;
        }

        .puzzle-tile:hover .expand-indicator svg {
          color: white;
        }

        .puzzle-tile.expanded .expand-indicator svg {
          color: white;
        }

        .tile-hover-effect {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tile-hover-effect::before {
          content: '';
          position: absolute;
          inset: -50%;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.3), transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .puzzle-tile:hover .tile-hover-effect::before {
          opacity: 1;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.6;
          }
        }

        .floating-helper {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 48px;
          height: 48px;
        }

        @media (min-width: 768px) {
          .floating-helper {
            width: 56px;
            height: 56px;
          }
        }

        .expand-indicator {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .puzzle-tile:hover .expand-indicator {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
