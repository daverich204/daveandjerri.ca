'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Paper from '../../components/Paper';

const DetailsPage = () => {
  const router = useRouter();
  const [userCode, setUserCode] = useState('');

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const inviteCode = event.target.invite_code.value;

    router.push(`rsvp/${inviteCode}`);
  }

  const contactButtonClassName = ""

  const sectionClassName= "relative mt-12 pr-4"
  const sectionHeadingClassName = "text-xl"
  const sectionBodyClassName = "pl-4"

  return (
    <main className="flex min-h-screen w-full flex-col items-end justify-center lg:p-24 mt-32">
      <Paper>
        <div className="relative mb-12">
          <h2 className={"text-2xl"}>Welcome to our Special Day!</h2>
        </div>

        <div className={sectionClassName}>
          <p className={""}>
            We are overjoyed to share this momentous occasion with our beloved friends and family. As we come together to celebrate our love and commitment, we want to ensure that the event is intimate and meaningful for all our guests. To create an unforgettable experience for everyone, we kindly request your understanding regarding two aspects of our wedding celebration:
          </p>
        </div>

        <div className={sectionClassName}>
          <h3 className={sectionHeadingClassName}>Invited Guests Only</h3>
          <p className={sectionBodyClassName}>
            To maintain the intimate atmosphere, we kindly request that our guests attend solo unless the invitation specifically includes a plus one. Each invite has been thoughtfully extended, and we look forward to celebrating with those who have been explicitly invited.

            Your presence at our wedding is the most cherished gift, and we sincerely appreciate your understanding and cooperation in honoring our wishes.
          </p>
        </div>

        <div className={sectionClassName}>
          <h3 className={sectionHeadingClassName}>Adults Only</h3>
          <p className={sectionBodyClassName}>
            We kindly ask that our wedding be an adults-only affair. While we adore the little ones in our lives, we believe this choice will allow parents and caregivers to fully enjoy the celebration. We hope this advance notice will give you ample time to arrange for childcare so that you can fully relax and relish in the festivities with us.
          </p>
        </div>


        <div className={sectionClassName}>
          <h3 className={sectionHeadingClassName}>Wedding Day Schedule</h3>
          <ul className="list-disc list-inside">
            <li><span className="font-bold">Doors Open:</span> 4:00 pm</li>
            <li><span className="font-bold">Ceremony:</span> 4:30 pm | approximately 15-20 minutes</li>
            <li><span className="font-bold">Cocktail Hour:</span> 4:50 pm | Guests move to Ballroom</li>
            <li><span className="font-bold">Grand Entrance:</span> 5:40 pm | Ballroom</li>
            <li><span className="font-bold">Dinner:</span> 5:45 pm</li>
            <li><span className="font-bold">Bar closed:</span> During speeches</li>
            <li><span className="font-bold">Late Lunch:</span> 10:00 pm</li>
            <li><span className="font-bold">Bar Close:</span> 12:30 am</li>
            <li><span className="font-bold">Doors Close:</span> 1:00 am</li>
          </ul>
        </div>

        <div className={sectionClassName}>
          <h3 className={sectionHeadingClassName}>Location</h3>
          <p className={`${sectionBodyClassName} text-center text-xl mt-4`}>
            Niverville Heritage Centre
            <br />
            Entrance 100C Heritage Trail
          </p>

          <div className={"relative mt-6 text-center w-full"}>
            <Link href={"https://www.google.com/maps/place/Heritage+Trail,+Niverville,+MB/@49.6042685,-97.050534,17z/data=!3m1!4b1!4m6!3m5!1s0x52c1c4f36eb99527:0x728f3429fe276ab9!8m2!3d49.6042685!4d-97.0479591!16s%2Fg%2F12hmq7s60"} className={"group rounded-lg border border-transparent px-5 py-4 sm:py-0 w-full"}>
              <div className={`${inter.className} h-full sm:max-w-full px-5 py-4 border border-gray-200 rounded-lg backdrop-blur-2xl text-white shadow bg-plum-300/80 dark:bg-navy-900/50 border-plum-700 dark:border-navy-700 dark:text-white transition-colors hover:bg-plum-300 hover:text-black hover:text-white dark:hover:bg-navy-900 dark:hover:text-white`}>
                Find us on Google Maps
              </div>
            </Link>
          </div>
        </div>

        {/*<div className={"relative mt-6 text-center w-full"}>*/}
        {/*  <Link href={"mailto:help@daveandjerri.ca"} className={"group rounded-lg border border-transparent px-5 py-4 sm:py-0 w-full"}>*/}
        {/*    <div className={`${inter.className} h-full sm:max-w-full px-5 py-4 border border-gray-200 rounded-lg backdrop-blur-2xl text-white shadow bg-plum-300/80 dark:bg-navy-900/50 border-plum-700 dark:border-navy-700 dark:text-white transition-colors hover:bg-plum-300 hover:text-black hover:text-white dark:hover:bg-navy-900 dark:hover:text-white`}>*/}
        {/*      Email Us*/}
        {/*    </div>*/}
        {/*  </Link>*/}

        {/*  <Link href={"tel:204-202-9454"} className={"group rounded-lg border border-transparent px-5 py-4 sm:py-0 w-full"}>*/}
        {/*    <div className={`${inter.className} h-full sm:max-w-full px-5 py-4 border border-gray-200 rounded-lg backdrop-blur-2xl text-white shadow bg-plum-300/80 dark:bg-navy-900/50 border-plum-700 dark:border-navy-700 dark:text-white transition-colors hover:bg-plum-300 hover:text-black hover:text-white dark:hover:bg-navy-900 dark:hover:text-white`}>*/}
        {/*      Phone a friend, leave a message*/}
        {/*    </div>*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </Paper>

    </main>
  )
}

export default DetailsPage;
