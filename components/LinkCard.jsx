import React from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const LinkCard = ({ link, target, title, text, linkProps }) => {
  return (
    <a href={link}
    className={"group rounded-lg border border-transparent px-5 py-4 sm:py-0 w-full"}
     {...linkProps}
    >
      <div
        className={`${inter.className} h-full sm:max-w-full px-5 py-4 bg-white border border-gray-200 rounded-lg backdrop-blur-2xl text-white shadow bg-plum-400/50 dark:bg-navy-900/50 border-plum-700 dark:border-navy-700 dark:text-white transition-colors hover:bg-plum-300 hover:text-black hover:text-white dark:hover:bg-navy-900 dark:hover:text-white`}
      >
        <h5 className={`${inter.className} mb-3 text-2xl font-semibold`}>
          {`${title} `}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h5>
        <p className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}>
          {text}
        </p>
      </div>
    </a>
  )
}

export default LinkCard