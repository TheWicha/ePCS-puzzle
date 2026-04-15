import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';

interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  location: string;
  email: string;
  status: 'Aktywny' | 'Urlop' | 'Offline';
}

interface EmployeesRouteProps {
  onBack: () => void;
}

const EMPLOYEES: Employee[] = [
  {
    id: 1,
    name: 'Anna Kowalska',
    role: 'Specjalistka ds. kadr',
    department: 'HR',
    location: 'Gdańsk',
    email: 'anna.kowalska@epcs.pl',
    status: 'Aktywny',
  },
  {
    id: 2,
    name: 'Piotr Nowak',
    role: 'Koordynator operacyjny',
    department: 'Operacje',
    location: 'Gdynia',
    email: 'piotr.nowak@epcs.pl',
    status: 'Aktywny',
  },
  {
    id: 3,
    name: 'Katarzyna Wiśniewska',
    role: 'Główna księgowa',
    department: 'Finanse',
    location: 'Sopot',
    email: 'k.wisniewska@epcs.pl',
    status: 'Urlop',
  },
  {
    id: 4,
    name: 'Michał Zieliński',
    role: 'Analityk portowy',
    department: 'Raportowanie',
    location: 'Gdańsk',
    email: 'm.zielinski@epcs.pl',
    status: 'Aktywny',
  },
  {
    id: 5,
    name: 'Ewa Dąbrowska',
    role: 'Asystentka zarządu',
    department: 'Administracja',
    location: 'Warszawa',
    email: 'ewa.dabrowska@epcs.pl',
    status: 'Aktywny',
  },
  {
    id: 6,
    name: 'Tomasz Lewandowski',
    role: 'Inżynier projektu',
    department: 'Projekty',
    location: 'Gdynia',
    email: 't.lewandowski@epcs.pl',
    status: 'Offline',
  },
  {
    id: 7,
    name: 'Julia Wójcik',
    role: 'Specjalistka ds. zakupów',
    department: 'Zakupy',
    location: 'Gdańsk',
    email: 'j.wojcik@epcs.pl',
    status: 'Aktywny',
  },
  {
    id: 8,
    name: 'Marcin Kamiński',
    role: 'Administrator systemów',
    department: 'IT',
    location: 'Sopot',
    email: 'm.kaminski@epcs.pl',
    status: 'Aktywny',
  },
  {
    id: 9,
    name: 'Aleksandra Król',
    role: 'Kontrolerka finansowa',
    department: 'Finanse',
    location: 'Warszawa',
    email: 'a.krol@epcs.pl',
    status: 'Offline',
  },
  {
    id: 10,
    name: 'Damian Szymański',
    role: 'Kierownik kontraktów',
    department: 'Kontrakty',
    location: 'Gdańsk',
    email: 'd.szymanski@epcs.pl',
    status: 'Aktywny',
  },
];

const PAGE_SIZE = 6;

const statusStyles: Record<Employee['status'], { background: string; color: string }> = {
  Aktywny: { background: 'rgba(39, 174, 96, 0.12)', color: '#1F8A4C' },
  Urlop: { background: 'rgba(243, 156, 18, 0.14)', color: '#B06D00' },
  Offline: { background: 'rgba(52, 73, 94, 0.12)', color: '#43505E' },
};

