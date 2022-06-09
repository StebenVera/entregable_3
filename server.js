const express = require('express');
const PORT = 8080;
const Productos = require('./controllers/Producto');
const app = express();

app.get('/productos',async(request, response) => {
    const listaProductos = await Productos.getAll();
    response.status(200).json(listaProductos);
});
app.get('/productoRadom', async(request, response) => {
    const productoRadom = await Productos.getOneRadom();
    response.status(200).json(productoRadom);
});
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando por el puerto ${server.address().port}`)
});