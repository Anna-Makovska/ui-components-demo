import { Button } from './components/Button'

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </div>
  )
}

export default App
