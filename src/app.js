const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const DATA_PATH = path.join(__dirname, 'data.json');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function readData() {
  return JSON.parse(fs.readFileSync(DATA_PATH));
}

function writeData(data) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data));
}

app.get('/results', (req, res) => {
  res.json(readData());
});

app.post('/vote', (req, res) => {
  const data = readData();
  const vote = req.body.vote;
  if (data[vote] !== undefined) {
    data[vote]++;
    writeData(data);
  }
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Voting app running on http://localhost:${PORT}`);
});
