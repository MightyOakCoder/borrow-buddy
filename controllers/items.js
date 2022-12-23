const Item = require("../models/item");

module.exports = {
    index,
    show,
    new: newItem,
    create
};

function index(req, res) {
    Item.find({}, function (err, items) {
        res.render('items/index', { title: 'All Items', items })
    })
}

function show(req, res) {
    Item.findById(req.params.id, function(err, item) {
      res.render('items/show', { title: 'Item Detail', item });
    });
  }

function newItem(req, res) {
    res.render("items/new", { title: "Add Item" });
};

function create(req, res) {
    const item = new Item(req.body);
    item.save(function(err) {
        if (err) return res.render("items/new");
        console.log(item);
        res.redirect("/items");
    });
}