import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation';

// Defines the endpoint based on the current window location
const API_BASE = typeof window !== 'undefined'
  && (window.location.origin + '/api')
const INVITE_ENDPOINT = API_BASE + '/invite'

// Helper function that uses fetch to invoke the invite API endpoint
async function fetchInvite (code) {
  const response = await fetch(`${INVITE_ENDPOINT}/${code}`)
  if (!response.ok) {
    throw new Error('Invalid code')
  }
  return await response.json();
}

// The custom hook
export default function useInvite() {
  // This hook has the inviteResponse and a possible error as state.
  const [
    inviteResponse,
    setInviteResponse
  ] = useState(null)
  const [error, setError] = useState(null)

  const params = useParams();

  const { code } = params;

  // We want to make the API call when the component using the hook
  // is mounted so we use the useEffect hook.
  useEffect(() => {
    // We read the code from the current window URL.
    // const url = new URL(window.location.toString())
    // const code = url.searchParams.get('code')
    if (!code) {
      console.log("setError....");
      // If there is no code, we set an error message.
      setError('No code provided')
    } else {
      console.log("fetchInvite with code => ", code);

      // If we have a code, we get the associated data.
      // In case of success or failure we update the state accordingly.
      fetchInvite(code)
        .then(setInviteResponse)
        .catch(err => {
          setError(err.message)
        })
    }
  }, [code])

  // We return the state variables.
  return [inviteResponse, error]
}