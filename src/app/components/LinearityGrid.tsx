import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

interface SubLink {
  label: string;
  href: string;
}

interface Tile {
  id: string;
  label: string;
  color: string;
  subLinks?: SubLink[];
}

const TILES: Tile[] = [
  { id: 'employees', label: 'Pracownicy', color: '#E74C3C' },
  {
    id: 'port-reports',
    label: 'Raporty portów',
    color: '#E67E22',
    subLinks: [
      { label: 'Port Gdańsk', href: '#gdansk' },
      { label: 'Port Gdynia', href: '#gdynia' },
    ],
  },
  { id: 'documents', label: 'Dokumenty', color: '#16A085' },
  { id: 'projects', label: 'Projekty', color: '#E67E73' },
  // Box 5 is the ePCS logo center — no tile
  { id: 'reports', label: 'Raporty do księgowości', color: '#9B59B6' },
  { id: 'profile', label: 'Profil', color: '#E91E63' },
  { id: 'administration', label: 'Administracja', color: '#F39C12' },
  { id: 'wnioski', label: 'Wnioski', color: '#F39C12' },
  {
    id: 'board',
    label: 'Zarząd',
    color: '#27AE60',
    subLinks: [
      { label: 'Protokoły posiedzeń', href: '#protocols' },
      { label: 'Skład zarządu', href: '#members' },
    ],
  },
];

interface Props {
  onNavigate: (id: string) => void;
}

