// src/components/common/Button.jsx
export default function Button({
                                   children,
                                   variant = 'primary',
                                   size = 'md',
                                   className = '',
                                   ...props
                               }) {
    const baseStyles = 'font-medium transition-all duration-300 rounded-lg'

    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95',
        secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-slate-700 dark:text-white',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800',
        ghost: 'text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 dark:text-blue-400',
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
