const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;
const logApi = require('./middlewares/logApi');
const checkApiKey = require('./middlewares/checkApiKey');
const router = require('./router/userRouter');
const cors = require('cors');

const dbConfig = require('./config/mongodbConfig');

app.use(morgan('combined'))
app.use(cors())
app.use(express.json());

dbConfig();

app.use(router);






app.listen(port, () => {
    console.log(`app is listening on http://localhost:${port}`);
})