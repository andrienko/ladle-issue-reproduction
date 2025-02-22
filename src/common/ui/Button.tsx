import React from 'react';
import { cn } from '@common/lib';

// ---

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.RefAttributes<HTMLButtonElement>;

function ButtonRoot({ className, type = 'button', ...props }: ButtonProps) {
  const usedClassName = cn(
    'inline-flex select-none justify-center items-center gap-4 align-center',
    'border border-transparent whitespace-nowrap rounded-md px-4 py-2 shadow-sm',
    'bg-primary text-primary-foreground disabled:opacity-40 enabled:hover:bg-primary/95 enabled:active:bg-primary/90',
    className,
  );
  return <button type={type} className={usedClassName} {...props} />;
}
ButtonRoot.displayName = 'Button';

// ---

type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement>;

function ButtonGroup({ className, ...rest }: ButtonGroupProps) {
  return <div className={cn('inline-flex gap-4 items-center', className)} {...rest} />;
}
ButtonGroup.displayName = 'Button.Group';

// ---

const Button = ButtonRoot as typeof ButtonRoot & {
  Group: typeof ButtonGroup;
};
ButtonRoot.Group = ButtonGroup;

export default Button;
