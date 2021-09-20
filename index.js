const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('Saludos desde express');
});

app.listen(3080, () => {
    console.log("El servidor está inicializado en el puerto 3080");
});