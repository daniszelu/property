import { useState } from 'react'

const listings = [
  {
    id: 1,
    title: 'Apartament na Mokotowie',
    location: 'Mokotów, Warszawa',
    price: '1 250 000 zł',
    area: '87 m²',
    rooms: 3,
    type: 'Apartament',
    badge: 'Nowe',
  },
  {
    id: 2,
    title: 'Dom z ogrodem w Wilanowie',
    location: 'Wilanów, Warszawa',
    price: '3 490 000 zł',
    area: '220 m²',
    rooms: 5,
    type: 'Dom',
    badge: 'Polecane',
  },
  {
    id: 3,
    title: 'Kawalerka na Woli',
    location: 'Wola, Warszawa',
    price: '560 000 zł',
    area: '38 m²',
    rooms: 1,
    type: 'Kawalerka',
    badge: null,
  },
  {
    id: 4,
    title: 'Penthouse na Śródmieściu',
    location: 'Śródmieście, Warszawa',
    price: '5 200 000 zł',
    area: '175 m²',
    rooms: 4,
    type: 'Penthouse',
    badge: 'Ekskluzywne',
  },
  {
    id: 5,
    title: 'Mieszkanie na Żoliborzu',
    location: 'Żoliborz, Warszawa',
    price: '980 000 zł',
    area: '65 m²',
    rooms: 3,
    type: 'Mieszkanie',
    badge: null,
  },
  {
    id: 6,
    title: 'Loft w centrum Łodzi',
    location: 'Śródmieście, Łódź',
    price: '720 000 zł',
    area: '110 m²',
    rooms: 2,
    type: 'Loft',
    badge: 'Nowe',
  },
]

const stats = [
  { value: '1 200+', label: 'Sprzedanych nieruchomości' },
  { value: '18 lat', label: 'Doświadczenia na rynku' },
  { value: '98%', label: 'Zadowolonych klientów' },
  { value: '45+', label: 'Ekspertów w zespole' },
]

const btn =
  'inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-3 bg-crimson text-white border-2 border-crimson rounded text-[15px] font-medium cursor-pointer no-underline transition-colors whitespace-nowrap hover:bg-crimson-dark hover:border-crimson-dark'
const btnSm =
  'inline-flex items-center justify-center gap-2 px-[18px] py-2 bg-crimson text-white border-2 border-crimson rounded text-[13px] font-medium cursor-pointer no-underline transition-colors whitespace-nowrap hover:bg-crimson-dark hover:border-crimson-dark'
const btnOutline =
  'inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-3 bg-transparent text-crimson border-2 border-crimson rounded text-[15px] font-medium cursor-pointer no-underline transition-colors text-center hover:bg-crimson-light'

