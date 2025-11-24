function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-500">
          UI Component Library
        </p>
        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
          Lightning-fast UI building blocks
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl">
          Drop in opinionated yet flexible components to ship modern experiences
          without fighting your design system. Build once, reuse everywhere.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">
            Explore components
          </button>
          <button className="rounded-full border border-slate-200 px-8 py-3 text-sm font-semibold text-indigo-600 transition hover:border-indigo-300">
            View docs
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
