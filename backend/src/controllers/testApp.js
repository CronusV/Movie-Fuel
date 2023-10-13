const express = require('express');
const app = express();
const PORT = 3000;

// import the router
const myRouter = require('../utils/movieRouter');

// use the router with a base url
app.use('/MovieFuel', myRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})