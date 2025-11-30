import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {productsRouter} from "./src/routes/products.routes.js"; 
import { corsConfig } from "./src/utils/cors.config.js"; 
import { authRouter } from "./src/routes/auth.routes.js"; 

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(cors(corsConfig)); 

app.use(bodyParser.json()); 


app.use("/auth", authRouter); 

app.use("/api/products", productsRouter); 


app.use((req, res, next) => { 
  res.status(404).json ({
    status: "Error",
    message: "Ruta no encontrada"
  });
});


if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`TP Final de NodeJS - Talento Tech 2025`);
    console.log(`Marcelo A. Garassino`);
    console.log(`Server corriendo en puerto ${PORT}`);
  });
}


export default app;
