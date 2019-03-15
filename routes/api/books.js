const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/saved/books")
    .get(booksController.findAll);


// Save a new book in database
router.route("/search/books")
    .post(booksController.create);

// Matches with "/api/books/:id"
router
    .route("saved/books/:id")
    .get(booksController.findById)
    // .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;
