import Airtable from 'airtable'

// make sure all the necessary env vars are set
if (!process.env.AIRTABLE_API_KEY) {
  throw new Error('AIRTABLE_API_KEY is not set')
}
if (!process.env.AIRTABLE_BASE_ID) {
  throw new Error('AIRTABLE_BASE_ID is not set')
}

// create a new Airtable client and gets a reference to the
// airtable base containing our invites
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
const base = airtable.base(process.env.AIRTABLE_BASE_ID)

// get an invite by invite code (promisified)
export async function getInvite (inviteCode) {
  const [invite, err] = await base('invites').select({
    filterByFormula: `{code} = ${escape(inviteCode)}`,
    maxRecords: 1
  }).firstPage();

  if (err) {
    return new Error(err);
  }

  const { code, envelope_name, guests } = invite.fields;

  return { code, envelope_name, guests }
}

// get a guest by guest id
export async function getGuest (guestId) {
  console.log("getGuest() guestId => ", guestId);
  const guest = await base('guests').find(guestId)

  const { name, type, attending } = guest.fields;

  // format a response
  return { id: guest.id, name, type, attending };
}

// update guest attendance setting
export async function updateGuestAttendance(guestId, newStatus) {
  console.log(`setting guest ${guestId} status to: ${newStatus}`);

  const guestsTable = base('guests');

  return await guestsTable.update(guestId, { attending: newStatus });
}