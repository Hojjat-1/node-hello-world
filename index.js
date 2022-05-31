const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Hi. Server is running');
  res.send('Hello node.js world again ...');
});


app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running');
});

// test push 1.
