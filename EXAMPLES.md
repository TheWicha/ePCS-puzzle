# Przykłady Użycia - HR System Design

Ten plik zawiera praktyczne przykłady tworzenia różnych elementów UI używając systemu projektowego HR.

## Spis Treści

1. [Dashboard z Kafelkami](#dashboard-z-kafelkami)
2. [Formularz](#formularz)
3. [Lista z Animacjami](#lista-z-animacjami)
4. [Modal/Dialog](#modaldialog)
5. [Navigation Bar](#navigation-bar)
6. [Card Grid](#card-grid)
7. [Stats Dashboard](#stats-dashboard)

---

## Dashboard z Kafelkami

### Podstawowy Dashboard

```tsx
import Tile from './components/Tile';

function Dashboard() {
  const modules = [
    { id: 'employees', label: 'Pracownicy', size: 'large', color: '#FF6B6B' },
    { id: 'calendar', label: 'Kalendarz', size: 'tall', color: '#4ECDC4' },
    { id: 'documents', label: 'Dokumenty', size: 'small', color: '#95E1D3' },
    { id: 'projects', label: 'Projekty', size: 'wide', color: '#F38181' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      <div className="puzzle-grid">
        {modules.map((module, index) => (
          <Tile
            key={module.id}
            {...module}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
```

### Dashboard z Navigation

```tsx
function DashboardWithNav() {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <nav style={{
        background: 'var(--color-card)',
        padding: 'var(--padding-lg)',
        boxShadow: 'var(--shadow-sm)',
        marginBottom: 'var(--gap-xl)',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-h2)',
          textTransform: 'uppercase',
        }}>
          HR System
        </h1>
      </nav>

      <main style={{ padding: 'var(--padding-xl)' }}>
        <div className="puzzle-grid">
          {/* Tiles here */}
        </div>
      </main>
    </div>
  );
}
```

---

## Formularz

### Login Form

```tsx
function LoginForm() {
  const inputStyle = {
    width: '100%',
    padding: 'var(--padding-md)',
    borderRadius: 'var(--radius-md)',
    border: 'none',
    background: 'var(--color-bg)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-body-sm)',
    transition: 'var(--transition-base)',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: 'var(--gap-sm)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: 'var(--text-body-sm)',
  };

  return (
    <div style={{
      background: 'var(--color-card)',
      padding: 'var(--padding-xl)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      maxWidth: '400px',
      margin: '0 auto',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-h3)',
        marginBottom: 'var(--gap-lg)',
        textTransform: 'uppercase',
      }}>
        Logowanie
      </h2>

      <form>
        <div style={{ marginBottom: 'var(--gap-lg)' }}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            placeholder="twoj@email.pl"
            style={inputStyle}
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(78, 205, 196, 0.2)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        <div style={{ marginBottom: 'var(--gap-xl)' }}>
          <label style={labelStyle}>Hasło</label>
          <input
            type="password"
            placeholder="••••••••"
            style={inputStyle}
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(78, 205, 196, 0.2)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: 'var(--padding-md)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-text)',
            color: 'var(--color-card)',
            border: 'none',
            fontFamily: 'var(--font-body)',
            fontWeight: 'var(--weight-bold)',
            fontSize: 'var(--text-body-sm)',
            cursor: 'pointer',
            transition: 'var(--transition-base)',
            boxShadow: 'var(--shadow-button)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'var(--transform-button-hover)';
            e.currentTarget.style.boxShadow = 'var(--shadow-button-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-button)';
          }}
        >
          Zaloguj się
        </button>
      </form>
    </div>
  );
}
```

---

## Lista z Animacjami

### Animated List Component

```tsx
interface ListItem {
  id: string;
  title: string;
  description: string;
}

function AnimatedList({ items }: { items: ListItem[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {items.map((item, index) => (
        <li
          key={item.id}
          style={{
            background: 'var(--color-card)',
            padding: 'var(--padding-lg)',
            marginBottom: 'var(--gap-md)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-sm)',
            transition: 'var(--transition-base)',
            animation: 'slideInLeft 0.5s ease backwards',
            animationDelay: `${index * 0.1}s`,
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateX(8px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
          }}
        >
          <h3 style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 'var(--weight-bold)',
            fontSize: 'var(--text-body)',
            marginBottom: 'var(--gap-sm)',
          }}>
            {item.title}
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body-sm)',
            color: 'var(--color-text-muted)',
            lineHeight: 'var(--leading-relaxed)',
          }}>
            {item.description}
          </p>
        </li>
      ))}

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </ul>
  );
}
```

---

## Modal/Dialog

```tsx
import { useState } from 'react';

function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 100,
          animation: 'fadeIn 0.3s ease',
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'var(--color-card)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--padding-xl)',
          maxWidth: '500px',
          width: '90%',
          boxShadow: 'var(--shadow-xl)',
          zIndex: 101,
          animation: 'scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 'var(--gap-lg)',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-h3)',
            textTransform: 'uppercase',
          }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '8px',
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        <div>{children}</div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </>
  );
}

// Użycie:
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Otwórz Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Przykład">
        <p>Treść modala...</p>
      </Modal>
    </>
  );
}
```

---

## Navigation Bar

```tsx
function NavigationBar() {
  const navItems = [
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Pracownicy', href: '#employees' },
    { label: 'Projekty', href: '#projects' },
    { label: 'Raporty', href: '#reports' },
  ];

  return (
    <nav style={{
      background: 'var(--color-card)',
      padding: 'var(--padding-lg)',
      boxShadow: 'var(--shadow-sm)',
      position: 'sticky',
      top: 0,
      zIndex: 'var(--z-floating)',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '28px',
          textTransform: 'uppercase',
        }}>
          HR
        </h1>

        <ul style={{
          display: 'flex',
          gap: 'var(--gap-lg)',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 'var(--weight-semibold)',
                  fontSize: 'var(--text-body-sm)',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'var(--transition-base)',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-bg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
```

---

## Card Grid

```tsx
interface CardData {
  title: string;
  value: string;
  color: string;
}

function CardGrid({ cards }: { cards: CardData[] }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 'var(--gap-lg)',
    }}>
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background: 'var(--color-card)',
            padding: 'var(--padding-xl)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-sm)',
            transition: 'var(--transition-bounce)',
            animation: 'fadeInUp 0.5s ease backwards',
            animationDelay: `${index * 0.1}s`,
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            const accent = e.currentTarget.querySelector('.accent') as HTMLElement;
            if (accent) accent.style.width = '100%';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            const accent = e.currentTarget.querySelector('.accent') as HTMLElement;
            if (accent) accent.style.width = '0%';
          }}
        >
          {/* Accent line */}
          <div
            className="accent"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: '4px',
              width: '0%',
              background: card.color,
              transition: 'width 0.4s ease',
            }}
          />

          <h3 style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 'var(--weight-semibold)',
            fontSize: 'var(--text-body-sm)',
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--gap-md)',
          }}>
            {card.title}
          </h3>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 'var(--weight-bold)',
            fontSize: '36px',
            color: 'var(--color-text)',
          }}>
            {card.value}
          </p>
        </div>
      ))}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// Użycie:
function StatsPage() {
  const stats = [
    { title: 'Pracownicy', value: '142', color: '#FF6B6B' },
    { title: 'Projekty', value: '28', color: '#4ECDC4' },
    { title: 'Zadania', value: '356', color: '#F38181' },
    { title: 'Urlopy', value: '12', color: '#AA96DA' },
  ];

  return <CardGrid cards={stats} />;
}
```

---

## Stats Dashboard

```tsx
function StatsDashboard() {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', padding: 'var(--padding-xl)' }}>
      <header style={{ marginBottom: 'var(--gap-xl)' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-h1)',
          textTransform: 'uppercase',
          marginBottom: 'var(--gap-sm)',
        }}>
          Dashboard
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-body)',
          color: 'var(--color-text-muted)',
        }}>
          Przegląd statystyk i aktywności
        </p>
      </header>

      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'var(--gap-md)',
        marginBottom: 'var(--gap-xl)',
      }}>
        {[
          { label: 'Pracownicy', value: '142', color: '#FF6B6B' },
          { label: 'Projekty', value: '28', color: '#4ECDC4' },
          { label: 'Zadania', value: '356', color: '#F38181' },
          { label: 'Urlopy', value: '12', color: '#AA96DA' },
        ].map((stat, index) => (
          <div
            key={index}
            style={{
              background: 'var(--color-card)',
              padding: 'var(--padding-lg)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-sm)',
              borderLeft: `4px solid ${stat.color}`,
              animation: 'slideInRight 0.5s ease backwards',
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-sm)',
              color: 'var(--color-text-muted)',
              marginBottom: 'var(--gap-sm)',
            }}>
              {stat.label}
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 'var(--weight-bold)',
              fontSize: '32px',
              color: 'var(--color-text)',
            }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="puzzle-grid">
        {/* Tiles here */}
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
```

---

## Wskazówki

### Performance
- Używaj CSS transitions zamiast JavaScript animations gdy to możliwe
- Ogranicz użycie `box-shadow` blur radius dla lepszej wydajności
- Używaj `will-change` dla elementów z ciągłymi animacjami

### Accessibility
- Zawsze dodawaj odpowiednie `aria-label` dla interaktywnych elementów
- Zapewnij keyboard navigation (focus states)
- Używaj semantic HTML (`nav`, `main`, `section`, etc.)

### Responsive
- Testuj na różnych rozmiarach ekranu
- Używaj `clamp()` dla fluid typography
- Grid powinien się adaptować (auto-fit, minmax)

---

**Więcej przykładów znajdziesz w:**
- `src/app/App.tsx` - główna implementacja
- `src/app/components/Tile.tsx` - reusable component
- `src/app/components/Styleguide.tsx` - interactive examples
