require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));


// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Importar rutas
const habitRoutes = require('./routes/habits');
app.use('/habits', habitRoutes);


const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);


// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API de Hábitos funcionando 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
