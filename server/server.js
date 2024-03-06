const express = require('express')
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.js'));
});

//404 handler
app.get('/', (req, res) => {
  res.status(404)
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});