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

const imageSchema = new Schema ({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});

const itemSchema = new Schema({
    image: [imageSchema],
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