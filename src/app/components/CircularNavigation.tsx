import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface NavItem {
  id: string;
  label: string;
  icon: string | React.ReactNode;
  color: string;
  onClick?: () => void;
}

interface CircularNavigationProps {
  navItems: NavItem[];
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function CircularNavigation({
  navItems,
  isOpen,
  toggleMenu,
}: CircularNavigationProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setHoveredItem(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9000]"
      style={{
        background: "rgba(26, 26, 26, 0.85)",
        backdropFilter: "blur(12px)",
      }}
      onClick={toggleMenu}
    >
      <div className="fixed inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="circular-nav-container relative aspect-square w-[280px] max-w-[90vw] rounded-full flex items-center justify-center"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow:
              "inset 2px 2px 2px rgba(255,255,255,0.5), inset -1px -1px 1px rgba(255,255,255,0.3)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={toggleMenu}
            className="absolute aspect-square flex items-center justify-center w-12 h-12 rounded-full bg-white text-black z-10"
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {navItems.map((item, index) => {
            const angle = (360 / navItems.length) * index;

            return (
              <div
                key={item.id}
                className="nav-item-wrapper absolute"
                style={{
                  transform: `rotate(${angle}deg) translate(var(--nav-radius, 95px)) rotate(-${angle}deg)`,
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      item.onClick?.();
                      toggleMenu();
                    }}
                    className="nav-item-button flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 cursor-pointer text-white"
                    style={{
                      background:
                        hoveredItem === item.id
                          ? item.color
                          : "rgba(255, 255, 255, 0.1)",
                      border:
                        hoveredItem === item.id
                          ? "none"
                          : "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {typeof item.icon === 'string' ? (
                      <span className="text-xl">{item.icon}</span>
                    ) : (
                      <div style={{ transform: 'scale(0.85)' }}>
                        {item.icon}
                      </div>
                    )}
                  </button>
                  <span
                    className="nav-item-label text-xs font-medium text-white text-center"
                    style={{
                      textDecoration: "none",
                      fontFamily: "'Manrope', sans-serif",
                      whiteSpace: "nowrap",
                      fontSize: '0.7rem',
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .circular-nav-container {
            width: 420px !important;
          }
          .nav-item-wrapper {
            --nav-radius: 150px;
          }
          .nav-item-button {
            width: 4rem !important;
            height: 4rem !important;
          }
          .nav-item-button svg,
          .nav-item-button > div {
            transform: scale(1) !important;
          }
          .nav-item-label {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
}