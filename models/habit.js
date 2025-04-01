const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userId: { type: String, required: true },
    progress: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: Date.now },
    streak: { type: Number, default: 0 }, 
    lastCompleted: { type: Date }         
});

module.exports = mongoose.model('Habit', habitSchema);
