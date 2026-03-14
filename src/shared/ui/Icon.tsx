import React from 'react';

export interface IconProps {
  name: string;
  className?: string;
  type?: 'tabler' | 'iconify';
}

export function Icon({ name, className = '', type = 'tabler' }: IconProps) {
  if (type === 'iconify') {
    // We cast to any because iconify-icon acts as a custom web component
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Iconify = 'iconify-icon' as any;
    return <Iconify icon={name} class={className}></Iconify>;
  }

  // Uses Tabler Icons Webfont mapping (ti ti-[name])
  return <i className={`ti ti-${name} ${className}`}></i>;
}
