'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Paper from '../../components/Paper';

const RsvpCodePage = () => {
  const router = useRouter();
  const [userCode, setUserCode] = useState('');

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const inviteCode = event.target.invite_code.value;

    router.push(`rsvp/${inviteCode}`);
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center lg:p-24">
      <Paper>
        <div className="relative mb-12">
          <h2 className={"text-2xl"}> We&apos;d love it if you could let us know if you will be attending our wedding.</h2>
        </div>

        <form onSubmit={handleSubmit} className={"flex-col mt-12"}>
          <div className={"relative"}>
            <label htmlFor={"invite_code"} className={"mt-12 pr-12"}>Please enter you&apos;re invite code</label>
            <input
              className="text-black dark:text-white text-center text-2xl enabled:hover:border-gray-400 disabled:opacity-75 p-1 w-full rounded-lg mt-4"
              type={"text"} id={"invite_code"} name={"invite_code"} required />
          </div>

          <div className={"relative mt-6 text-center"}>
            <button type={"submit"} className="group rounded-lg border border-transparent px-5 py-4 transition-colors w-full border-plum-900 dark:border-navy-900 hover:border-gray-300 hover:bg-plum-200 hover:dark:border-navy-700 hover:dark:text-navy-800 hover:dark:bg-navy-200">
              Submit
            </button>
          </div>
        </form>
      </Paper>

    </main>
  )
}

export default RsvpCodePage;
