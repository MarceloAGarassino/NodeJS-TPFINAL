import { generateToken } from "../utils/jwt.js"; 
import { cleanUser } from "../models/user.model.js"; 

const usersDB = [ // Simulación de base de datos en memoria
  {
    user_id: "1",
    email: "test@gmail.com",
    password: "123456",
    name: "Admin",
    role: "admin",
  },
];

export const registerUser = async (userData) => { // Simulación de registro de usuario
  const existingUser = usersDB.find((user) => user.email === userData.email);
  if (existingUser) {
    throw new Error("El usuario ya existe");
  }
  const newUser = cleanUser(userData); 
  newUser.user_id = (usersDB.length + 1).toString();
  newUser.password = userData.password; 
  usersDB.push(newUser); 
  return newUser;
};

export const loginUser = async (email, password) => { // Simulación de login de usuario
  const user = usersDB.find( 
    (user) => user.email === email && user.password === password 
  );
  if (!user) {
    throw new Error("Credenciales inválidas"); 
  }
  const token = generateToken({ 
    user_id: user.user_id,
    email: user.email,
    role: user.role,
  });
  return token;
};
