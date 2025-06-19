const Router = require("express");
const router = new Router();
const feedbackContoller = require("../controllers/feedbackController");
const adminAuthMiddleware = require("../middleware/authMiddleware");

router.get("/feedback-get", feedbackContoller.getAllFeedBack);
router.get("/feedback-get-id/:id", feedbackContoller.getFeedBackById);

router.post("/feedback-create", feedbackContoller.createFeedBack);

router.patch("/feedback-change", feedbackContoller.updateFeedBack);

module.exports = router;
