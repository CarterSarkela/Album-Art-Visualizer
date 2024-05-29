const express = require('express')
const path = require('path');

const app = express();
const PORT = 3000;

const apiRouter = require('./routes/apiRouter')

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client')));


if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
  })
  };
  
//api reqs
app.get('/api', apiRouter);

//404 handler
app.get('/', (req, res) => {
  res.status(404);
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});