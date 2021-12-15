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
  const date = request.params.date;
  const entry = await entryCollection.findOne({
    date: date,
  });
  if (!entry) {
    response.status(404).send('No entry for this day');
  } else {
    response.send(entry);
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

//delete an entry by date

app.delete('/api/entries/:date', async (request, response) => {
  const entries = getEntryCollection();
  const entry = request.params.date;
  const deleteResult = await entries.deleteOne({ date: entry });
  if (deleteResult.deletedCount) {
    response.send('Delete succesfull');
  } else {
    response.status(404).send();
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
