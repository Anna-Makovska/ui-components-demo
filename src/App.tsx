import { Button } from './components/Button'
import { InputField } from './components/InputField'
import { Card } from './components/Card'

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-8">
        <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-sm">
          <InputField
            label="Email address"
            type="email"
            name="email"
            placeholder="you@example.com"
            error="Please enter a valid email address."
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
        <Card
          title="Starter card"
          description="Use cards to group related content like stats, settings, or quick actions."
        >
          <Button className="mt-2 w-full">Call to action</Button>
        </Card>
      </div>
    </div>
  )
}

export default App
