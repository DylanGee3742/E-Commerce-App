const express = require('express');
const app = express();
const PORT = 5000;
const registerRouter = require('./routes/register');

//Allow info to be sent from front to backend
app.use(express.urlencoded({ extended: false }))

//Routes
app.use('/register', registerRouter);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});
