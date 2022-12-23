module.exports = {
    new: newItem
};

function newItem(req, res) {
    res.render("items/new");
}