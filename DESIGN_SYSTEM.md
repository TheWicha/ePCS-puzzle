# HR System - Design System Documentation

## 📚 Spis Treści

1. [Wprowadzenie](#wprowadzenie)
2. [Quick Start](#quick-start)
3. [Pliki w Projekcie](#pliki-w-projekcie)
4. [Podstawowe Koncepcje](#podstawowe-koncepcje)
5. [Komponenty](#komponenty)
6. [Przykłady Użycia](#przykłady-użycia)
7. [Customizacja](#customizacja)

---

## Wprowadzenie

System projektowy HR aplikacji to kompletny zestaw wytycznych, komponentów i zasobów do tworzenia spójnego, nowoczesnego interfejsu użytkownika. Design opiera się na trzech filarach:

- **Puzzlowa Geometria** - dynamiczny grid layout z elementami różnej wielkości
- **Interaktywne Animacje** - każda akcja ma wizualną odpowiedź
- **Silna Typografia** - zamiast ikon używamy charakterystycznych fontów i kolorów

---

## Quick Start

### 1. Zobacz Styleguide w Aplikacji

Uruchom aplikację i kliknij przycisk **"Zobacz Styleguide"** w prawym górnym rogu, aby zobaczyć interaktywną dokumentację z przykładami.

### 2. Przeczytaj Dokumentację

```bash
# Otwórz główny plik styleguide
cat STYLEGUIDE.md

# Lub ten plik dla pełnej dokumentacji systemu
cat DESIGN_SYSTEM.md
```

### 3. Użyj Gotowego Komponentu

```tsx
import Tile from './components/Tile';

<Tile
  id="employees"
  label="Pracownicy"
  size="large"
  color="#FF6B6B"
  index={0}
/>
```

### 4. Import CSS Variables

```tsx
// W swoim komponencie lub głównym pliku CSS
import '../styles/hr-system-variables.css';

// Użyj w CSS
.my-element {
  font-family: var(--font-body);
  color: var(--color-text);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-base);
}
```

---

## Pliki w Projekcie

### Dokumentacja
- **`STYLEGUIDE.md`** - Kompletna dokumentacja designu (typografia, kolory, animacje, przykłady kodu)
- **`DESIGN_SYSTEM.md`** - Ten plik - overview i quick reference

### Komponenty
- **`src/app/App.tsx`** - Główna aplikacja z puzzlowym gridem kafelków
- **`src/app/components/Tile.tsx`** - Reusable komponent kafelka (z dokumentacją JSDoc)
- **`src/app/components/Styleguide.tsx`** - Interaktywny styleguide widoczny w aplikacji

### Style
- **`src/styles/fonts.css`** - Import fontów (Archivo Black, Manrope)
- **`src/styles/hr-system-variables.css`** - CSS variables dla całego systemu
- **`src/styles/theme.css`** - Główny plik theme (istniejący)

---

## Podstawowe Koncepcje

### Grid System

Aplikacja używa CSS Grid z 3 breakpointami:

```
Mobile (< 640px):    auto-fit columns, 140px rows, 8px gap
Tablet (≥ 640px):    4 columns, 160px rows, 10px gap  
Desktop (≥ 1024px):  6 columns, 180px rows, 12px gap
```

### Tile Sizes

Każdy kafelek może mieć 4 rozmiary:
- **small** (1x1) - podstawowy kafelek
- **wide** (2x1) - podwójna szerokość
- **tall** (1x2) - podwójna wysokość
- **large** (2x2) - największy, feature tile

### Stany Interaktywne

1. **Default** - biały kafelek, subtle shadow
2. **Hover** - podniesienie, rotacja, kolor tła fade in, label → biały
3. **Expanded** - utrzymanie hover stanu, zmniejszony label, pokazane sublinki
4. **Active** - lekkie wcisknięcie (translateY + scale)

---

## Komponenty

### Tile Component

Podstawowy building block aplikacji.

**Props:**
```typescript
interface TileProps {
  id: string;                    // Unikalny identyfikator
  label: string;                 // Tekst wyświetlany na kafelku
  size: 'small' | 'wide' | 'tall' | 'large';  // Rozmiar
  color: string;                 // Kolor akcentowy (hex)
  subLinks?: SubLink[];          // Opcjonalne podlinki
  index: number;                 // Index dla staggered animation
  onClick?: () => void;          // Opcjonalny custom handler
}
```

**Przykład z sublinks:**
```tsx
<Tile
  id="reports"
  label="Raporty księg."
  size="small"
  color="#AA96DA"
  index={4}
  subLinks={[
    { label: 'Raport miesięczny', href: '#monthly' },
    { label: 'Raport roczny', href: '#yearly' }
  ]}
/>
```

### Styleguide Component

Interaktywna dokumentacja dostępna w aplikacji. Pokazuje:
- Filozofię projektową
- Przykłady typografii
- Paletę kolorów
- System layoutu
- Animacje i timing functions
- Przykłady kodu
- Best practices

---

## Przykłady Użycia

### 1. Tworzenie Nowego Modułu

```tsx
// 1. Dodaj do tablicy TILES w App.tsx
const TILES: Tile[] = [
  // ... existing tiles
  {
    id: 'new-module',
    label: 'Nowy Moduł',
    size: 'wide',
    color: '#FF5733',
    subLinks: [
      { label: 'Podstrona A', href: '#a' },
      { label: 'Podstrona B', href: '#b' }
    ]
  }
];
```

### 2. Tworzenie Custom Card

```tsx
function CustomCard({ title, content }: { title: string; content: string }) {
  return (
    <div style={{
      background: 'var(--color-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--padding-xl)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'var(--transition-base)',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}>
      <h3 style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--weight-bold)',
        fontSize: 'var(--text-h3)',
        marginBottom: 'var(--gap-md)',
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body)',
        lineHeight: 'var(--leading-relaxed)',
        color: 'var(--color-text-muted)',
      }}>
        {content}
      </p>
    </div>
  );
}
```

### 3. Tworzenie Custom Button

```tsx
function PrimaryButton({ 
  children, 
  onClick 
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-body-sm)',
        padding: '12px 24px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-text)',
        color: 'var(--color-card)',
        border: 'none',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-button)',
        transition: 'var(--transition-base)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-button-hover)';
        e.currentTarget.style.transform = 'var(--transform-button-hover)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-button)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {children}
    </button>
  );
}
```

### 4. Tworzenie Staggered List

```tsx
function StaggeredList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {items.map((item, index) => (
        <li
          key={index}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body)',
            padding: 'var(--padding-md)',
            background: 'var(--color-card)',
            marginBottom: 'var(--gap-sm)',
            borderRadius: 'var(--radius-md)',
            animation: 'fadeInUp 0.5s ease backwards',
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

// Dodaj w CSS:
const styles = `
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
`;
```

---

## Customizacja

### Zmiana Kolorów

Edytuj `hr-system-variables.css`:

```css
:root {
  /* Zmień bazowy background */
  --color-bg: #f0f0f2;  /* zamiast #f5f5f7 */
  
  /* Zmień kolor modułu */
  --color-employees: #E74C3C;  /* zamiast #FF6B6B */
}
```

### Zmiana Fontów

1. Import nowego fontu w `fonts.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');
```

2. Zmień variable w `hr-system-variables.css`:
```css
:root {
  --font-body: 'Space Grotesk', sans-serif;
}
```

### Zmiana Animacji

Edytuj timing functions w `hr-system-variables.css`:

```css
:root {
  /* Bardziej subtelna animacja */
  --ease-bounce: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Wolniejsze transitions */
  --duration-base: 0.5s;
}
```

### Dodawanie Nowych Rozmiarów Kafelków

W CSS dodaj nową klasę:

```css
.tile-mega {
  grid-column: span 3;
  grid-row: span 2;
}
```

W TypeScript dodaj do type:

```typescript
type TileSize = 'small' | 'wide' | 'tall' | 'large' | 'mega';
```

---

## Checklisty

### ✅ Przed Dodaniem Nowego Elementu

- [ ] Czy używam fontów z systemu (Archivo Black / Manrope)?
- [ ] Czy używam kolorów z CSS variables?
- [ ] Czy element ma animation przy hover?
- [ ] Czy używam odpowiedniego border-radius (12-16px)?
- [ ] Czy shadows są subtelne i spójne z systemem?
- [ ] Czy transition używa określonego easing?

### ✅ Przed Dodaniem Nowego Modułu

- [ ] Czy wybrałem odpowiedni rozmiar kafelka (small/wide/tall/large)?
- [ ] Czy kolor jest unikalny i dobrze kontrastuje z białym?
- [ ] Czy label jest krótki i czytelny?
- [ ] Czy sublinks są rzeczywiście potrzebne?
- [ ] Czy dodałem do tablicy TILES z poprawnym indexem?

---

## Wsparcie

### Pytania?

1. **Zobacz interaktywny Styleguide** - kliknij "Zobacz Styleguide" w aplikacji
2. **Przeczytaj STYLEGUIDE.md** - pełna dokumentacja z przykładami
3. **Sprawdź komponent Tile.tsx** - JSDoc z przykładami użycia
4. **Użyj CSS variables** - wszystko w `hr-system-variables.css`

### Znalezione Problemy?

- Sprawdź czy importujesz fonty (`fonts.css`)
- Sprawdź czy używasz CSS variables poprawnie
- Sprawdź console w devtools dla błędów
- Sprawdź czy component ma wszystkie wymagane props

---

## Changelog

### v1.0.0 - 2026-04-13
- ✨ Initial release
- 📚 Kompletna dokumentacja
- 🎨 System kolorów i typografii
- 🧩 Reusable Tile component
- 📱 Responsive grid layout
- ✨ Animacje i interakcje
- 📖 Interaktywny Styleguide

---

**Autor:** HR System Design Team  
**Data utworzenia:** 2026-04-13  
**Wersja:** 1.0.0  
**Licencja:** Proprietary
