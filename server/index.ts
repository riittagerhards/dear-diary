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
