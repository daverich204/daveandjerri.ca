"use client";

import React from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const Paper = ({ children }) => {
  const rootClassName = `h-full min-w-[50%] max-w-sm px-5 p-8 sm-py-6 bg-white border border-gray-200 rounded-lg backdrop-blur-sm shadow bg-plum-400/90 dark:bg-navy-500/90 text-white dark:text-white dark:border-gray-700 transition-colors`;

  return (
    <div className={rootClassName}>
      {children}
    </div>
  );
}

export default Paper;
