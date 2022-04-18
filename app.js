const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.listen(3000, ()=> {
    console.log('Servidor corriendo en el puerto 3000');
});
app.get('/', (req, res) => { // localhost:3000
    res.status(200).sendFile(path.join(__dirname, 'views/home.html'));
});