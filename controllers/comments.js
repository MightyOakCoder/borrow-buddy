const Item = require("../models/item");

module.exports = {
    create
}

function create(req, res) {
    Item.findById(req.params.id, function(err, item) {
        item.comments.push(req.body)
        item.save(function(err) {
            res.redirect(`/items/${item._id}`)
        })
    })
}