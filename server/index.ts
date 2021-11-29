import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDatabase, getEntryCollection } from './database';

if (!process.env.MONGODB_URI) {
  throw new Error('No MongoDB URI dotenv variable');
}

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello from server' });
});

app.get('/api/entries', async (_request, response) => {
  const entryCollection = getEntryCollection();
  const entries = entryCollection.find();
  const allEntries = await entries.toArray();
  response.send(allEntries);
});

app.post('/api/entries', async (request, response) => {
  const newEntry = request.body;
  const entryCollection = getEntryCollection();
  const entryDocument = await entryCollection.insertOne(newEntry);
  response.send(entryDocument.insertedId);
});

connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  })
);
