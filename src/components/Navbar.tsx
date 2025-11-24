import { useState } from 'react'

const navItems = ['Home', 'Components', 'Pricing', 'Docs']

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="text-lg font-semibold text-slate-900">UI Library</div>
        <button
          type="button"
          className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <>
                <path d="M6 18L18 6" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="transition hover:text-slate-900">
              {item}
            </a>
          ))}
          <a
            href="#"
            className="rounded-full bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-500"
          >
            Get access
          </a>
        </div>
      </nav>
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} border-t border-slate-200 bg-white px-4 pb-4`}
      >
        <div className="flex flex-col gap-3 text-sm font-semibold text-slate-700">
          {navItems.map((item) => (
            <a key={item} href="#" className="rounded-lg px-3 py-2 hover:bg-slate-50">
              {item}
            </a>
          ))}
          <a
            href="#"
            className="rounded-full bg-indigo-600 px-5 py-2 text-center text-white"
          >
            Get access
          </a>
        </div>
      </div>
    </header>
  )
}

