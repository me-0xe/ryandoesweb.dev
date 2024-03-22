'use client';

import clsx from 'clsx';
import { useThemeStore } from '@/store/theme';
import { useEffect } from 'react';

export default function ThemeProvider({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { mode } = useThemeStore();

  return (
    <div className={clsx({ 'theme-provider': true, dark: !mode || mode === 'dark' })}>
      {children}
    </div>
  );
}
