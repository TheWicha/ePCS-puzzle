import { motion } from 'motion/react';
import { useState } from 'react';

interface MenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
  hasUnreadNotifications?: boolean;
}

export default function MenuButton({ onClick, isOpen, hasUnreadNotifications = false }: MenuButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      className="menu-button"
      style={{
        position: 'fixed',
        top: '16px',
        right: '16px',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'white',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1001,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
      }}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{
        opacity: 1,
        scale: !isOpen && isHovered ? 1.1 : 1,
        rotate: !isOpen && isHovered ? 90 : 0,
        boxShadow: !isOpen && isHovered ? '0 6px 20px rgba(0, 0, 0, 0.18)' : '0 4px 16px rgba(0, 0, 0, 0.12)',
      }}
      transition={{
        opacity: { duration: 0.8, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] },
        scale: { type: 'spring', stiffness: 400, damping: 25 },
        rotate: { type: 'spring', stiffness: 400, damping: 25 },
        boxShadow: { duration: 0.3 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: 'relative',
          width: '20px',
          height: '20px',
        }}
      >
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: '3px',
            width: '20px',
            height: '2px',
            background: '#1a1a1a',
            borderRadius: '2px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isOpen ? 'rotate(45deg) translateY(6px)' : 'rotate(0)',
          }}
        />
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: '9px',
            width: '20px',
            height: '2px',
            background: '#1a1a1a',
            borderRadius: '2px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: isOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: '15px',
            width: '20px',
            height: '2px',
            background: '#1a1a1a',
            borderRadius: '2px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isOpen ? 'rotate(-45deg) translateY(-6px)' : 'rotate(0)',
          }}
        />
      </div>

      {/* Notification Badge */}
      {hasUnreadNotifications && !isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: '#FF6B6B',
            border: '2px solid white',
            zIndex: 10,
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: '#FF6B6B',
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .menu-button {
            top: 32px !important;
            right: 32px !important;
            width: 60px !important;
            height: 60px !important;
          }
        }
      `}</style>
    </motion.button>
  );
}
