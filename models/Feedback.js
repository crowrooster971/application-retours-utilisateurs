const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    utilisateur: { type: String, required: true },
    produit: { type: String, required: true },
    commentaires: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
