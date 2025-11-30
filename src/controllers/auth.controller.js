import * as authService from "../services/auth.service.js"; 

export const registerController = async (req, res) => {
  // Controlador para registrar usuario
  try {
    const { body } = req; 
    const newUser = await authService.registerUser(body);
    res.status(201).json({ status: "Exitoso", data: newUser });
  } catch (error) {
    res.status(500).json({ status: "Error", message: error.message }); 
  }
};

export const loginController = async (req, res) => {
  // Controlador para login de usuario
  try {
    const { email, password } = req.body; 
    const token = await authService.loginUser(email, password); 
    res.status(200).json({
      status: "Exitoso",
      message: "Login exitoso",
      data: { token },
    }); // Responder con el token JWT
  } catch (error) {
    res.status(401).json({ status: "Error", message: error.message }); 
  }
};
