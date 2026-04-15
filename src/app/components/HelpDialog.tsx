import { motion, AnimatePresence } from 'motion/react';

interface HelpDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelpDialog({ isOpen, onClose }: HelpDialogProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[9500]"
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(8px)',
        }}
        onClick={onClose}
      >
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 30,
            }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxHeight: '90vh',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between p-6 border-b"
              style={{
                borderColor: 'rgba(0, 0, 0, 0.1)',
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: '24px',
                    color: '#1a1a1a',
                    marginBottom: '4px',
                  }}
                >
                  Pomoc
                </h2>
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '13px',
                    color: '#666',
                  }}
                >
                  Skontaktuj się z naszym zespołem
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all"
                style={{
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e5e5e5';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f3f4f6';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <svg
                  width="20"
                  height="20"
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
            </div>

            {/* Content */}
            <div className="p-6 space-y-4" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
              {/* Helpdesk */}
              <motion.a
                href="mailto:helpdesk@epcs.pl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="block p-4 rounded-xl border transition-all"
                style={{
                  borderColor: 'rgba(0, 0, 0, 0.1)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#4ECDC4';
                  e.currentTarget.style.background = 'rgba(78, 205, 196, 0.05)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #4ECDC4 0%, #2980B9 100%)',
                      color: 'white',
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#1a1a1a',
                        marginBottom: '4px',
                      }}
                    >
                      Helpdesk
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '14px',
                        color: '#666',
                        marginBottom: '8px',
                      }}
                    >
                      Zgłoś problem lub zadaj pytanie
                    </p>
                    <span
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '13px',
                        color: '#4ECDC4',
                        fontWeight: 600,
                      }}
                    >
                      helpdesk@epcs.pl
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* Administrator */}
              <motion.a
                href="mailto:admin@epcs.pl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="block p-4 rounded-xl border transition-all"
                style={{
                  borderColor: 'rgba(0, 0, 0, 0.1)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#E74C3C';
                  e.currentTarget.style.background = 'rgba(231, 76, 60, 0.05)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)',
                      color: 'white',
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
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
                  </div>
                  <div className="flex-1">
                    <h3
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#1a1a1a',
                        marginBottom: '4px',
                      }}
                    >
                      Administrator systemu
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '14px',
                        color: '#666',
                        marginBottom: '8px',
                      }}
                    >
                      Kontakt w sprawach administracyjnych
                    </p>
                    <span
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '13px',
                        color: '#E74C3C',
                        fontWeight: 600,
                      }}
                    >
                      admin@epcs.pl
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* Telefon */}
              <motion.a
                href="tel:+48123456789"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="block p-4 rounded-xl border transition-all"
                style={{
                  borderColor: 'rgba(0, 0, 0, 0.1)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#27AE60';
                  e.currentTarget.style.background = 'rgba(39, 174, 96, 0.05)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #27AE60 0%, #229954 100%)',
                      color: 'white',
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#1a1a1a',
                        marginBottom: '4px',
                      }}
                    >
                      Kontakt telefoniczny
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '14px',
                        color: '#666',
                        marginBottom: '8px',
                      }}
                    >
                      Poniedziałek - Piątek, 8:00 - 16:00
                    </p>
                    <span
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '13px',
                        color: '#27AE60',
                        fontWeight: 600,
                      }}
                    >
                      +48 123 456 789
                    </span>
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Footer */}
            <div
              className="p-6 border-t"
              style={{
                borderColor: 'rgba(0, 0, 0, 0.1)',
                background: 'rgba(0, 0, 0, 0.02)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '12px',
                  color: '#999',
                  textAlign: 'center',
                  margin: 0,
                }}
              >
                Odpowiadamy w ciągu 24 godzin roboczych
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
