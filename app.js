const express = require('express');
const app = express();

app.listen(3001, () => {
    console.log('Server started at port ' + 3001);
})