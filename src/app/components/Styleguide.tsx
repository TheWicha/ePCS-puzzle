export default function Styleguide() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h1
            className="text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-4"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            Styleguide
          </h1>
          <p className="text-xl text-gray-600" style={{ fontFamily: "'Manrope', sans-serif" }}>
            System projektowy aplikacji HR
          </p>
        </header>

        {/* Design Philosophy */}
        <section className="mb-20">
          <h2 className="section-heading">Filozofia Projektowa</h2>
          <div className="styleguide-card">
            <h3 className="card-title">Puzzlowa Geometria</h3>
            <p className="card-text">
              Design bazuje na koncepcji puzzli - elementy są geometryczne, ale organizm w kompozycji.
              Każdy kafelek jest autonomiczny, ale razem tworzą spójną całość. Layout oparty jest na
              dynamicznym gridzie, gdzie elementy mają różne rozmiary (1x1, 2x1, 1x2, 2x2).
            </p>

            <h3 className="card-title mt-6">Interakcja = Animacja</h3>
            <p className="card-text">
              Nowoczesność wyrażona przez ruch - każda interakcja ma odpowiedź wizualną. Hover powoduje
              podniesienie elementu, rotację i pojawienie się koloru. Stan expanded utrzymuje element
              w "aktywnej" pozycji z pełnym kolorem tła.
            </p>

            <h3 className="card-title mt-6">Bez Ikon, Z Charakterem</h3>
            <p className="card-text">
              Zamiast ikon używamy silnej typografii i koloru. Każdy kafelek ma unikalny kolor, który
              pojawia się przy interakcji. Labelki są głównym elementem wizualnym.
            </p>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <h2 className="section-heading">Typografia</h2>

          <div className="styleguide-card mb-6">
            <h3 className="card-title">Fonty</h3>
            <p className="card-text mb-8">
              System wykorzystuje dwa fonty z różnymi rolami:
            </p>

            <div className="font-sample mb-8">
              <div className="text-6xl mb-2" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                ARCHIVO BLACK
              </div>
              <p className="card-text">
                <strong>Użycie:</strong> Nagłówki główne, tytuły sekcji<br/>
                <strong>Import:</strong> <code>@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');</code><br/>
                <strong>CSS:</strong> <code>font-family: 'Archivo Black', sans-serif;</code><br/>
                <strong>Charakterystyka:</strong> Bold, uppercase, duże tracking dla efektu brutalnego
              </p>
            </div>

            <div className="font-sample">
              <div className="text-4xl mb-2" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
                Manrope 400-800
              </div>
              <p className="card-text">
                <strong>Użycie:</strong> Labelki kafelków, podtytuły, body text, przyciski<br/>
                <strong>Import:</strong> <code>@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');</code><br/>
                <strong>CSS:</strong> <code>font-family: 'Manrope', sans-serif;</code><br/>
                <strong>Wagi:</strong> 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
              </p>
            </div>
          </div>

          <div className="styleguide-card">
            <h3 className="card-title">Hierarchia Typograficzna</h3>
            <div className="space-y-4">
              <div>
                <div className="text-7xl mb-2" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                  H1 - 96px
                </div>
                <code className="code-block">font-family: 'Archivo Black'; font-size: clamp(48px, 8vw, 96px);</code>
              </div>

              <div>
                <div className="text-3xl mb-2" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
                  Tile Label - 16-22px
                </div>
                <code className="code-block">font-family: 'Manrope'; font-weight: 700; font-size: clamp(16px, 2.5vw, 22px);</code>
              </div>

              <div>
                <div className="text-xl mb-2" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400 }}>
                  Body Text - 18-20px
                </div>
                <code className="code-block">font-family: 'Manrope'; font-weight: 400; font-size: 18px;</code>
              </div>

              <div>
                <div className="text-sm mb-2" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}>
                  Sub Link - 13px
                </div>
                <code className="code-block">font-family: 'Manrope'; font-weight: 600; font-size: 13px;</code>
              </div>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section className="mb-20">
          <h2 className="section-heading">Kolory</h2>

          <div className="styleguide-card mb-6">
            <h3 className="card-title">Paleta Podstawowa</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              <div>
                <div className="w-full h-24 rounded-lg bg-[#f5f5f7] border-2 border-gray-300"></div>
                <p className="mt-2 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  <strong>Background</strong><br/>
                  #f5f5f7
                </p>
              </div>
              <div>
                <div className="w-full h-24 rounded-lg bg-white border-2 border-gray-300"></div>
                <p className="mt-2 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  <strong>Card/Tile</strong><br/>
                  #ffffff
                </p>
              </div>
              <div>
                <div className="w-full h-24 rounded-lg bg-[#1a1a1a]"></div>
                <p className="mt-2 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  <strong>Text Primary</strong><br/>
                  #1a1a1a
                </p>
              </div>
            </div>
          </div>

          <div className="styleguide-card">
            <h3 className="card-title">Kolory Akcentowe Kafelków</h3>
            <p className="card-text mb-6">
              Każdy moduł ma przypisany unikalny kolor, który pojawia się przy hover/expanded state
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Pracownicy', color: '#FF6B6B' },
                { name: 'Kalendarz', color: '#4ECDC4' },
                { name: 'Dokumenty', color: '#95E1D3' },
                { name: 'Projekty', color: '#F38181' },
                { name: 'Raporty', color: '#AA96DA' },
                { name: 'Profil', color: '#FCBAD3' },
                { name: 'Administracja', color: '#FFFFD2' },
                { name: 'Ustawienia', color: '#A8D8EA' },
                { name: 'Wnioski', color: '#FFD93D' },
                { name: 'Zarząd', color: '#6BCB77' },
                { name: 'Rada', color: '#4D96FF' },
                { name: 'Porty', color: '#FF8364' },
                { name: 'Kontrahenci', color: '#B983FF' },
              ].map((item) => (
                <div key={item.name}>
                  <div className="w-full h-20 rounded-lg" style={{ backgroundColor: item.color }}></div>
                  <p className="mt-2 text-xs" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    <strong>{item.name}</strong><br/>
                    {item.color}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Layout & Spacing */}
        <section className="mb-20">
          <h2 className="section-heading">Layout i Spacing</h2>

          <div className="styleguide-card mb-6">
            <h3 className="card-title">Grid System</h3>
            <p className="card-text mb-6">
              System używa CSS Grid z responsive breakpoints:
            </p>
            <code className="code-block mb-4">
              {`/* Mobile */
display: grid;
grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
gap: 8px;
grid-auto-rows: 140px;

/* Tablet (min-width: 640px) */
grid-template-columns: repeat(4, 1fr);
gap: 10px;
grid-auto-rows: 160px;

/* Desktop (min-width: 1024px) */
grid-template-columns: repeat(6, 1fr);
gap: 12px;
grid-auto-rows: 180px;`}
            </code>
          </div>

          <div className="styleguide-card">
            <h3 className="card-title">Tile Sizes</h3>
            <p className="card-text mb-6">
              Kafelki mają 4 rozmiary, które definiują ich wymiary w gridzie:
            </p>
            <div className="space-y-4">
              <div>
                <strong style={{ fontFamily: "'Manrope', sans-serif" }}>Small (1x1)</strong>
                <code className="code-block mt-2">grid-column: span 1; grid-row: span 1;</code>
              </div>
              <div>
                <strong style={{ fontFamily: "'Manrope', sans-serif" }}>Wide (2x1)</strong>
                <code className="code-block mt-2">grid-column: span 2; grid-row: span 1;</code>
              </div>
              <div>
                <strong style={{ fontFamily: "'Manrope', sans-serif" }}>Tall (1x2)</strong>
                <code className="code-block mt-2">grid-column: span 1; grid-row: span 2;</code>
              </div>
              <div>
                <strong style={{ fontFamily: "'Manrope', sans-serif" }}>Large (2x2)</strong>
                <code className="code-block mt-2">grid-column: span 2; grid-row: span 2;</code>
              </div>
            </div>
          </div>
        </section>

        {/* Animations */}
        <section className="mb-20">
          <h2 className="section-heading">Animacje i Interakcje</h2>

          <div className="styleguide-card mb-6">
            <h3 className="card-title">Entry Animation</h3>
            <p className="card-text mb-4">
              Kafelki wjeżdżają od dołu z efektem bounce i staggered delay:
            </p>
            <code className="code-block">
              {`@keyframes tileEntry {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

animation: tileEntry 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
animation-delay: calc(index * 0.05s);`}
            </code>
          </div>

          <div className="styleguide-card mb-6">
            <h3 className="card-title">Hover State</h3>
            <p className="card-text mb-4">
              Element podnosi się, rotuje i pokazuje kolor tła:
            </p>
            <code className="code-block">
              {`:hover {
  transform: translateY(-12px) rotate(0.5deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  z-index: 10;
}

/* Background color fade in */
.tile-hover-effect {
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

:hover .tile-hover-effect {
  opacity: 1;
}`}
            </code>
          </div>

          <div className="styleguide-card mb-6">
            <h3 className="card-title">Expanded State (dla elementów z sublinks)</h3>
            <p className="card-text mb-4">
              Kafelek pozostaje podniesiony, label się zmniejsza i przesuwa, sublinki wlatują:
            </p>
            <code className="code-block">
              {`.expanded {
  z-index: 20;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.16);
  transform: translateY(-12px) scale(1.02);
}

.expanded .tile-label {
  transform: translateY(-10px);
  font-size: clamp(14px, 2vw, 18px);
}

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

animation-delay: calc(index * 0.1s);`}
            </code>
          </div>

          <div className="styleguide-card">
            <h3 className="card-title">Easing Functions</h3>
            <p className="card-text mb-4">
              Używane timing functions dla spójnego ruchu:
            </p>
            <div className="space-y-3">
              <div>
                <strong style={{ fontFamily: "'Manrope', sans-serif" }}>Bounce Effect</strong>
                <code className="code-block mt-1">cubic-bezier(0.34, 1.56, 0.64, 1)</code>
                <p className="text-sm text-gray-600 mt-1">Entry animations, expanded state</p>
              </div>
              <div>
                <strong style={{ fontFamily: "'Manrope', sans-serif" }}>Smooth</strong>
                <code className="code-block mt-1">ease</code>
                <p className="text-sm text-gray-600 mt-1">Color transitions, subtle movements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="mb-20">
          <h2 className="section-heading">Tworzenie Nowych Elementów</h2>

          <div className="styleguide-card mb-6">
            <h3 className="card-title">1. Podstawowy Kafelek</h3>
            <code className="code-block">
              {`<button className="puzzle-tile tile-small">
  <div className="tile-content">
    <span className="tile-label" style={{ fontFamily: "'Manrope', sans-serif" }}>
      Nazwa
    </span>
  </div>
  <div className="tile-hover-effect"
       style={{ backgroundColor: '#FF6B6B' }} />
</button>`}
            </code>
          </div>

          <div className="styleguide-card mb-6">
            <h3 className="card-title">2. Kafelek z Sublinks</h3>
            <code className="code-block">
              {`<button className="puzzle-tile tile-wide has-sublinks expanded">
  <div className="tile-content">
    <span className="tile-label">Moduł</span>

    <div className="sub-links" style={{ opacity: 1 }}>
      <a href="#link1" className="sub-link">Podstrona 1</a>
      <a href="#link2" className="sub-link">Podstrona 2</a>
    </div>

    <div className="expand-indicator">
      <svg width="20" height="20" viewBox="0 0 20 20">
        <path d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"/>
      </svg>
    </div>
  </div>
  <div className="tile-hover-effect"
       style={{ backgroundColor: '#4ECDC4' }} />
</button>`}
            </code>
          </div>

          <div className="styleguide-card mb-6">
            <h3 className="card-title">3. Card Component (dla innych sekcji)</h3>
            <code className="code-block">
              {`<div className="bg-white rounded-2xl p-8 shadow-sm">
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
</div>`}
            </code>
          </div>

          <div className="styleguide-card">
            <h3 className="card-title">4. Button Component</h3>
            <code className="code-block">
              {`<button style={{
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
}}>
  Przycisk
</button>

/* Hover state - add: */
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);`}
            </code>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-20">
          <h2 className="section-heading">Zasady i Best Practices</h2>

          <div className="styleguide-card">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg mb-2" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
                  ✓ Zawsze używaj określonych fontów
                </h4>
                <p className="text-gray-600" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  Archivo Black dla głównych nagłówków, Manrope dla wszystkiego innego. Nie mieszaj z innymi fontami.
                </p>
              </div>

              <div>
                <h4 className="text-lg mb-2" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
                  ✓ Używaj animacji przy każdej interakcji
                </h4>
                <p className="text-gray-600" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  Hover, click, expand - każda akcja powinna mieć response wizualny. Min. transform + shadow.
                </p>
              </div>

              <div>
                <h4 className="text-lg mb-2" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
                  ✓ Kolory są sygnałem akcji
                </h4>
                <p className="text-gray-600" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  Domyślnie elementy są białe/neutralne. Kolor pojawia się przy hover/active state jako feedback.
                </p>
              </div>

              <div>
                <h4 className="text-lg mb-2" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
                  ✓ Border radius = 12-16px
                </h4>
                <p className="text-gray-600" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  Kafelki 16px, mniejsze elementy (buttons, cards) 12px. Utrzymuj spójność.
                </p>
              </div>

              <div>
                <h4 className="text-lg mb-2" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
                  ✓ Box shadows są subtelne
                </h4>
                <p className="text-gray-600" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  Default: 0 2px 8px rgba(0,0,0,0.04), Hover: 0 20px 40px rgba(0,0,0,0.12)
                </p>
              </div>

              <div>
                <h4 className="text-lg mb-2" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
                  ✗ Unikaj ikon
                </h4>
                <p className="text-gray-600" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  Wyjątek: chevron dla expand indicator. Wszystko inne komunikuj przez typografię i kolor.
                </p>
              </div>

              <div>
                <h4 className="text-lg mb-2" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
                  ✗ Nie przeciążaj kolorami
                </h4>
                <p className="text-gray-600" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  Tło aplikacji powinno być neutral (#f5f5f7). Kolory są akcentami, nie dominują w spoczynku.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Code Reference */}
        <section className="mb-20">
          <h2 className="section-heading">Quick Reference: CSS Variables</h2>

          <div className="styleguide-card">
            <h3 className="card-title">Zdefiniuj w swoim projekcie</h3>
            <code className="code-block">
              {`:root {
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

  /* Transitions */
  --transition-base: 0.3s ease;
  --transition-bounce: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}`}
            </code>
          </div>
        </section>

      </div>

      <style>{`
        .section-heading {
          font-family: 'Archivo Black', sans-serif;
          font-size: clamp(32px, 5vw, 48px);
          text-transform: uppercase;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .styleguide-card {
          background: white;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .card-title {
          font-family: 'Manrope', sans-serif;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a1a1a;
        }

        .card-text {
          font-family: 'Manrope', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: #666;
        }

        .code-block {
          display: block;
          background: #1a1a1a;
          color: #4ECDC4;
          padding: 16px;
          border-radius: 8px;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 13px;
          line-height: 1.6;
          overflow-x: auto;
          white-space: pre;
        }

        .font-sample {
          padding: 24px;
          background: #f9f9f9;
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
}
