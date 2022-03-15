const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('New commit :)))))');
});


app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running');
});

// test push 1.
