const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: ''
    // origin: 'http://localhost:3000'
    // origin: 'http://right-blood.surge.sh'
}));
app.use(express.json()); 
app.use(routes);

app.listen(process.env.PORT || 3333);
