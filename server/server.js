const express = require('express');
const app = express();
const PORT = 5000;
const registerRouter = require('./routes/register');
const cors = require('cors');

//Allow server to take JSON
app.use(express.json());
//Allow info to be sent from front to backend
app.use(express.urlencoded({ extended: false }));


app.use(cors());

//Routes
app.use('/register', registerRouter);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});

