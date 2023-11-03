const express = require('express');
const app = express();
require('./config/db');
const controller = require('./controller/attribute');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dotenv = require('dotenv')
dotenv.config()

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post("/postAttribute", controller.PostAttribute);
app.get("/getAttribute", controller.GetAttribute);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});