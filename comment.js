// Create web server
const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const { check } = require("express-validator");

// api/comment
router.post(
  "/",
  [
    check("comment", "Comment is required").not().isEmpty(),
    check("project", "Project is required").not().isEmpty(),
  ],
  commentController.createComment
);
router.get("/:project", commentController.getComments);
router.put("/:id", commentController.updateComment);
router.delete("/:id", commentController.deleteComment);

module.exports = router;