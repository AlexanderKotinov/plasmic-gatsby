// @ts-ignore
import React, { ReactNode } from 'react';

export interface MenuProps {
  children?: ReactNode;
  className?: string;
}

export function Menu({ children, className }: MenuProps) {
  return (
    <div className={className}>
      <p>Main menu</p>
      <div>{children}</div>
    </div>
  );
}
