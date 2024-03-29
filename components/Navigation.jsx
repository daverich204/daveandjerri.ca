"use client";
import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';



const Navigation = ({ }) => {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  let navText = "Dave and Jerri"

  if (pathname.indexOf("rsvp") > 0) {
    navText = "RSVP"
  }
  if (pathname.indexOf("thankyou") > 0) {
    navText = "Thank you!"
  }
  if (pathname.indexOf("contact") > 0) {
    navText = "Contact us"
  }
  if (pathname.indexOf("details") > 0) {
    navText = "Details"
  }


  return (
    <>
      <nav className="fixed top-0 left-0 z-10 flex items-center justify-center flex-wrap bg-plum-600/90 dark:bg-navy-600/90 p-2 w-full">
        <Link href="/">
          <div className="inline-flex items-center p-2 mr-4">
            <Image
              className="relative fill-current invert dark:invert mr-4"
              src="/DaveAndJerri.svg"
              alt="Dave and Jerri logo"
              width={40}
              height={40}
              priority
            />
            {/*<svg*/}
            {/*  viewBox="0 0 24 24"*/}
            {/*  xmlns="http://www.w3.org/2000/svg"*/}
            {/*  className="fill-current text-white h-8 w-8 mr-2"*/}
            {/*>*/}
            {/*  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />*/}
            {/*</svg>*/}
            <span className="text-xl text-white font-bold tracking-wide">
             {navText}
            </span>
          </div>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-plum-300 dark:hover:bg-navy-300 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/" onClick={() => setActive(!active)}>
              <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-plum-300 dark:hover:bg-navy-300 hover:text-plum-900 dark:hover:text-navy-900">
                Home
              </div>
            </Link>
            <Link href="/rsvp" onClick={() => setActive(!active)}>
              <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-plum-300 dark:hover:bg-navy-300 hover:text-plum-900 dark:hover:text-navy-900">
                RSVP
              </div>
            </Link>
            <Link href="/contact" onClick={() => setActive(!active)}>
              <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-plum-300 dark:hover:bg-navy-300 hover:text-plum-900 dark:hover:text-navy-900">
                Contact
              </div>
            </Link>
            <Link href="/details" onClick={() => setActive(!active)}>
              <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-plum-300 dark:hover:bg-navy-300 hover:text-plum-900 dark:hover:text-navy-900">
                Details
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation