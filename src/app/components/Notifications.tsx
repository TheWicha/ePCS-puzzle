import { motion, AnimatePresence } from 'motion/react';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  color: string;
  isRead: boolean;
}

interface NotificationsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SAMPLE_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    title: 'Nowy raport księgowy',
    message: 'Raport miesięczny za marzec został wygenerowany',
    time: '5 min temu',
    color: '#AA96DA',
    isRead: false,
  },
  {
    id: '2',
    title: 'Aktualizacja systemu',
    message: 'System zostanie zaktualizowany dzisiaj o 22:00',
    time: '1 godz. temu',
    color: '#4ECDC4',
    isRead: false,
  },
  {
    id: '3',
    title: 'Nowy pracownik',
    message: 'Jan Kowalski został dodany do systemu',
    time: '2 godz. temu',
    color: '#FF6B6B',
    isRead: true,
  },
  {
    id: '4',
    title: 'Protokół zarządu',
    message: 'Protokół z posiedzenia zarządu jest dostępny',
    time: '3 godz. temu',
    color: '#6BCB77',
    isRead: true,
  },
  {
    id: '5',
    title: 'Raport portów',
    message: 'Port Gdańsk - nowy raport dostępny',
    time: 'Wczoraj',
    color: '#FF8364',
    isRead: true,
  },
];

export default function Notifications({ isOpen, onClose }: NotificationsProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[8000]"
        style={{
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(4px)',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 35,
          }}
          className="fixed right-0 top-0 h-full w-full max-w-md bg-[#f5f5f7] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          style={{
            borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Header */}
          <div
            className="notifications-header flex items-center justify-between border-b p-4"
            style={{
              borderColor: 'rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2
              className="notifications-title"
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: '22px',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              Powiadomienia
            </h2>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all"
              style={{
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
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

          {/* Notifications List */}
          <div className="notifications-list overflow-y-auto h-[calc(100%-72px)] p-3">
            <div className="space-y-3">
              {SAMPLE_NOTIFICATIONS.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                  className="bg-white rounded-2xl p-4 cursor-pointer transition-all"
                  style={{
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    borderLeft: `4px solid ${notification.color}`,
                    opacity: notification.isRead ? 0.7 : 1,
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#1a1a1a',
                      }}
                    >
                      {notification.title}
                    </h3>
                    {!notification.isRead && (
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0 ml-2 mt-1"
                        style={{
                          background: notification.color,
                        }}
                      />
                    )}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '14px',
                      color: '#666',
                      lineHeight: '1.5',
                      marginBottom: '8px',
                    }}
                  >
                    {notification.message}
                  </p>
                  <span
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '12px',
                      color: '#999',
                    }}
                  >
                    {notification.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .notifications-header {
            padding: 1.5rem !important;
          }
          .notifications-title {
            font-size: 28px !important;
          }
          .notifications-list {
            padding: 1rem !important;
            height: calc(100% - 88px) !important;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
