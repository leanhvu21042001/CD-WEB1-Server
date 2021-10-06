const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const { errorHandler } = require('./src/middlewares/errorHandler');
const credentials = require('./src/middlewares/credentials');
const corsOptions = require('./src/config/corsOptions');
const cookieParser = require('cookie-parser');

// const fileUpload = require('express-fileupload');

// Create application instance
const app = express();

// write logs to a file.
const accessLogStream = fs.createWriteStream(path.join(__dirname, './src/logs', 'requestLog.log'));

// setup the logger.
app.use(morgan('combined', { stream: accessLogStream }));

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement.
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// set up for cookies middleware
app.use(cookieParser());
// server setup default public static files.
app.use('/uploads/users', express.static('./src/uploads/users'));
app.use('/uploads/posts', express.static('./src/uploads/posts'));

// app.use(fileUpload());

// routes
app.use("/api", require('./src/routes/index.routes'));

// handler errors
app.all('*', (req, res) => {
  return res.status(404).json({ mgs: "Error 404", data: [], success: false });
});

app.use(errorHandler);

const port = process.env.PORT || 1412;
http.createServer(app).listen(port, () => console.log(`http://localhost:${port}`));