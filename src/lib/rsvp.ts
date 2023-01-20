import clientPromise from './mongodb';

export interface RSVPProps {
  name: string;
  email: string;
  meal: string;
  number_of_guests: number;
}

export async function submitRSVP(data: RSVPProps) {
  const client = await clientPromise
  const collection = client.db('wedding').collection('rsvp');
  return await collection.insertOne(data)
}