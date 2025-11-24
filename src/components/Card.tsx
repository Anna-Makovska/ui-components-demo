import type { PropsWithChildren } from 'react'

export type CardProps = PropsWithChildren<{
  title: string
  description: string
}>

export function Card({ title, description, children }: CardProps) {
  return (
    <article className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="mb-4 space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="text-sm text-slate-600">{description}</p>
      </header>
      {children}
    </article>
  )
}

