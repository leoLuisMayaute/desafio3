const express = require('express');
const classCotenedor = require('./container')

const app = express();
const PORT = process.env.PORT;

const contenedor = new classCotenedor('./productos.json');

app.get('/productos', async (req, res) => {
    const products = await contenedor.getAll();

    res.send({ Productos: products });
})


app.get('/random', async (req, res) => {
    const products = await contenedor.getAll();
    const random = parseInt(Math.random() * products.length);

    res.send({ ProductoRandom: products[random] });
})

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})

server.on('error', error => console.log(`Error en servidor ${error}`));