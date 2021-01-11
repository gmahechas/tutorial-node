import { app } from './app';

const start = async () => {
  app.listen(9000, () => console.log('Listening on port 9000'));
};

start();