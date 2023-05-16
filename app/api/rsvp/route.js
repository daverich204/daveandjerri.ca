import { updateGuestAttendance } from 'utils/airtable';

export async function POST(req, res) {
  try {
    let rsvpData = await req.json();

    let response_records = await rsvpData.map(async (reportingGuest) => {
      return await updateGuestAttendance(reportingGuest.guest, reportingGuest.rsvp)
    })

    return new Response(
      JSON.stringify({ response_records }),
      { status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error }),
      { status: 500 }
    )
  }
}