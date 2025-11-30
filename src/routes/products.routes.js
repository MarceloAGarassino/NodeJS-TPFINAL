import { Router } from "express";
import * as productsController from "../controllers/products.controller.js"; 
import { authToken } from "../utils/jwt.js"; 

export const productsRouter = Router(); 

productsRouter.get("/", productsController.getAllProductsController); 

productsRouter.get("/:id", productsController.getProductByIdController); 

productsRouter.post("/create", authToken, productsController.createProductController); 
productsRouter.delete("/:id", authToken, productsController.deleteProductController); 