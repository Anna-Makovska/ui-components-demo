import { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'

const variantStyles = {
  primary:
    'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:ring-indigo-500',
  secondary:
    'border border-slate-300 text-indigo-600 hover:border-indigo-400 hover:text-indigo-500',
} as const

type Variant = keyof typeof variantStyles

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
}

const baseStyles =
  'inline-flex min-w-[150px] items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 disabled:cursor-not-allowed disabled:opacity-60'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', ...props }, ref) => {
    const selectedVariant = variantStyles[variant]
    const mergedClassName = [baseStyles, selectedVariant, className]
      .filter(Boolean)
      .join(' ')

    return <button ref={ref} className={mergedClassName} {...props} />
  },
)

Button.displayName = 'Button'

