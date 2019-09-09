import express, { Application } from 'express';

require('dotenv').config();

const app: Application = express();

app.listen(process.env.PORT, () => {
  console.log('✅  Server is running at http://localhost:%s', process.env.PORT);
});
