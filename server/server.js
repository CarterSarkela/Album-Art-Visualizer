const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client')));

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res
      .status(200)
      .sendFile(path.join(__dirname, '../client/index.html'));
  });
}
//404 handler
app.get('/', (req, res) => {
  res.status(404);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
