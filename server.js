require('rootpath')();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const server = require("http").createServer(app);
const io = require('socket.io')(server);
// const socketManage = require('./app/chat/socketManage')(io);
const url = require('url');

app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

app.use((req,res,next) => {
    console.log(req.path," <---> ", req.body);
    next();
});

app.use('/static', express.static(path.join(__dirname, 'public')))
// api routes
app.use('/products', require('./app/products/products.controller'));
// io.on('connection', socketManage );

// global error handler
app.use(errorHandler);

app.get('/', (req, res) => {
    res.redirect('/Login/login.html');
});

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 8080;
server.listen(port, function () {
    console.log('Server listening on port ' + port);
});
