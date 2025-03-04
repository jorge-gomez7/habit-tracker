# 📖 Habit Tracker

### 🏆 Gestiona tus hábitos y mejora tu productividad

"Habit Tracker" es una aplicación web desarrollada con **Next.js**, **Express.js** y **MongoDB Atlas** para ayudar a los usuarios a crear y gestionar hábitos diarios. Los usuarios pueden agregar hábitos, marcarlos como completados y llevar un seguimiento de su progreso. La barra de progreso cambia de rojo a verde a medida que el usuario se acerca a los 66 días seguidos de un hábito.

---

## 🎯 Características
✅ **Registro e inicio de sesión de usuarios**
✅ **Creación y eliminación de hábitos**
✅ **Marcado de hábitos como completados**
✅ **Reinicio del progreso si se omite un día**
✅ **Barra de progreso visual**
✅ **Conexión segura a MongoDB Atlas**

---

## 🛠️ Tecnologías utilizadas
- **Frontend**: [Next.js](https://nextjs.org/) (próximamente)
- **Backend**: [Express.js](https://expressjs.com/)
- **Base de Datos**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **ORM**: [Mongoose](https://mongoosejs.com/)
- **Autenticación**: JWT (próximamente)

---

## 🚀 Instalación y Configuración
### **1. Clonar el repositorio**
```bash
    git clone https://github.com/tu-usuario/habit-tracker.git
    cd habit-tracker
```

### **2. Configurar variables de entorno**
Crea un archivo `.env` en la raíz del proyecto y agrega:
```env
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/habit-tracker
PORT=3000
```

### **3. Instalar dependencias**
```bash
    npm install
```

### **4. Ejecutar el servidor**
```bash
    node server.js
```

---

## ⚡ Uso de la API (Ejemplos de Peticiones)
### 📌 **Crear un hábito**
```http
POST http://localhost:3000/habits
Content-Type: application/json
{
    "name": "Leer 10 páginas",
    "userId": "12345"
}
```

### 📌 **Obtener todos los hábitos**
```http
GET http://localhost:3000/habits
```

### 📌 **Actualizar un hábito**
```http
PUT http://localhost:3000/habits/{id}
Content-Type: application/json
{
    "progress": 10
}
```

### 📌 **Eliminar un hábito**
```http
DELETE http://localhost:3000/habits/{id}
```

---

## 🏗️ Estructura del Proyecto
```
📂 habit-tracker
├── 📂 models
│   ├── Habit.js
├── 📂 routes
│   ├── habits.js
├── server.js
├── .env
├── package.json
├── README.md
```

---

## 🤝 Contribución
1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature-nueva`)
3. Realiza los cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature-nueva`)
5. Abre un Pull Request

---

## 📝 Licencia
Este proyecto está bajo la licencia **MIT**. Puedes ver el archivo LICENSE para más detalles.

---

### 🚀 Desarrollado por Jorge Gómez ;)

