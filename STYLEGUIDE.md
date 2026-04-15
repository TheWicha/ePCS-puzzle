# HR System - Styleguide

## 📐 Filozofia Projektowa

### Puzzlowa Geometria
Design bazuje na koncepcji puzzli - elementy są geometryczne, ale organiczne w kompozycji. Każdy kafelek jest autonomiczny, ale razem tworzą spójną całość. Layout oparty jest na dynamicznym gridzie, gdzie elementy mają różne rozmiary (1x1, 2x1, 1x2, 2x2).

### Interakcja = Animacja
Nowoczesność wyrażona przez ruch - każda interakcja ma odpowiedź wizualną. Hover powoduje podniesienie elementu, rotację i pojawienie się koloru. Stan expanded utrzymuje element w "aktywnej" pozycji z pełnym kolorem tła.

### Bez Ikon, Z Charakterem
Zamiast ikon używamy silnej typografii i koloru. Każdy kafelek ma unikalny kolor, który pojawia się przy interakcji. Labelki są głównym elementem wizualnym.

---

## 🔤 Typografia

### Fonty

#### Archivo Black
- **Użycie:** Nagłówki główne, tytuły sekcji
- **Import:** 
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
  ```
- **CSS:**
  ```css
  font-family: 'Archivo Black', sans-serif;
  ```
- **Charakterystyka:** Bold, uppercase, duże tracking dla efektu brutalnego

#### Manrope (400-800)
- **Użycie:** Labelki kafelków, podtytuły, body text, przyciski
- **Import:**
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
  ```
- **CSS:**
  ```css
  font-family: 'Manrope', sans-serif;
  ```
- **Wagi:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Hierarchia Typograficzna

```css
/* H1 - Main Heading */
font-family: 'Archivo Black', sans-serif;
font-size: clamp(48px, 8vw, 96px);
text-transform: uppercase;
letter-spacing: -0.02em;

/* Tile Label */
font-family: 'Manrope', sans-serif;
font-weight: 700;
font-size: clamp(16px, 2.5vw, 22px);
letter-spacing: -0.02em;
line-height: 1.2;

/* Body Text */
font-family: 'Manrope', sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 1.6;

/* Sub Link */
font-family: 'Manrope', sans-serif;
font-weight: 600;
font-size: 13px;
```

---

## 🎨 Kolory

### Paleta Podstawowa

```css
/* Background */
--color-bg: #f5f5f7;

/* Card/Tile Background */
--color-card: #ffffff;

/* Text */
--color-text: #1a1a1a;
--color-text-muted: #666666;
```

### Kolory Akcentowe Kafelków

Każdy moduł ma przypisany unikalny kolor, który pojawia się przy hover/expanded state:

```javascript
{
  employees: '#FF6B6B',
  calendar: '#4ECDC4',
  documents: '#95E1D3',
  projects: '#F38181',
  reports: '#AA96DA',
  profile: '#FCBAD3',
  administration: '#FFFFD2',
  settings: '#A8D8EA',
  wnioski: '#FFD93D',
  board: '#6BCB77',
  'supervisory-board': '#4D96FF',
  'port-reports': '#FF8364',
  contractors: '#B983FF'
}
```

---

## 📏 Layout i Spacing

### Grid System

```css
/* Mobile */
.puzzle-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 8px;
  grid-auto-rows: 140px;
}

/* Tablet (min-width: 640px) */
@media (min-width: 640px) {
  .puzzle-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    grid-auto-rows: 160px;
  }
}

/* Desktop (min-width: 1024px) */
@media (min-width: 1024px) {
  .puzzle-grid {
    grid-template-columns: repeat(6, 1fr);
    gap: 12px;
    grid-auto-rows: 180px;
  }
}
```

### Tile Sizes

```css
/* Small (1x1) */
.tile-small {
  grid-column: span 1;
  grid-row: span 1;
}

/* Wide (2x1) */
.tile-wide {
  grid-column: span 2;
  grid-row: span 1;
}

/* Tall (1x2) */
.tile-tall {
  grid-column: span 1;
  grid-row: span 2;
}

/* Large (2x2) */
.tile-large {
  grid-column: span 2;
  grid-row: span 2;
}

/* Mobile - wszystkie 1x1 */
@media (max-width: 639px) {
  .tile-wide,
  .tile-tall,
  .tile-large {
    grid-column: span 1;
    grid-row: span 1;
  }
}
```

