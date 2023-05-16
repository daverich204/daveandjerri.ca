import { getGuest } from '../../../../utils/airtable';

export async function GET(req, options = {}) {
  try {
    const { params={} } = options;
    const { gid } = params;
    console.log("GID => ", gid);

    const guest = await getGuest(gid);

    return new Response(
      JSON.stringify({ guest }),
      {
        status: 200
      }
    )
  } catch (error) {
    console.log("GET Caught error => ", error);
    return new Response(
      JSON.stringify(error),
      { status: error.status || 500 }
    )
  }
}
