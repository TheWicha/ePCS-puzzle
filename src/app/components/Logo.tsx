import { motion } from 'motion/react';

export default function Logo() {
  return (
    <motion.div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {/* Icon mark with glassmorphic layers */}
      <motion.div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Animated gradient background */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.2) 0%, rgba(255, 107, 107, 0.2) 100%)',
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Layered icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'relative', zIndex: 1 }}
        >
          {/* Top layer */}
          <motion.rect
            x="4"
            y="5"
            width="16"
            height="3"
            rx="1.5"
            fill="rgba(78, 205, 196, 0.9)"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0,
            }}
          />

          {/* Middle layer */}
          <motion.rect
            x="4"
            y="10.5"
            width="16"
            height="3"
            rx="1.5"
            fill="rgba(255, 255, 255, 0.85)"
            animate={{
              opacity: [0.7, 0.95, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />

          {/* Bottom layer */}
          <motion.rect
            x="4"
            y="16"
            width="16"
            height="3"
            rx="1.5"
            fill="rgba(255, 107, 107, 0.85)"
            animate={{
              opacity: [0.7, 0.95, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </svg>
      </motion.div>

      {/* Wordmark */}
      <motion.div
        style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: '28px',
          letterSpacing: '-0.03em',
          color: '#1a1a1a',
          fontWeight: 900,
        }}
      >
        ePCS
      </motion.div>
    </motion.div>
  );
}
