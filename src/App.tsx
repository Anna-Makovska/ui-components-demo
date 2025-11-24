import { Button } from './components/Button'
import { InputField } from './components/InputField'
import { Card } from './components/Card'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-6xl space-y-12 px-4 py-12">
        <Hero />

        <section className="space-y-6 rounded-3xl bg-white p-8 shadow-lg">
          <header className="space-y-2 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-500">
              Component sampler
            </p>
            <h2 className="text-2xl font-semibold text-slate-900">
              Quickly preview each building block
            </h2>
            <p className="text-sm text-slate-600">
              Every component ships with sensible defaults and accessible UX patterns so you
              can plug them into any flow.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-sm font-semibold text-slate-500">Form input</h3>
              <p className="text-xs text-slate-500">Inline label + validation messaging</p>
              <div className="mt-4">
                <InputField
                  label="Email address"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  error="Please enter a valid email address."
                />
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-sm font-semibold text-slate-500">Buttons</h3>
              <p className="text-xs text-slate-500">Primary and secondary states</p>
              <div className="mt-4 flex flex-wrap gap-4">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
              </div>
            </article>
          </div>

          <article className="rounded-2xl border border-dashed border-slate-200 p-6">
            <Card
              title="Starter card"
              description="Use cards to group related content like stats, settings, or quick actions."
            >
              <Button className="mt-2 w-full">Call to action</Button>
            </Card>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
