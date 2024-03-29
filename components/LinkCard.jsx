import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const LinkCard = ({ link, target, title, text, linkProps }) => {
  const rootLinkClass = "group rounded-lg border border-transparent px-5 py-4 sm:py-0 w-full";
  const containerClass = `${inter.className} h-full sm:max-w-full px-5 py-4 border border-gray-200 rounded-lg text-white backdrop-blur-sm shadow bg-plum-600/50 dark:bg-navy-900/50 border-plum-700 dark:border-navy-700 dark:text-white transition-colors hover:bg-plum-300 hover:text-black hover:text-white dark:hover:bg-navy-900 dark:hover:text-white`
  const titleClass = `${inter.className} mb-3 text-2xl font-semibold`
  const bodyClass = `${inter.className} m-0 max-w-[30ch] text-sm`

  return (
    <Link href={link} className={rootLinkClass} {...linkProps}>
      <div className={containerClass}>
        <h5 className={titleClass}>
          {`${title} `}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h5>
        <p className={bodyClass}>
          {text}
        </p>
      </div>
    </Link>
  )
}

export default LinkCard