'use client';

import React from 'react';


import useInvite from '../../../components/hooks/useInvite'
import RsvpForm from '../../../components/rsvp/rsvp_form'

const RsvpPage = () => {
  const [inviteResponse, error] = useInvite();

  if (error) {
    return (<div>Error: {error}</div>)
  }

  if (inviteResponse) {
    return (
      <RsvpForm inviteResponse={inviteResponse} />
    )
  } else {
    return (
      <div className={"flex min-h-screen flex-col items-center justify-between text-purple-700 dark:text-blue-700"}>
        Loading...
      </div>
    );
  }
}

export default RsvpPage;
