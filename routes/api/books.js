const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;


// 6 lines (12 sloc)  542 Bytes
    
// const router = require("express").Router();
// const articleController = require("../../controllers/articleController");


// // // Matches with "/api/books/:id"
// // router
// //   .route("/:id")
// //   .get(articleController.findById)
// //   .put(articleController.update)
// //   .delete(articleController.remove);

// router.route("/saveArticle").post(articleController.save);
// router.route("/getSavedArticles").get(articleController.getSavedArticles);
// router.route("/deleteSavedArticle").delete(articleController.deleteSavedArticle);

// module.exports = router;
