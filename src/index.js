const express = require('express');
const config = require("./config");

const app = express();

app.use( express.json() );

app.use('/api/', require('./routes/nutritionist'));

app.listen( config.port, () => {
    console.log(`Servidor corriendo en puerto ${ config.port }`);
});