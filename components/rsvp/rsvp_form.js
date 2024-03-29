import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GuestAttendance } from './guest_attendance';

import Paper from '../Paper';

const RsvpForm = ({ inviteResponse }) => {
  const router = useRouter();

  // instead of setResponses? just setGuests?
  const [responses, setResponses] = useState([]);

  if (!inviteResponse) { return <div>Loading</div> }

  const { invite, messages } = inviteResponse;
  const { envelope_name, guests } = invite;

  // update responses in memory as the user changes

  const handleResponseChange = (guestId, response) => {
    const index = responses.findIndex(r => r.guest === guestId);
    if (index === -1) {
      setResponses([...responses, { guest: guestId, rsvp: response }]);
    } else {
      const newResponses = [...responses];
      newResponses[index].rsvp = response;
      setResponses(newResponses);
    }
  };

  const hasGuestReplied = (guestId, targetResponse) => {
    return responses.some(r => r.guest === guestId && r.rsvp === targetResponse)
  }

  // post our responses back
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/rsvp', {
      method: 'POST',
      body: JSON.stringify(responses),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response && response.ok) {
        router.push('/rsvp/thankyou')
      }
    }).catch(error => {
      // Handle error
      console.error(error);
    });
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-end justify-between lg:p-24 pt-20">
      <Paper>
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl mb-4">Welcome {envelope_name},</h1>
          <h2 className="text-lg mb-4">{messages.invitation}</h2>
          <h3 className="text-3xl mb-8 text-center">{messages.title}</h3>
          <h3 className="text-md mb-4 text-center">{messages.date_and_place}</h3>
          <h3 className="text-md mb-4 mt-12">{messages.question}</h3>
          {(guests || []).map(guestId => (
            <GuestAttendance
              key={guestId}
              guestId={guestId}
              handleResponseChange={handleResponseChange}
              hasGuestReplied={hasGuestReplied}
              responses
            />
          ))}

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-center w-full border-plum-900 dark:border-navy-900"
            type="submit"
          >
            Submit
          </button>
        </form>
      </Paper>
    </main>
  )
}

export default RsvpForm