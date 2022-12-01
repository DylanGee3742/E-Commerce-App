const express = require('express');
const app = express();
const PORT = 5000;
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const passport = require('passport')
const initializePassport = require('./configuration/passportConfig');
const cors = require('cors');
const session = require('express-session');
const store = new session.MemoryStore();


app.use(cors());

//Allow server to take JSON
app.use(express.json());
//Allow info to be sent from front to backend
app.use(express.urlencoded({ extended: false }));
//Store session data
app.use(session({
    secret: 'secret', //Encrypt info in session
    name: 'uniqueSessionId',
    resave: false, //Resave if nothing changes
    saveUninitialized: false, //Save session details if no value in session
    store,
    cookie: { maxAge: 1000 * 60 * 60 * 24}
}));

//Set up, allow and initialise passport
app.use(passport.initialize());
app.use(passport.session());
initializePassport(passport);

//Routes
app.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('http://localhost:3000/cart')
    } else {
        redirect('http://localhost:3000/login')
    }
});
app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});

