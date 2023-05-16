import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation';

// Defines the endpoint based on the current window location
const API_BASE = typeof window !== 'undefined'
  && (window.location.origin + '/api')
const GUEST_ENDPOINT = API_BASE + '/guest'

// Helper function that uses fetch to invoke the invite API endpoint
async function fetchGuest (id) {
  const requestUrl = new URL(`${GUEST_ENDPOINT}/${id}`)
  const response = await fetch(requestUrl)
  if (!response.ok) {
    throw new Error('Invalid id')
  }
  return await response.json();
}

// The custom hook
export default function useGuest(guestId) {
  // This hook has the inviteResponse and a possible error as state.
  const [
    guestResponse,
    setGuestResponse
  ] = useState(null)
  const [error, setError] = useState(null)


  // We want to make the API call when the component using the hook
  // is mounted so we use the useEffect hook.
  useEffect(() => {
    // We read the code from the current window URL.
    // const url = new URL(window.location.toString())
    // const code = url.searchParams.get('code')
    if (!guestId) {
      console.log("setError....");
      // If there is no code, we set an error message.
      setError('No guest id provided')
    } else {
      console.log("fetchGuest with id => ", guestId);

      // If we have a code, we get the associated data.
      // In case of success or failure we update the state accordingly.
      fetchGuest(guestId)
        .then(setGuestResponse)
        .catch(err => {
          setError(err.message)
        })
    }
  }, [guestId])

  // We return the state variables.
  return [guestResponse, error]
}