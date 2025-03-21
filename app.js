import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import data from './data/sample-data.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Serve static files from public directory
app.use(express.static('public'));

// API endpoint to serve JSON data
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
