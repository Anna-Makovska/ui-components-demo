import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const fieldId = id ?? props.name ?? `input-${label.replace(/\s+/g, '').toLowerCase()}`
    const inputClasses = [
      'w-full rounded-xl border px-4 py-3 text-sm font-medium text-slate-900 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-50',
      error ? 'border-rose-400 focus:ring-rose-500' : 'border-slate-300 hover:border-slate-400',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <label className="flex w-full flex-col gap-2 text-left" htmlFor={fieldId}>
        <span className="text-sm font-semibold text-slate-700">{label}</span>
        <input
          ref={ref}
          id={fieldId}
          className={inputClasses}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          {...props}
        />
        {error ? (
          <span id={`${fieldId}-error`} className="text-xs font-medium text-rose-500">
            {error}
          </span>
        ) : null}
      </label>
    )
  },
)

InputField.displayName = 'InputField'

