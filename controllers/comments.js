const Item = require("../models/item");

module.exports = {
    edit,
    update,
    create,
    delete: deleteComment
}

function deleteComment(req, res, next) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  Item.findOne({'comments._id': req.params.id}).then(function(item) {
    console.log(item)
    // Find the review subdoc using the id method on Mongoose arrays
    // https://mongoosejs.com/docs/subdocs.html
    const comment = item.comments.id(req.params.id);
    // Ensure that the review was created by the logged in user
    if (!comment.user.equals(req.user._id)) return res.redirect(`/items/${items._id}`);
    // Remove the review using the remove method of the subdoc
    comment.remove();
    // Save the updated movie
    item.save().then(function() {
      // Redirect back to the movie's show view
      res.redirect(`/items/${item._id}`);
    }).catch(function(err) {
      // Let Express display an error
      return next(err);
    });
  });
}
function create(req, res) {
    // Find the movie to embed the review within
    Item.findById(req.params.id, function(err, item) {
      // Add the user-centric info to req.body
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
      // Push the subdoc for the review
      item.comments.push(req.body);
      // Always save the top-level document (not subdocs)
      item.save(function(err) {
        res.redirect(`/items/${item._id}`);
      });
    });
  }

  function edit(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    Item.findOne({'comments._id': req.params.id}, function(err, item) {
      // Find the comment subdoc using the id method on Mongoose arrays
      // https://mongoosejs.com/docs/subdocs.html
      const comment = item.comments.id(req.params.id);
      // Render the comments/edit.ejs template, passing to it the comment
      res.render('comments/edit', {comment});
    });
  }

  function update(req, res) {
    Item.findOne(
      {"comments._id": req.params.id, "comments.user": req.user._id},
      function(err, item) {
        item.comments.id(req.params.id).set(req.body);
        item.save(function() {
            if (err) return res.redirect('/items');
            res.redirect(`/items/${item._id}`);
        })
      }
    );
  }
  