---

## ✨ Animacje i Interakcje

### Entry Animation

Kafelki wjeżdżają od dołu z efektem bounce i staggered delay:

```css
@keyframes tileEntry {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.puzzle-tile {
  animation: tileEntry 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
  animation-delay: var(--animation-delay);
}

/* W JavaScript/React: */
style={{ '--animation-delay': `${index * 0.05}s` }}
```

### Hover State

Element podnosi się, rotuje i pokazuje kolor tła:

```css
.puzzle-tile {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.puzzle-tile:hover {
  transform: translateY(-12px) rotate(0.5deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  z-index: 10;
}

/* Label zmienia kolor na biały */
.puzzle-tile:hover .tile-label {
  color: white;
}

/* Tło z kolorem fade in */
.tile-hover-effect {
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  background-color: var(--tile-color);
}

.puzzle-tile:hover .tile-hover-effect {
  opacity: 1;
}
```

### Expanded State (dla elementów z sublinks)

```css
.puzzle-tile.expanded {
  z-index: 20;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.16);
  transform: translateY(-12px) scale(1.02);
}

/* Label się zmniejsza i przesuwa */
.puzzle-tile.expanded .tile-label {
  transform: translateY(-10px);
  font-size: clamp(14px, 2vw, 18px);
}

/* Tło kolorowe pozostaje widoczne */
.puzzle-tile.expanded .tile-hover-effect {
  opacity: 1 !important;
}
```

### SubLinks Animation

```css
@keyframes subLinkEntry {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.sub-link {
  animation: subLinkEntry 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
  animation-delay: var(--sub-delay);
}

/* W JavaScript/React: */
style={{ '--sub-delay': `${index * 0.1}s` }}
```

### Easing Functions

```css
/* Bounce Effect - dla entry i expanded states */
cubic-bezier(0.34, 1.56, 0.64, 1)

/* Smooth - dla color transitions */
ease
```

---

## 🧩 Tworzenie Nowych Elementów

### 1. Podstawowy Kafelek

```tsx
<button className="puzzle-tile tile-small">
  <div className="tile-content">
    <span className="tile-label" style={{ fontFamily: "'Manrope', sans-serif" }}>
      Nazwa Modułu
    </span>
  </div>
  <div 
    className="tile-hover-effect"
    style={{ backgroundColor: '#FF6B6B' }} 
  />
</button>
```

### 2. Kafelek z Sublinks

```tsx
const [expanded, setExpanded] = useState(false);

<button 
  className={`puzzle-tile tile-wide ${expanded ? 'expanded' : ''} has-sublinks`}
  onClick={() => setExpanded(!expanded)}
>
  <div className="tile-content">
    <span className="tile-label">Nazwa Modułu</span>

    <div className="sub-links" style={{ opacity: expanded ? 1 : 0 }}>
      <a href="#link1" className="sub-link" 
         style={{ '--sub-delay': '0s' }}>
        Podstrona 1
      </a>
      <a href="#link2" className="sub-link"
         style={{ '--sub-delay': '0.1s' }}>
        Podstrona 2
      </a>
    </div>

    <div className="expand-indicator">
      <svg width="20" height="20" viewBox="0 0 20 20"
           style={{ 
             transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
             transition: 'transform 0.3s ease' 
           }}>
        <path d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round" />
      </svg>
    </div>
  </div>
  <div className="tile-hover-effect"
       style={{ backgroundColor: '#4ECDC4' }} />
</button>
```

### 3. Card Component (dla innych sekcji)

```tsx
<div className="bg-white rounded-2xl p-8 shadow-sm">
  <h3 style={{
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 700,
    fontSize: '24px',
    marginBottom: '16px'
  }}>
    Tytuł Sekcji
  </h3>
  <p style={{
    fontFamily: "'Manrope', sans-serif",
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#666'
  }}>
    Treść...
  </p>
</div>
```

