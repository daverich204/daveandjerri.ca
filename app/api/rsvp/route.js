import { updateGuestAttendance } from 'utils/airtable';
import { sendEmail } from 'utils/sendEmail';

export async function POST(req, res) {
  try {
    let rsvpData = await req.json();

    let response_records = await rsvpData.map(async (reportingGuest) => {
      return await updateGuestAttendance(reportingGuest.guest, reportingGuest.rsvp)
    })

    console.log("rsvpData => ", rsvpData);

    let emailBody = rsvpData.map((rG) => `${rG.guest}: ${rG.rsvp}`).join("\n");
    console.log("emailBody => ", emailBody);

    // notify me
    let sgResponse = await sendEmail({
      to: 'contactme@daverichardson.ca',
      subject: 'RSVP from Guest',
      text: `Guest RSVPs\n${emailBody}`,
    });

    console.log("sgResponse => ", sgResponse);

    return new Response(
      JSON.stringify({ response_records }),
      { status: 200 }
    )
  } catch (error) {
    console.log("POST RSVP / Error => ", error);

    return new Response(
      JSON.stringify({ error }),
      { status: 500 }
    )
  }
}