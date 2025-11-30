# API de Gestión de Productos - Proyecto Final Talento Tech 2025
# Marcelo A. Garassino


REST API en Node.js y Express para gestión de productos con autenticación JWT y persistencia en Firebase Firestore.

Sistema CRUD para productos con autenticación basado en JWT.


Instalacion las dependencias:

npm install




Inicio del servidor:

npm start


El servidor correra en `http://localhost:3000`

# Endpoints y Autenticación

# Registro de Usuario
```
POST /auth/register
Content-Type: application/json

{
  "email": "usuario@example.com",
  "password": "contraseña",
  "name": "Nombre Usuario",
  "role": "user"
}
```

# Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "test@gmail.com",
  "password": "123456"
}


**Respuesta:**

{
  "status": "Exitoso",
  "message": "Login exitoso",
  "data": {
    "token": "brJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

# Productos

# Obtener Todos los Productos

GET /api/products


# Obtener Producto por ID

GET /api/products/id


# Crear Producto (Requiere autenticación)
```
POST /api/products/create
Authorization: Bearer <token>
Content-Type: application/json

{
  "Nombre": "Prod",
  "precio": 9000,
  "id": 10
}
```

# Eliminar Producto (Requiere autenticación)
```
DELETE /api/products/id
Authorization: Bearer <token>
```
el id sera el campo id y no el hash de identificacion del documento (Ej: 3bQqkH65TIVwZk5I30fh)


# Autenticación

Las rutas que requieren autorizacion, se debe incluir en el header:

Authorization: Bearer <token_jwt>


Para obtener un token, primero debes hacer login con credenciales válidas.

El token es valido por 1 hora.

# Usuario de Prueba

```
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

# Rutas Protegidas

Rutas que requieren autenticación:
- `POST /api/products/create` - Crear
- `DELETE /api/products/:id` - Eliminar

# Persistencia

Se utiliza Firebase Firestore 


# CodeStates
```
- `200` - OK
- `201` - Creado
- `401` - No autorizado
- `403` - Token inválido
- `404` - No encontrado
- `500` - Error del servidor
```
# Formato de Respuestas

```
{
  "status": "Exitoso | Error",
  "message": "Mensaje descriptivo",
  "data": { ... }
}
```


