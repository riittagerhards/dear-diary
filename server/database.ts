import { MongoClient } from 'mongodb';

let client: MongoClient;

export async function connectDatabase(url: string) {
  client = new MongoClient(url);
  await client.connect();
}

export function getEntryCollection() {
  return client.db().collection('entries');
}
