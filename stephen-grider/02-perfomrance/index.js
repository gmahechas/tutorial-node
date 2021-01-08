const cluster = require('cluster');

if (cluster.isMaster) {
  // Cause index.js to be executed *again* but in child mode
  cluster.fork();
} else {
  // Here there is a child, It is going to act like a server and do nothing else
  const express = require('express');

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) { }
  }

  const app = express();

  app.get('/', (req, res) => {
    doWork(5000);
    res.send('Hi there');
  });
  app.get('/fast', (req, res) => {
    res.send('This is fast');
  });

  app.listen(3000, () => console.log('server is runnimg on port 3000'));
}



// ab -c 50 -n 500 localhost:3000/fast
// use apache benchmark with 500 request and concurrently 50 to localhost
