const mongoose = require('mongoose')
// opitonal shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comments: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
},
{
    timestamps: true
})

const itemSchema = new Schema({
    name: String,
    brand: String,
    category: String,
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    available: {type: Boolean, default: true},
    dueDate: {type: Number, default: function() {
            return new Date()
        }},
    comments: [commentSchema]
}, {
    timestamps: true
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Item', itemSchema)