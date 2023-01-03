const mongoose = require('mongoose')
// opitonal shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const commentSchema = new Schema({
    content: String,
    condition: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userAvatar: String,
    userName: String
},
{
    timestamps: true
})

const itemSchema = new Schema({
    item: String,
    brand: String,
    category: String,
    owner: String,
    dueDate: Date,
    comments: [commentSchema]
}, {
    timestamps: true
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Item', itemSchema);