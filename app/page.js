import Image from 'next/image'
import { Inter } from 'next/font/google'

import LinkCard from '../components/LinkCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24 text-purple-700 dark:text-blue-700">
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="relative flex place-items-center before:absolute before:h-[600px] before:w-[960px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-plum before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[360px] after:w-[480px] after:translate-x-1/3 after:bg-gradient-conic after:from-plum-100 after:via-plum-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-navy-700 before:dark:opacity-10 after:dark:from-navy-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[720px]">
          <Image
            className="relative pt-24 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/DaveAndJerri.svg"
            alt="Dave and Jerri logo"
            width={500}
            height={500}
            objectFit={'100%'}
            priority
          />
        </div>
        {/*<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">*/}
        {/*  <p className="text-2xl pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">*/}
        {/*    October 8, 2023*/}
        {/*  </p>*/}
        {/*</div>*/}
      </div>

      {/*<div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">*/}
      {/*  <p className="text-2xl left-10 text-purple-700 dark:text-blue-700">*/}
      {/*    October 8th, 2023*/}
      {/*  </p>*/}
      {/*</div>*/}

      <div className="testfoo mb-32 grid text-center lg:mb-0 lg:grid-cols-3 sm:grid-cols-1 lg:text-left justify-evenly">
        <LinkCard
          link={'mailto:contact@daveandjerri.ca'}
          title={'Need Help?'}
          text={'Contact us for more details.'}
          linkProps={{ target: '_blank' }}
        />

        <LinkCard
          link={'/rsvp'}
          title={'RSVP'}
          text={"We would love it if you could let us know if you will be attending our wedding."}
        />

        {/*<LinkCard*/}
        {/*  link={"https://watch.daveandjerri.ca"}*/}
        {/*  target={"_blank"}*/}
        {/*  title={'Watch'}*/}
        {/*  text={'Watch us get married virtually'}*/}
        {/*/>*/}

        <LinkCard
          link={'https://www.amazon.ca/wedding/share/daveandjerri2023'}
          title={'Registry'}
          text={'View our registry on Amazon.'}
          linkProps={{ target: '_blank', rel: 'noopener noreferrer' }}
        />
      </div>
    </main>
  )
}
