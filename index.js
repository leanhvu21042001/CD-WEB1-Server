const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const app = express();

// setup default public files.
app.use('/uploads/users', express.static('./src/uploads/users'));
app.use('/uploads/posts', express.static('./src/uploads/posts'));

// setup default middlewares.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ['GET', 'POST', 'DELETE', 'PATCH'],
  credentials: true
}));
app.use(fileUpload());

// routes


const port = process.env.PORT || 1412;
http.createServer(app).listen(port, () => console.log(`http://localhost:${port}`));