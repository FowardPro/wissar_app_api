require('dotenv').config(); // Load environment variables

const express = require('express'); // Initialize express
const app = express(); // Create an Express application
const port = process.env.PORT
app.listen(port, () => {
    console.log('Server started at port ' + port);
});
