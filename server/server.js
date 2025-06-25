const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/save', (req, res) => {
  const config = req.body;
  fs.writeFileSync('config.json', JSON.stringify(config, null, 2));
  res.json({ message: 'Configuration Saved' });
});

app.get('/load', (req, res) => {
  if (fs.existsSync('config.json')) {
    const data = fs.readFileSync('config.json');
    res.json(JSON.parse(data));
  } else {
    res.json({});5173
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
