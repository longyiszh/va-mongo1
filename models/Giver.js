const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const planedCDKSchema = new Schema({
    name: String,
    receiver: String
});

const GiverSchema = new Schema({
    name: String,
    planedCDK: []
});

const Giver = mongoose.model('giver', GiverSchema);

module.exports = Giver;