require('dotenv').config(); // Load environment variables

const express = require('express'); // Initialize express
const app = express(); // Create an Express application
require('./config/config');
const port = process.env.PORT
app.use('/',(req,res)=>{
    res.send('end point')
})
app.listen(port, () => {
    console.log('Server started at port ' + port);
});
