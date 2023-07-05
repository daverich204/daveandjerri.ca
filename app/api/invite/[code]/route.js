import { getInvite } from 'utils/airtable';
import messages from 'data/messages';

export async function GET(req, options = {}) {
  try {
    const { params={} } = options;
    const { code } = params;

    const invite = await getInvite(code);

    return new Response(
      JSON.stringify({ invite, messages }),
      { status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error }),
      { status: error.status || 500 }
    )
  }
}
