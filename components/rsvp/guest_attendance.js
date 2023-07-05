import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import useGuest from '../hooks/useGuest'

export const GuestAttendance = ({ guestId, responses, handleResponseChange, hasGuestReplied }) => {
  const [guestResponse, error] = useGuest(guestId);
  const [guest, setGuest] = useState()

  useEffect(() => {
    if (guestResponse && guestResponse.guest) {
      setGuest(guestResponse.guest);
    }
  }, [guestResponse])

  const isGuestChecked = (targetResponse) => {
    return hasGuestReplied(guestId, targetResponse) // || (guest.attending == targetResponse)
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (guest) {
    return (
      <div key={guestId} className="rounded-lg p-4 flex justify-between items-center">
        <div className="flex items-center">
          <label className="font-bold mr-4">{guest.name}</label>
        </div>
        <div className="flex items-center">
          <label className="mr-4">
            <input
              type="radio"
              value="Yes"
              checked={isGuestChecked("Yes")}
              onChange={() => handleResponseChange(guestId, "Yes")}
              className="mr-2 leading-tight"
            />
            <span className="text-xl">Yes</span>
          </label>
          <label>
            <input
              type="radio"
              value="No"
              checked={isGuestChecked("No")}
              onChange={() => handleResponseChange(guestId, "No")}
              className="mr-2 leading-tight"
            />
            <span className="text-xl">No</span>
          </label>
          {guest.virtual_allowed && (
            <label>
              <input
                type="radio"
                value="No"
                checked={isGuestChecked("No")}
                onChange={() => handleResponseChange(guestId, "No")}
                className="mr-2 leading-tight"
              />
              <span className="text-xl">Attending Virtually</span>
            </label>
          )}
        </div>
      </div>
    );
  } else {
    // loading
    return (
      <div>...</div>
    )
  }
};

export default GuestAttendance