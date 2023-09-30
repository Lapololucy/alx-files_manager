
import router from './routes/index';

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

router(app);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

import express from 'express';
import router from './routes/index';

const port = parseInt(process.env.PORT, 10) || 5000;

const app = express();

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

export default app;
>>>>>>> 10a1b0144f7b8a4de5ecd30e570c0434c4850ffc
