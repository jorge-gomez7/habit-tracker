const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const router = express.Router();

// 📌 Registro
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si ya existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: 'El correo ya está registrado' });
        }

        // Hashear contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear usuario
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 📌 Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        res.json({ message: 'Login exitoso', userId: user._id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
