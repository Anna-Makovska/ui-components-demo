import { Button } from './Button'

export function Hero() {
  return (
    <section className="mx-auto max-w-4xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-500">
        Component Library
      </p>
      <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
        Build interfaces faster with ready-to-ship blocks
      </h1>
      <p className="mt-4 text-lg text-slate-600 sm:text-xl">
        Opinionated components, clean API, and composable Tailwind styles so you
        can focus on shipping product, not reinventing UI.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button>Get started</Button>
        <Button variant="secondary">View components</Button>
      </div>
    </section>
  )
}

