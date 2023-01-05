const mongoose = require('mongoose')
// opitonal shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const borrowSchema = new Schema({
    _id:  {type: Schema.Types.ObjectId, ref: 'Item'},
    name: String,
    description: String,
    borrowedBy:  {type: Schema.Types.ObjectId, ref: 'User'},
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Borrow', borrowSchema);