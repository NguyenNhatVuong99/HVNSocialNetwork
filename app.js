var createError = require('http-errors');
var pejs = require('pejs');
var engine = require('ejs-blocks');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var bcrypt = require('bcrypt');
var Router = require('named-routes');
var router = new Router();
var Redis = require("ioredis")
const RedisStore = require("connect-redis")(session)
const ClientRedis = new Redis()
require("./config/database").connect()



// pusher.trigger("my-channel", "my-event", {
//   message: "hiiii"
// });

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(session({
    name: "ssid",
    resave: false,
    saveUninitialized: true,
    secret: 'somesecret',
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 10000,
        secure: false,
        httpOnly: true
    },
    store: new RedisStore({ client: ClientRedis })
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('nhatvuong99'));

app.use(require("./routes/index"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
let port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server running: http://127.0.0.1:${port}`);
})
module.exports = app;
