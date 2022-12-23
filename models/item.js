const mongoose = require('mongoose')
// opitonal shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const itemSchema = new Schema({
    item: String,
    brand: String,
    category: String,
    owner: String,
    dueDate: Date,
    comments: String,
}, {
    timestamps: true
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Item', itemSchema)