const inputCls =
  'px-3.5 py-[11px] border-[1.5px] border-[#e8e4de] rounded bg-white text-[15px] text-[#1a1a1a] outline-none transition-all placeholder:text-[#8a8a8a] focus:border-crimson focus:ring-2 focus:ring-crimson/20 resize-none'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('Wszystkie')

  const filters = ['Wszystkie', 'Mieszkanie', 'Dom', 'Apartament', 'Kawalerka']

  const filtered =
    activeFilter === 'Wszystkie'
      ? listings
      : listings.filter(
          (l) => l.type === activeFilter || l.type.includes(activeFilter),
        )

  const statBorder = (i: number) =>
    [
      'border-[rgba(255,255,255,0.15)]',
      i % 2 === 0 ? 'border-r' : '',
      i < 2 ? 'border-b md:border-b-0' : '',
      i === 1 ? 'md:border-r' : '',
    ]
      .filter(Boolean)
      .join(' ')

  return (
    <>
      {/* NAV */}
      <header className='sticky top-0 z-50 bg-[rgba(250,250,248,0.92)] backdrop-blur-md border-b border-[#e8e4de]'>
        <div className='max-w-[1200px] mx-auto px-6 h-[68px] flex items-center gap-8'>
          <a
            href='#'
            className='flex items-center gap-2.5 text-[#1a1a1a] no-underline text-[17px] font-normal tracking-[0.5px] shrink-0'
          >
            <svg
              width='28'
              height='28'
              viewBox='0 0 28 28'
              fill='none'
              aria-hidden='true'
              className='text-crimson'
            >
              <path
                d='M14 3L26 13v12H18v-7h-8v7H2V13L14 3z'
                fill='currentColor'
                opacity='.15'
              />
              <path
                d='M14 3L26 13v12H18v-7h-8v7H2V13L14 3z'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinejoin='round'
              />
            </svg>
            <span className='font-bold'>
              <span className='text-crimson'>pro</span>-perty.pl
            </span>
          </a>

          {/* Desktop nav */}
          <nav className='hidden md:flex items-center gap-2 ml-auto'>
            <a
              href='#listings'
              className='text-[#5c5c5c] text-[15px] px-3.5 py-1.5 rounded transition-colors hover:text-[#1a1a1a] hover:bg-[#f4f2ee]'
            >
              Oferty
            </a>
            <a
              href='#about'
              className='text-[#5c5c5c] text-[15px] px-3.5 py-1.5 rounded transition-colors hover:text-[#1a1a1a] hover:bg-[#f4f2ee]'
            >
              O nas
            </a>
            <a
              href='#contact'
              className='text-[#5c5c5c] text-[15px] px-3.5 py-1.5 rounded transition-colors hover:text-[#1a1a1a] hover:bg-[#f4f2ee]'
            >
              Kontakt
            </a>
            <a href='#contact' className={btnSm}>
              Umów spotkanie
            </a>
          </nav>

          {/* Burger */}
          <button
            className='flex md:hidden flex-col justify-center gap-[5px] w-9 h-9 bg-transparent border-0 cursor-pointer ml-auto p-1'
            aria-label='Menu'
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className='block h-0.5 bg-[#1a1a1a] rounded' />
            <span className='block h-0.5 bg-[#1a1a1a] rounded' />
            <span className='block h-0.5 bg-[#1a1a1a] rounded' />
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className='md:hidden bg-[#fafaf8] border-b border-[#e8e4de] flex flex-col px-6 pb-5 pt-3 gap-1'>
            <a
              href='#listings'
              className='text-[#5c5c5c] text-[15px] py-2.5 transition-colors hover:text-[#1a1a1a]'
            >
              Oferty
            </a>
            <a
              href='#about'
              className='text-[#5c5c5c] text-[15px] py-2.5 transition-colors hover:text-[#1a1a1a]'
            >
              O nas
            </a>
            <a
              href='#contact'
              className='text-[#5c5c5c] text-[15px] py-2.5 transition-colors hover:text-[#1a1a1a]'
            >
              Kontakt
            </a>
            <a href='#contact' className={`${btnSm} mt-2 justify-center`}>
              Umów spotkanie
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className='max-w-[1200px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
        <div>
          <p className='text-[13px] font-semibold tracking-[1.2px] uppercase text-crimson mb-4 mt-0'>
            Biuro Nieruchomości · Wrocław
          </p>
          <h1 className='mb-5'>
            Znajdź swoje
            <br />
            <em className='not-italic text-crimson'>wymarzone miejsce</em>
          </h1>
          <p className='text-[17px] leading-[1.7] text-[#5c5c5c] mb-9 max-w-[480px]'>
            Pomagamy kupić, sprzedać i wynająć nieruchomości w najlepszych
            lokalizacjach. Profesjonalnie, szybko, z pełnym wsparciem.
          </p>
          <div className='flex gap-3.5'>
            <a href='#listings' className={`${btn} flex-1 sm:flex-none`}>
              Przeglądaj oferty
            </a>
            <a href='#contact' className={`${btnOutline} flex-1 sm:flex-none`}>
              Skontaktuj się
            </a>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.06)] overflow-hidden w-full max-w-[420px] border border-[#e8e4de]'>
            <svg
              viewBox='0 0 400 260'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              className='block w-full h-auto'
            >
              <rect width='400' height='260' fill='#f0ede8' />
              <rect
                x='60'
                y='80'
                width='280'
                height='160'
                rx='4'
                fill='#e0dbd4'
              />
              <rect x='140' y='80' width='120' height='160' fill='#d4cec6' />
              <rect x='170' y='160' width='60' height='80' fill='#c8c2ba' />
              <polygon points='200,30 320,100 80,100' fill='#b8b0a6' />
              <rect x='80' y='96' width='240' height='8' fill='#a8a09a' />
            </svg>
            <div className='px-6 py-5'>
              <span className='inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-[0.3px] bg-crimson-light text-crimson'>
                Polecane
              </span>
              <div className='text-[17px] font-semibold text-[#1a1a1a] mt-2.5 mb-1'>
                Dom z ogrodem w Wilanowie
              </div>
              <div className='text-[13px] text-[#8a8a8a] mb-3'>
                220 m² · 5 pokoi · Wilanów
              </div>
              <div className='text-[22px] font-bold text-crimson'>
                3 490 000 zł
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className='bg-crimson text-white grid grid-cols-2 md:grid-cols-4'>
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center justify-center py-9 px-6 text-center ${statBorder(i)}`}
          >
            <strong className='text-[32px] font-bold leading-none mb-1.5'>
              {s.value}
            </strong>
            <span className='text-[13px] opacity-80 tracking-[0.3px]'>
              {s.label}
            </span>
          </div>
        ))}
      </section>

      {/* LISTINGS */}
      <section
        className='py-20 px-6 max-w-[1200px] mx-auto w-full'
        id='listings'
      >
        <div className='text-center mb-12'>
          <h2 className='mb-2.5'>Aktualne oferty</h2>
          <p className='text-[16px] text-[#8a8a8a]'>
            Wybrane nieruchomości z najlepszych lokalizacji
          </p>
        </div>
        <div className='flex gap-2 flex-wrap justify-center mb-10'>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full border-[1.5px] text-sm cursor-pointer transition-colors font-[inherit] ${
                activeFilter === f
                  ? 'bg-crimson border-crimson text-white'
                  : 'bg-white border-[#e8e4de] text-[#5c5c5c] hover:border-crimson hover:text-crimson'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filtered.map((listing) => (
            <div
              key={listing.id}
              className='bg-white rounded-[10px] border border-[#e8e4de] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-[250ms] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.04)] hover:-translate-y-0.5'
            >
              <div className='relative overflow-hidden'>
                <svg
                  viewBox='0 0 400 240'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  className='block w-full h-auto'
                >
                  <rect width='400' height='240' fill='#f5f3f0' />
                  <rect
                    x='60'
                    y='70'
                    width='280'
                    height='150'
                    rx='2'
                    fill='#e8e4de'
                  />
                  <rect
                    x='140'
                    y='70'
                    width='120'
                    height='150'
                    fill='#ddd9d2'
                  />
                  <rect x='168' y='155' width='64' height='65' fill='#d0cbc3' />
                  <polygon points='200,22 328,90 72,90' fill='#c8c2ba' />
                </svg>
                {listing.badge && (
                  <span className='absolute top-3.5 left-3.5 inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-[0.3px] bg-crimson text-white z-10'>
                    {listing.badge}
                  </span>
                )}
              </div>
              <div className='px-5 pt-[18px] pb-5'>
                <div className='text-[12px] font-semibold tracking-[0.8px] uppercase text-crimson mb-1.5'>
                  {listing.type}
                </div>
                <h3 className='text-[16px] font-semibold text-[#1a1a1a] mb-2 leading-snug'>
                  {listing.title}
                </h3>
                <div className='flex items-center gap-1.5 text-[13px] text-[#8a8a8a] mb-3'>
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    aria-hidden='true'
                  >
                    <path d='M12 21s-8-7.3-8-13a8 8 0 1 1 16 0c0 5.7-8 13-8 13z' />
                    <circle cx='12' cy='8' r='3' />
                  </svg>
                  {listing.location}
                </div>
                <div className='flex gap-3.5 text-[13px] text-[#8a8a8a] mb-4 pb-4 border-b border-[#e8e4de]'>
                  <span>{listing.area}</span>
                  <span>
                    {listing.rooms} {listing.rooms === 1 ? 'pokój' : 'pokoje'}
                  </span>
                </div>
                <div className='flex items-center justify-between gap-3'>
                  <span className='text-[18px] font-bold text-[#1a1a1a]'>
                    {listing.price}
                  </span>
                  <a href='#contact' className={btnSm}>
                    Szczegóły
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className='bg-[#f4f2ee] border-y border-[#e8e4de]' id='about'>
        <div className='max-w-[1200px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-start'>
          <div>
            <p className='text-[13px] font-semibold tracking-[1.2px] uppercase text-crimson mb-3.5 mt-0'>
              O nas
            </p>
            <h2 className='mb-5'>
              18 lat budujemy
              <br />
              zaufanie klientów
            </h2>
            <p className='text-[#5c5c5c] leading-[1.75] mb-4'>
              pro-perty.pl to jedno z wiodących biur nieruchomości w Polsce.
              Specjalizujemy się w nieruchomościach premium w Warszawie i
              największych miastach kraju.
            </p>
            <p className='text-[#5c5c5c] leading-[1.75] mb-4'>
              Nasz zespół 45 doświadczonych agentów oferuje pełne wsparcie na
              każdym etapie transakcji — od wyceny, przez negocjacje, aż po
              finalizację umowy.
            </p>
            <a href='#contact' className={`${btn} mt-2`}>
              Poznaj nasz zespół
            </a>
          </div>
          <div className='flex flex-col gap-6'>
            {[
              {
                icon: '🏆',
                title: 'Profesjonalna wycena',
                desc: 'Dokładna analiza rynku i indywidualna wycena każdej nieruchomości.',
              },
              {
                icon: '🤝',
                title: 'Pełne wsparcie prawne',
                desc: 'Współpracujemy z kancelariami notarialnymi i prawnymi.',
              },
              {
                icon: '📍',
                title: 'Znajomość rynku',
                desc: 'Działamy lokalnie, znamy każdą dzielnicę i jej potencjał.',
              },
              {
                icon: '🔑',
                title: 'Szybka sprzedaż',
                desc: 'Średni czas sprzedaży nieruchomości w naszym biurze to 47 dni.',
              },
            ].map((f) => (
              <div key={f.title} className='flex gap-4 items-start'>
                <div className='text-[22px] w-11 h-11 flex items-center justify-center bg-crimson-light rounded-[10px] shrink-0'>
                  {f.icon}
                </div>
                <div>
                  <h4 className='mb-1'>{f.title}</h4>
                  <p className='text-[14px] text-[#8a8a8a] leading-[1.6]'>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className='py-20 px-6 max-w-[1200px] mx-auto w-full'
        id='contact'
      >
        <div className='text-center mb-12'>
          <h2 className='mb-2.5'>Skontaktuj się z nami</h2>
          <p className='text-[16px] text-[#8a8a8a]'>
            Odpowiadamy w ciągu 24 godzin. Zapraszamy też do naszego biura.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-[1fr_340px] gap-[60px] items-start'>
          <form
            className='flex flex-col gap-4'
            onSubmit={(e) => e.preventDefault()}
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1.5'>
                <label
                  htmlFor='fname'
                  className='text-[13px] font-medium text-[#1a1a1a]'
                >
                  Imię i nazwisko
                </label>
                <input
                  id='fname'
                  type='text'
                  placeholder='Jan Kowalski'
                  className={inputCls}
                />
              </div>
              <div className='flex flex-col gap-1.5'>
                <label
                  htmlFor='femail'
                  className='text-[13px] font-medium text-[#1a1a1a]'
                >
                  Adres e-mail
                </label>
                <input
                  id='femail'
                  type='email'
                  placeholder='jan@example.com'
                  className={inputCls}
                />
              </div>
            </div>
            <div className='flex flex-col gap-1.5'>
              <label
                htmlFor='fphone'
                className='text-[13px] font-medium text-[#1a1a1a]'
              >
                Telefon
              </label>
              <input
                id='fphone'
                type='tel'
                placeholder='+48 600 000 000'
                className={inputCls}
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label
                htmlFor='fmsg'
                className='text-[13px] font-medium text-[#1a1a1a]'
              >
                Wiadomość
              </label>
              <textarea
                id='fmsg'
                rows={4}
                placeholder='Czego szukasz? Opisz swoje potrzeby...'
                className={`${inputCls} resize-y`}
              />
            </div>
            <button type='submit' className={`${btn} w-full`}>
              Wyślij wiadomość
            </button>
          </form>
          <div className='flex flex-col gap-7'>
            <div>
              <strong className='block text-[14px] font-semibold text-[#1a1a1a] mb-1'>
                Adres biura
              </strong>
              <p className='text-[15px] text-[#5c5c5c] leading-[1.6]'>
                ul. Nowy Świat 45/3
                <br />
                00-042 Warszawa
              </p>
            </div>
            <div>
              <strong className='block text-[14px] font-semibold text-[#1a1a1a] mb-1'>
                Telefon
              </strong>
              <p className='text-[15px] text-[#5c5c5c] leading-[1.6]'>
                <a
                  href='tel:+48221234567'
                  className='text-crimson hover:underline'
                >
                  +48 22 123 45 67
                </a>
              </p>
            </div>
            <div>
              <strong className='block text-[14px] font-semibold text-[#1a1a1a] mb-1'>
                E-mail
              </strong>
              <p className='text-[15px] text-[#5c5c5c] leading-[1.6]'>
                <a
                  href='mailto:biuro@pro-perty.pl'
                  className='text-crimson hover:underline'
                >
                  biuro@pro-perty.pl
                </a>
              </p>
            </div>
            <div>
              <strong className='block text-[14px] font-semibold text-[#1a1a1a] mb-1'>
                Godziny otwarcia
              </strong>
              <p className='text-[15px] text-[#5c5c5c] leading-[1.6]'>
                Pn–Pt: 9:00–18:00
                <br />
                Sb: 10:00–14:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='bg-[#1a1a1a] text-white/70 mt-auto'>
        <div className='max-w-[1200px] mx-auto px-6 py-7 flex items-center justify-between gap-6 flex-wrap'>
          <a
            href='#'
            className='flex items-center gap-2.5 text-white/90 no-underline text-[17px] font-normal tracking-[0.5px]'
          >
            <svg
              width='22'
              height='22'
              viewBox='0 0 28 28'
              fill='none'
              aria-hidden='true'
              className='text-crimson'
            >
              <path
                d='M14 3L26 13v12H18v-7h-8v7H2V13L14 3z'
                fill='currentColor'
                opacity='.15'
              />
              <path
                d='M14 3L26 13v12H18v-7h-8v7H2V13L14 3z'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinejoin='round'
              />
            </svg>
            <span>
              <span className='text-crimson font-bold'>pro</span>-perty.pl
            </span>
          </a>
          <p className='text-[13px] m-0'>
            © 2026 pro-perty.pl. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
