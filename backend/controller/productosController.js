let productos = [
    {id: 1, nombre:"Camisa a cuadros", precio:30.50, categoria:"Ropa"},
    {id: 2, nombre:"Gafas", precio:50, categoria:"Accesorios"},
]


export const getProductos = (req, res) => {
    res.status(200).json(productos)
};