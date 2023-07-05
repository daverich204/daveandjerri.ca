"use client";

import React from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const Paper = ({ children }) => {
  const rootClassName = `min-w-[40%] max-w-sm overflow-y-auto px-5 p-8 sm-py-6 border border-plum-500 rounded-lg backdrop-blur-sm shadow bg-plum-500/70 dark:bg-navy-500/70 text-white dark:text-white dark:border-navy-700 transition-colors`;

  return (
    <div className={rootClassName}>
      {children}
    </div>
  );
}

export default Paper;