function GridTile({
  tile,
  index,
  className,
}: {
  tile: Tile;
  index: number;
  className: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const hasSubLinks = tile.subLinks && tile.subLinks.length > 0;

  return (
    <motion.button
      className={className}
      style={
        {
          '--tile-color': tile.color,
          position: 'relative',
          background: 'white',
          border: `1px solid ${tile.color}90`,
          borderRadius: '16px',
          overflow: 'hidden',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: expanded ? 'flex-start' : 'center',
          padding: expanded ? '28px 20px 20px' : '20px',
          gap: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          transition: 'border-color 0.3s, box-shadow 0.3s, background 0.3s',
        } as React.CSSProperties
      }
      initial={{ opacity: 0, y: 24, scale: 0.93 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        background: expanded ? tile.color : hovered ? tile.color : 'white',
      }}
      transition={{
        opacity: { duration: 0.5, delay: index * 0.04, ease: [0.34, 1.56, 0.64, 1] },
        y: { duration: 0.5, delay: index * 0.04, ease: [0.34, 1.56, 0.64, 1] },
        scale: { duration: 0.5, delay: index * 0.04, ease: [0.34, 1.56, 0.64, 1] },
        background: { duration: 0.3 },
      }}
      whileHover={!expanded ? { y: -6, boxShadow: '0 14px 28px rgba(0,0,0,0.10)' } : {}}
      whileTap={!expanded ? { scale: 0.97 } : {}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        if (hasSubLinks) setExpanded(e => !e);
      }}
    >
      <span
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 'clamp(14px, 1.8vw, 18px)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: hovered || expanded ? 'white' : '#141414',
          textShadow: hovered || expanded ? '0 2px 8px rgba(0,0,0,0.1)' : '0 1px 0 rgba(255,255,255,0.7)',
          transition: 'color 0.3s, text-shadow 0.3s',
          textAlign: 'center',
          lineHeight: 1.2,
          position: 'relative',
          zIndex: 2,
        }}
      >
        {tile.label}
      </span>

      <AnimatePresence>
        {hasSubLinks && expanded && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              width: '100%',
              zIndex: 3,
            }}
          >
            {tile.subLinks!.map((sub, i) => (
              <a
                key={i}
                href={sub.href}
                onClick={e => e.stopPropagation()}
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  color: '#1a1a1a',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 600,
                  textAlign: 'center',
                  fontFamily: "'Manrope', sans-serif",
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  display: 'block',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                {sub.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {hasSubLinks && (
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 4,
            transition: 'transform 0.3s',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M5 7.5L10 12.5L15 7.5" stroke={hovered || expanded ? 'white' : '#1a1a1a'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </motion.button>
  );
}

export default function LinearityGrid({ onNavigate }: Props) {
  const [t0, t1, t2, t3, t4, t5, t6, t7, t8] = TILES;

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 lg:grid-rows-7 gap-4 w-full p-4 h-auto lg:h-[680px]"
    >
      {/* Box 1 — col-span-3, row-span-2 */}
      <motion.button
        className="col-span-2 md:col-span-2 lg:col-span-3 lg:row-span-2 h-40 lg:h-auto"
        style={{
          background: 'white',
          border: `1px solid ${t0.color}90`,
          borderRadius: '16px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0, ease: [0.34, 1.56, 0.64, 1] }}
        whileHover={{ y: -6, boxShadow: '0 14px 28px rgba(0,0,0,0.10)', background: t0.color }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onNavigate('employees')}
      >
        <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(14px, 1.8vw, 18px)', fontWeight: 800, color: '#141414', letterSpacing: '-0.02em' }}>
          {t0.label}
        </span>
      </motion.button>

      {/* Box 2 — col-span-3, row-span-2 */}
      <GridTile tile={t1} index={1} className="col-span-2 md:col-span-2 lg:col-span-3 lg:row-span-2 h-40 lg:h-auto" />

      {/* Box 3 — col-span-2, row-span-3 */}
      <GridTile tile={t2} index={2} className="col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-3 h-40 lg:h-auto" />

      {/* Box 4 — col-span-2, row-span-3 */}
      <GridTile tile={t3} index={3} className="col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-3 h-40 lg:h-auto" />

      {/* Box 5 — ePCS Logo Center — col-span-4, row-span-3 */}
      <motion.div
        className="col-span-2 md:col-span-3 lg:col-span-4 lg:row-span-3 h-48 lg:h-auto"
        style={{
          background: '#1a1a1a',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          overflow: 'hidden',
          position: 'relative',
        }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Animated gradient backdrop */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(78,205,196,0.18) 0%, rgba(255,107,107,0.18) 100%)',
          }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Dot grid texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            pointerEvents: 'none',
          }}
        />

        {/* Logo */}
        <motion.div
          style={{ display: 'flex', alignItems: 'center', gap: '16px', position: 'relative', zIndex: 1 }}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Icon mark */}
          <motion.div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2e2e2e 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            whileHover={{ scale: 1.06 }}
          >
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(78,205,196,0.25) 0%, rgba(255,107,107,0.25) 100%)',
              }}
              animate={{ opacity: [0.3, 0.55, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'relative', zIndex: 1 }}>
              <motion.rect x="4" y="5" width="16" height="3" rx="1.5" fill="rgba(78,205,196,0.9)"
                animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0 }} />
              <motion.rect x="4" y="10.5" width="16" height="3" rx="1.5" fill="rgba(255,255,255,0.85)"
                animate={{ opacity: [0.7, 0.95, 0.7] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} />
              <motion.rect x="4" y="16" width="16" height="3" rx="1.5" fill="rgba(255,107,107,0.85)"
                animate={{ opacity: [0.7, 0.95, 0.7] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
            </svg>
          </motion.div>

          {/* Wordmark */}
          <motion.div
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: 'clamp(36px, 5vw, 52px)',
              letterSpacing: '-0.04em',
              color: 'white',
              fontWeight: 900,
              lineHeight: 1,
            }}
            animate={{ opacity: [1, 0.88, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            ePCS
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Box 6 — col-span-2, row-span-2, col-start-7 */}
      <GridTile tile={t4} index={4} className="col-span-2 md:col-span-1 lg:col-span-2 lg:row-span-2 lg:col-start-7 h-40 lg:h-auto" />

      {/* Boxes 7-10 — bottom quad */}
      <GridTile tile={t5} index={5} className="col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2 h-32 lg:h-auto" />
      <GridTile tile={t6} index={6} className="col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2 h-32 lg:h-auto" />
      <GridTile tile={t7} index={7} className="col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2 h-32 lg:h-auto" />
      <GridTile tile={t8} index={8} className="col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2 h-32 lg:h-auto" />
    </div>
  );
}