### 4. Button Component

```tsx
<button style={{
  fontFamily: "'Manrope', sans-serif",
  fontWeight: 600,
  fontSize: '14px',
  padding: '12px 24px',
  borderRadius: '12px',
  background: '#1a1a1a',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
}}
onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'translateY(-2px)';
  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
}}>
  Przycisk
</button>
```

---

## ✅ Zasady i Best Practices

### ✓ DO:

1. **Zawsze używaj określonych fontów**
   - Archivo Black dla głównych nagłówków
   - Manrope dla wszystkiego innego
   - Nie mieszaj z innymi fontami

2. **Używaj animacji przy każdej interakcji**
   - Hover, click, expand - każda akcja powinna mieć response wizualny
   - Minimum: transform + box-shadow

3. **Kolory są sygnałem akcji**
   - Domyślnie elementy są białe/neutralne
   - Kolor pojawia się przy hover/active state jako feedback

4. **Border radius = 12-16px**
   - Kafelki: 16px
   - Mniejsze elementy (buttons, cards): 12px
   - Utrzymuj spójność

5. **Box shadows są subtelne**
   - Default: `0 2px 8px rgba(0, 0, 0, 0.04)`
   - Hover: `0 20px 40px rgba(0, 0, 0, 0.12)`
   - Expanded: `0 24px 48px rgba(0, 0, 0, 0.16)`

### ✗ DON'T:

1. **Unikaj ikon**
   - Wyjątek: chevron dla expand indicator
   - Wszystko inne komunikuj przez typografię i kolor

2. **Nie przeciążaj kolorami**
   - Tło aplikacji powinno być neutral (#f5f5f7)
   - Kolory są akcentami, nie dominują w spoczynku

3. **Nie używaj systemowych fontów**
   - Arial, Helvetica, system-ui - nie pasują do estetyki

4. **Nie pomijaj animacji transitions**
   - Każda zmiana stanu powinna być płynna
   - Minimum: `transition: all 0.3s ease`

---

## 🎯 CSS Variables - Quick Reference

```css
:root {
  /* Typography */
  --font-display: 'Archivo Black', sans-serif;
  --font-body: 'Manrope', sans-serif;

  /* Colors */
  --color-bg: #f5f5f7;
  --color-card: #ffffff;
  --color-text: #1a1a1a;
  --color-text-muted: #666666;

  /* Spacing */
  --gap-sm: 8px;
  --gap-md: 12px;
  --gap-lg: 24px;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 8px 16px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.12);
  --shadow-xl: 0 24px 48px rgba(0, 0, 0, 0.16);

  /* Transitions */
  --transition-base: 0.3s ease;
  --transition-bounce: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 📦 Pełny Przykład: Tile Component

```tsx
import { useState } from 'react';

interface TileProps {
  id: string;
  label: string;
  size: 'small' | 'wide' | 'tall' | 'large';
  color: string;
  subLinks?: Array<{ label: string; href: string }>;
  index: number;
}

export function Tile({ id, label, size, color, subLinks, index }: TileProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const hasSubLinks = subLinks && subLinks.length > 0;

  return (
    <button
      className={`puzzle-tile tile-${size} ${isExpanded ? 'expanded' : ''} ${hasSubLinks ? 'has-sublinks' : ''}`}
      style={{
        '--tile-color': color,
        '--animation-delay': `${index * 0.05}s`,
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => hasSubLinks && setIsExpanded(!isExpanded)}
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
```

---

## 🚀 Rozpoczęcie Pracy

1. **Import fontów** w `/src/styles/fonts.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Manrope:wght@400;500;600;700;800&display=swap');
   ```

2. **Skopiuj CSS** ze stylów w `App.tsx` lub stwórz osobny plik `puzzle-tiles.css`

3. **Użyj CSS Variables** dla łatwiejszego zarządzania

4. **Testuj animacje** - każdy element powinien reagować na interakcje

5. **Zobacz działający przykład** - kliknij "Zobacz Styleguide" w aplikacji

---

**Utworzono:** 2026-04-13  
**Wersja:** 1.0.0
