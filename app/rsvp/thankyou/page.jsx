'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Paper from '../../../components/Paper';

const ThankYouPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-end justify-center lg:p-24">
      <Paper>
        <div className="relative mb-12">
          <h2 className={"text-2xl"}> Thank you....</h2>
        </div>

        <form className={"flex-col mt-12"}>
          <div className={"relative"}>
            <p className={"mt-12 pr-4"}>Thank you for RSVP&apos;ing</p>
          </div>

          <div className={"relative mt-6 text-center w-full"}>
            <Link href={"/"} className={"group rounded-lg border border-transparent px-5 py-4 sm:py-0 w-full"}>
              <div className={`${inter.className} h-full sm:max-w-full px-5 py-4 border border-gray-200 rounded-lg backdrop-blur-2xl text-white shadow bg-plum-300/80 dark:bg-navy-900/50 border-plum-700 dark:border-navy-700 dark:text-white transition-colors hover:bg-plum-300 hover:text-black hover:text-white dark:hover:bg-navy-900 dark:hover:text-white`}>
                Go back
              </div>
            </Link>
          </div>
        </form>
      </Paper>

    </main>
  )
}

export default ThankYouPage;
