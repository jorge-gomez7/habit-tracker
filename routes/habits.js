const express = require('express');
const Habit = require('../models/habit');
const router = express.Router();

// 📌 Crear un nuevo hábito
router.post('/', async (req, res) => {
    try {
        const habit = new Habit(req.body);
        await habit.save();
        res.status(201).json(habit);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// 📌 Obtener todos los hábitos
router.get('/', async (req, res) => {
    try {
        const habits = await Habit.find();
        res.json(habits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 📌 Actualizar un hábito
router.put('/:id', async (req, res) => {
    try {
        const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(habit);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// 📌 Eliminar un hábito
router.delete('/:id', async (req, res) => {
    try {
        await Habit.findByIdAndDelete(req.params.id);
        res.json({ message: 'Hábito eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 📌 Marcar hábito como completado (y controlar streak)
router.patch('/:id/complete', async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id);
        if (!habit) {
            return res.status(404).json({ error: 'Hábito no encontrado' });
        }

        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);

        const last = habit.lastCompleted ? new Date(habit.lastCompleted) : null;

        if (last) {
            const lastDate = last.toDateString();
            const todayDate = today.toDateString();
            const yesterdayDate = yesterday.toDateString();

            if (lastDate === todayDate) {
                return res.status(200).json({ message: 'Ya marcado como hecho hoy' });
            } else if (lastDate === yesterdayDate) {
                habit.streak += 1;
            } else {
                habit.streak = 1;
            }
        } else {
            habit.streak = 1;
        }

        habit.lastCompleted = today;
        habit.progress = 66; // ✅ Colocar el progreso al máximo
        await habit.save();

        res.json({
            message: 'Hábito marcado como hecho',
            id: habit._id,
            streak: habit.streak,
            lastCompleted: habit.lastCompleted,
            progress: habit.progress
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



// 🔁 Reiniciar hábito manualmente
router.patch('/:id/reset', async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id);
        if (!habit) {
            return res.status(404).json({ error: 'Hábito no encontrado' });
        }

        habit.streak = 0;
        habit.lastCompleted = null;
        habit.progress = 0;
        await habit.save();

        res.json({ message: 'Hábito reiniciado', id: habit._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;
