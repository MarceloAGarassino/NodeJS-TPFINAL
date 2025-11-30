import * as productsService from "../services/products.services.js"; 

export const getAllProductsController = async (req, res) => { // Controlador para obtener todos los productos
  try {
    const products = await productsService.getAllProducts();
    res.status(200).json({ status: "Exitoso", data: products }); 
  } catch (error) {
    res.status(500).json({ status: "Error", message: error.message }); 
  }
};

export const getProductByIdController = async (req, res) => { // Controlador para obtener un producto por ID
  try {
    const { id } = req.params;
    const product = await productsService.getProductById(id); 
    res.status(200).json({ status: "Exitoso", data: product });
  } catch (error) {
    res.status(404).json({ status: "Error", message: error.message });
  }
};

export const createProductController = async (req, res) => { // Controlador para crear un nuevo producto
  try {
    const { body } = req;
    const newProduct = await productsService.createProduct(body); 
    res.status(201).json({ status: "Exitoso", data: newProduct }); 
  } catch (error) {
    res.status(500).json({ status: "Error", message: error.message }); 
  }
};

export const deleteProductController = async (req, res) => { // Controlador para eliminar un producto por ID
  try {
    const { id } = req.params;
    await productsService.deleteProduct(id); 
    res.status(200).json({ status: "Exitoso", message: "Producto eliminado: " + id }); 
  } catch (error) {
    res.status(500).json({ status: "Error", message: error.message }); 
  }
};
