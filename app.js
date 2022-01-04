const express = require ('express');
const path = require('path');

const app = express();

// Hacemos fija la ruta de public
const publicPath = path.resolve(__dirname, './hscool/public');
app.use (express.static(publicPath));
// console.log(publicPath);
app.listen(3010,() => console.log('Conexión exitosa al puerto 3010 Proy Escuela Home'));

app.get('/home', function (req, res) { 
    //res.send ('Bienvenidos al sitio 3030');
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/products', function (req, res) { 
    //res.send ('Bienvenidos al sitio 3030');
    res.sendFile(path.join(__dirname, '/views/productDetail.html'));
});

app.get('/login', function (req, res) { 
    //res.send ('Bienvenidos al sitio 3030');
    res.sendFile(path.join(__dirname, '/views/login.html'));
});