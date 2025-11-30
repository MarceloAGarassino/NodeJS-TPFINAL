import jwt from "jsonwebtoken";

const PRIVATE_KEY = process.env.JWT_SECRET || "default_private_key"; // Key para firmar los tokens

export const generateToken = (user) => {
  const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: "1h" }); // Token válido por 1 hora
  return token;
};

export const authToken = (req, res, next) => {
  const authHeader = req.headers.authorization; // Obtener el header de autorización
  if (!authHeader) {
    return res
      .status(401)
      .json({ status: "Error", message: "Se requiere iniciar sesión" });
  }
  const token = authHeader.split(" ")[1]; 
  jwt.verify(token, PRIVATE_KEY, (err, credentials) => {
    // Verificar el token
    if (err) {
      return res
        .status(403)
        .json({ status: "Error", message: "Token inválido" }); 
    }
    req.user = credentials.user; 
    next();
  });
};