export default function EmployeesRoute({ onBack }: EmployeesRouteProps) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const filteredEmployees = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return EMPLOYEES;
    }

    return EMPLOYEES.filter(employee =>
      [employee.name, employee.role, employee.department, employee.location, employee.email]
        .join(' ')
        .toLowerCase()
        .includes(normalized)
    );
  }, [query]);

  const pageCount = Math.max(1, Math.ceil(filteredEmployees.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    if (page > pageCount) {
      setPage(pageCount);
    }
  }, [page, pageCount]);

  const pageEmployees = filteredEmployees.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '24px',
          padding: '16px 18px',
          borderRadius: '18px',
          background: 'rgba(255, 255, 255, 0.72)',
          backdropFilter: 'blur(14px)',
          boxShadow: '0 10px 30px rgba(25, 32, 38, 0.08)',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <button
            onClick={onBack}
            style={{
              border: '1px solid rgba(20, 20, 20, 0.08)',
              background: 'white',
              borderRadius: '999px',
              height: '42px',
              padding: '0 16px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '13px',
              fontWeight: 700,
              color: '#1a1a1a',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(25, 32, 38, 0.06)',
            }}
          >
            <span aria-hidden="true">←</span>
            Wróć do panelu
          </button>

          <div>
            <div
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: '28px',
                lineHeight: 1,
                color: '#1A1A1A',
                letterSpacing: '-0.04em',
              }}
            >
              Pracownicy
            </div>
            <div
              style={{
                marginTop: '6px',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '13px',
                color: '#5D6873',
                fontWeight: 600,
              }}
            >
              Lista zespołu z filtrowaniem i paginacją
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <div
            style={{
              minWidth: '120px',
              padding: '12px 14px',
              borderRadius: '14px',
              background: 'rgba(52, 152, 219, 0.1)',
            }}
          >
            <div
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '11px',
                color: '#386C95',
                fontWeight: 700,
              }}
            >
              Wszystkich
            </div>
            <div
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: '24px',
                color: '#1A1A1A',
                lineHeight: 1.1,
              }}
            >
              {EMPLOYEES.length}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.12 }}
        style={{
          display: 'grid',
          gap: '18px',
          gridTemplateColumns: 'minmax(0, 1fr)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: '16px',
            gridTemplateColumns: 'minmax(0, 1fr)',
          }}
        >
          <div
            style={{
              padding: '18px',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.82)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 14px 36px rgba(25, 32, 38, 0.08)',
            }}
          >
            <label
              htmlFor="employee-search"
              style={{
                display: 'block',
                marginBottom: '10px',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#64707C',
              }}
            >
              Wyszukiwarka
            </label>
            <input
              id="employee-search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Szukaj po imieniu, dziale, roli lub mailu"
              style={{
                width: '100%',
                height: '52px',
                borderRadius: '16px',
                border: '1px solid rgba(26, 26, 26, 0.08)',
                background: 'rgba(248, 249, 251, 0.95)',
                padding: '0 18px',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '15px',
                color: '#1A1A1A',
                outline: 'none',
              }}
            />
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.82)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 14px 36px rgba(25, 32, 38, 0.08)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gap: '12px',
              }}
            >
              {pageEmployees.length > 0 ? (
                pageEmployees.map((employee: Employee, index: number) => (
                  <motion.div
                    key={employee.id}
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    style={{
                      display: 'grid',
                      gap: '14px',
                      gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr) auto',
                      alignItems: 'center',
                      padding: '18px',
                      borderRadius: '18px',
                      border: '1px solid rgba(26, 26, 26, 0.08)',
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,249,251,0.92) 100%)',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: '18px',
                          fontWeight: 800,
                          color: '#1A1A1A',
                          letterSpacing: '-0.03em',
                        }}
                      >
                        {employee.name}
                      </div>
                      <div
                        style={{
                          marginTop: '4px',
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#5E6772',
                        }}
                      >
                        {employee.role}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gap: '6px' }}>
                      <div
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: '13px',
                          color: '#1A1A1A',
                          fontWeight: 700,
                        }}
                      >
                        {employee.department}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: '12px',
                          color: '#65707B',
                          fontWeight: 600,
                        }}
                      >
                        {employee.location}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: '12px',
                          color: '#65707B',
                          fontWeight: 600,
                        }}
                      >
                        {employee.email}
                      </div>
                    </div>

                    <div
                      style={{
                        justifySelf: 'end',
                        padding: '8px 12px',
                        borderRadius: '999px',
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '12px',
                        fontWeight: 800,
                        background: statusStyles[employee.status].background,
                        color: statusStyles[employee.status].color,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {employee.status}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div
                  style={{
                    padding: '40px 24px',
                    textAlign: 'center',
                    fontFamily: "'Manrope', sans-serif",
                    color: '#5F6873',
                    fontWeight: 700,
                  }}
                >
                  Brak wyników dla podanej frazy.
                </div>
              )}
            </div>

            <div
              style={{
                marginTop: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '13px',
                  color: '#5F6873',
                  fontWeight: 700,
                }}
              >
                Strona {page} z {pageCount}
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => setPage((current: number) => Math.max(1, current - 1))}
                  disabled={page === 1}
                  style={{
                    height: '40px',
                    padding: '0 14px',
                    borderRadius: '12px',
                    border: '1px solid rgba(26, 26, 26, 0.08)',
                    background: page === 1 ? 'rgba(239, 241, 244, 0.9)' : 'white',
                    color: '#1A1A1A',
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '13px',
                    fontWeight: 800,
                    cursor: page === 1 ? 'not-allowed' : 'pointer',
                  }}
                >
                  Poprzednia
                </button>
                <button
                  onClick={() => setPage((current: number) => Math.min(pageCount, current + 1))}
                  disabled={page === pageCount}
                  style={{
                    height: '40px',
                    padding: '0 14px',
                    borderRadius: '12px',
                    border: '1px solid rgba(26, 26, 26, 0.08)',
                    background: page === pageCount ? 'rgba(239, 241, 244, 0.9)' : 'white',
                    color: '#1A1A1A',
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '13px',
                    fontWeight: 800,
                    cursor: page === pageCount ? 'not-allowed' : 'pointer',
                  }}
                >
                  Następna
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
