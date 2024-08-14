require('dotenv').config(); // Load environment variables

const express = require('express'); // Initialize express
const app = express(); // Create an Express application
require('./config/config');
const bodyParser = require('body-parser');
const port = process.env.PORT
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',(req,res)=>{
    res.send('end point')
})
app.listen(port, () => {
    console.log('Server started at port ' + port);
});
