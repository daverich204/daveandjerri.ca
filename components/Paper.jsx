"use client";

import React from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const Paper = ({ children }) => {
  const rootClassName = `min-w-[33%] max-w-sm px-5 p-8 sm-py-6 border border-gray-200 rounded-lg backdrop-blur-sm shadow bg-plum-500/90 dark:bg-navy-500/90 text-white dark:text-white dark:border-gray-700 transition-colors`;

  return (
    <div className={rootClassName}>
      {children}
    </div>
  );
}

export default Paper;
