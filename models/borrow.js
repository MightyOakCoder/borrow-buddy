const mongoose = require('mongoose')
// opitonal shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const borrowSchema = new Schema({
    item: String,
    brand: String,
    category: String,
    owner: String,
    dueDate: Date
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Borrow', borrowSchema);