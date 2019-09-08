require('dotenv').config();
import express from 'express';

const app: express.Application = express();

app.listen(process.env.PORT, () => {
  console.log('✅  Server is running at http://localhost:%s', process.env.PORT,);  
});