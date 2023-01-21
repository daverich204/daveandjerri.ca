// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {submitRSVP} from "../../lib/rsvp";
import {RSVPProps} from "../../lib/rsvp";

type Data = {
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req

  const data: RSVPProps = req.body;

  console.log("Request query => ", query);
  console.log("request => ", req.body);
  // submitRSVP()
  console.log("data => ", data);

  const results = await submitRSVP(data);

  console.log("results => ", results);


  res.status(200).json({ success: true })
}