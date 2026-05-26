import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  target,
  rel,
  type = 'button',
  ...props
}) => {
  const buttonClasses = twMerge(
    clsx(
      "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
      {
        // Primary: Modern royal blue with a subtle gradient and shadow glow
        "bg-gradient-to-r from-brand-600 to-blue-500 text-white shadow-sm shadow-brand-600/10 hover:shadow-md hover:shadow-brand-600/20 hover:brightness-105":
          variant === 'primary',
        // Secondary: Light gray slate border
        "bg-slate-100 text-slate-800 hover:bg-slate-200/80 border border-slate-200/50":
          variant === 'secondary',
        // Outline: Classic thin slate border
        "bg-transparent text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-slate-300":
          variant === 'outline',
        // Ghost: Transparent hover accent
        "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900":
          variant === 'ghost',
      },
      {
        "px-4 py-2 text-xs": size === 'sm',
        "px-5 py-2.5 text-sm": size === 'md',
        "px-7 py-3.5 text-base": size === 'lg',
      },
      className
    )
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target={target}
        rel={rel}
        {...(props as any)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
