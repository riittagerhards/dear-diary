import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from 'express';
import { connectDatabase, getEntryCollection } from './database';

if (!process.env.MONGODB_URI) {
  throw new Error('No MongoDB URI env variable');
}

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello from server' });
});

//get all entries

app.get('/api/entries', async (_request, response) => {
  const entryCollection = getEntryCollection();
  const entries = entryCollection.find().sort({ date: -1 });
  const allEntries = await entries.toArray();
  response.send(allEntries);
});

//get one entry by date

app.get('/api/entries/:date', async (request, response) => {
  const entryCollection = getEntryCollection();
  const entry = request.params.date;
  const entryRequest = await entryCollection.findOne({
    date: entry,
  });
  if (!entryRequest) {
    response.status(400).send('No entry for this day');
  } else {
    response.send(entryRequest);
  }
});

//add a new entry

app.post('/api/entries', async (request, response) => {
  const newEntry = request.body;
  const entryCollection = getEntryCollection();
  const existingEntry = await entryCollection.findOne({
    date: newEntry.date,
  });
  if (!existingEntry) {
    const entryDocument = await entryCollection.insertOne(newEntry);
    response
      .status(200)
      .send(`${entryDocument.insertedId} was added to your diary`);
  } else {
    response
      .status(409)
      .send('You already have an entry for this day. Do you want to edit it?');
  }
});

// Serve production bundle
app.use(express.static('dist'));

// Handle client routing, return all requests to the app
app.get('*', (_request, response) => {
  response.sendFile(path.join(__dirname, '../dist/index.html'));
});

connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  })
);
