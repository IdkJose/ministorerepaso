import express from 'express';
import { getProductos } from './controller/productosController.js';
import { get } from 'mongoose';

const app = express();

app.get("/", getProductos);

app.listen(3000, () => {
    console.log("La aplicación esta escuchando en el puerto 3000");
})

export default app;