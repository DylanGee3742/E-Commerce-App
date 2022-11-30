const express = require('express');
const app = express();
const PORT = 5000;
const registerRouter = require('./routes/register');

//Routes
app.use('/register', registerRouter);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});