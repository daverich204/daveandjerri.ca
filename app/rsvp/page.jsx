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
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-purple-700 dark:text-blue-700">
      <Paper>
        <div className="relative mb-12">
          <h1 className={"text-2xl"}> We&apos;d love it if you could let us know if you will be attending our wedding.</h1>
        </div>

        <hr className={"py-4"} />

        <h2 className={`mb-3 text-2xl font-semibold text-center`}>
          RSVP
        </h2>
        <p className={`m-0 text-sm opacity-50 text-center`}>
          Please enter you&apos;re invite code
        </p>
        <form onSubmit={handleSubmit} className={"flex-col mt-12"}>
          <div className={"relative"}>
            <label htmlFor={"invite_code"} className={"mt-12 pr-12"}>Invite Code</label>
            <input
              className="text-black dark:text-white text-2xl enabled:hover:border-gray-400 disabled:opacity-75 p-1"
              type={"text"} id={"invite_code"} name={"invite_code"} required />
          </div>

          <div className={"relative mt-6 text-center"}>
            <button type={"submit"} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              Submit
            </button>
          </div>
        </form>
      </Paper>

    </main>
  )
}

export default RsvpCodePage;
